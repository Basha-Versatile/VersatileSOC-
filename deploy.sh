#!/usr/bin/env bash
# Build and deploy versatilesoc.com to S3 + CloudFront.
#
# Required environment variables:
#   S3_BUCKET            e.g. versatilesoc-com-prod
#   CF_DISTRIBUTION_ID   CloudFront distribution ID, e.g. E1XXXXXXXXXX
#
# Optional:
#   AWS_PROFILE          AWS named profile to use
#   AWS_REGION           defaults to ap-south-1 (Mumbai)
#
# Usage: ./deploy.sh
set -euo pipefail

if [[ -z "${S3_BUCKET:-}" ]]; then
  echo "✗ S3_BUCKET is required" >&2
  exit 1
fi
if [[ -z "${CF_DISTRIBUTION_ID:-}" ]]; then
  echo "✗ CF_DISTRIBUTION_ID is required" >&2
  exit 1
fi

AWS_REGION="${AWS_REGION:-ap-south-1}"
DIST_DIR="dist"

echo "▶ Building site..."
npm run build

echo "▶ Syncing hashed assets (long cache) to s3://${S3_BUCKET}/assets/ ..."
aws s3 sync "${DIST_DIR}/assets/" "s3://${S3_BUCKET}/assets/" \
  --region "${AWS_REGION}" \
  --delete \
  --cache-control "public, max-age=31536000, immutable"

echo "▶ Syncing static images / fonts / public files (short cache, no delete on root) ..."
# Sync everything else — HTML, xml, txt, etc. — with short cache.
aws s3 sync "${DIST_DIR}/" "s3://${S3_BUCKET}/" \
  --region "${AWS_REGION}" \
  --delete \
  --exclude "assets/*" \
  --cache-control "public, max-age=300, must-revalidate"

echo "▶ Setting precise content types on key files..."
aws s3 cp "s3://${S3_BUCKET}/sitemap-index.xml" "s3://${S3_BUCKET}/sitemap-index.xml" \
  --region "${AWS_REGION}" \
  --metadata-directive REPLACE \
  --content-type "application/xml" \
  --cache-control "public, max-age=300, must-revalidate" \
  >/dev/null 2>&1 || true

echo "▶ Creating CloudFront invalidation for /*"
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id "${CF_DISTRIBUTION_ID}" \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text)

echo "✓ Deployment complete."
echo "  Invalidation: ${INVALIDATION_ID}"
echo "  Site:         https://www.versatilesoc.com"
