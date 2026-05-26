# AWS Setup — S3 + CloudFront for www.versatilesoc.com

A one-time setup guide for hosting the built Astro site on AWS.

## 1. Create the S3 bucket (private)

```sh
aws s3api create-bucket \
  --bucket versatilesoc-com-prod \
  --region ap-south-1 \
  --create-bucket-configuration LocationConstraint=ap-south-1

# Block all public access — CloudFront will be the only reader.
aws s3api put-public-access-block \
  --bucket versatilesoc-com-prod \
  --public-access-block-configuration BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true
```

## 2. Request an ACM certificate (in us-east-1, required for CloudFront)

```sh
aws acm request-certificate \
  --domain-name www.versatilesoc.com \
  --subject-alternative-names versatilesoc.com \
  --validation-method DNS \
  --region us-east-1
```

Add the DNS validation records to your registrar (Route 53 or wherever the domain lives) and wait for the certificate to move to **ISSUED**.

## 3. Create the CloudFront distribution

In the console (easiest) or via CLI:

- **Origin:** the S3 bucket above
- **Origin access:** "Origin Access Control" (OAC) — create a new OAC, attach it
- **Viewer protocol policy:** Redirect HTTP → HTTPS
- **Allowed methods:** GET, HEAD
- **Cache policy:** `CachingOptimized` (managed)
- **Response headers policy:** `SecurityHeadersPolicy` (managed) — adds HSTS, X-Content-Type-Options, etc.
- **Alternate domain names (CNAMEs):** `www.versatilesoc.com`, `versatilesoc.com`
- **Custom SSL certificate:** the ACM cert from step 2
- **Default root object:** `index.html`

### Custom error responses (clean 404)

| HTTP error | Response page path     | HTTP response code | TTL |
|-----------:|------------------------|-------------------:|----:|
| 403        | `/404/index.html`       | 404                | 60  |
| 404        | `/404/index.html`       | 404                | 60  |

### Optional — CloudFront Function for clean URLs

The site is built with `build.format: 'directory'`, so every page is `<route>/index.html`. CloudFront usually handles this fine, but if you see `AccessDenied` on routes like `/about`, attach this CloudFront Function as a **viewer-request** trigger on the default behaviour:

```js
function handler(event) {
  var req = event.request;
  var uri = req.uri;
  if (uri.endsWith('/')) {
    req.uri = uri + 'index.html';
  } else if (!uri.includes('.')) {
    req.uri = uri + '/index.html';
  }
  return req;
}
```

## 4. Bucket policy — allow only this CloudFront distribution

After the distribution is created, attach this policy to the bucket (replace placeholders):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontServicePrincipalReadOnly",
      "Effect": "Allow",
      "Principal": { "Service": "cloudfront.amazonaws.com" },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::versatilesoc-com-prod/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::ACCOUNT_ID:distribution/CF_DISTRIBUTION_ID"
        }
      }
    }
  ]
}
```

## 5. DNS

Point Route 53 (or your DNS) `A` / `AAAA` ALIAS records for both `www.versatilesoc.com` and `versatilesoc.com` to the CloudFront distribution.

If you want the apex (`versatilesoc.com`) to redirect to `www.versatilesoc.com`, the cleanest option is a second tiny S3 redirect bucket configured for redirect-only website hosting, fronted by its own CloudFront distribution.

## 6. Deploy

```sh
export S3_BUCKET=versatilesoc-com-prod
export CF_DISTRIBUTION_ID=E1XXXXXXXXXX
./deploy.sh
```

## Costs (rough estimate, low traffic marketing site)

- **S3:** a few cents/month (storage is small, CloudFront fetches via OAC)
- **CloudFront:** ~$0.085/GB out for first 10 TB in India region edges; for typical marketing-site traffic this is single-digit USD/month
- **Route 53:** $0.50/month per hosted zone
- **ACM:** free
