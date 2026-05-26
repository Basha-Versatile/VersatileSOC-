# Versatile SOC — Marketing Website

Static marketing site for **Versatile SOC India Pvt Ltd** (www.versatilesoc.com), built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com) and designed for deployment to **AWS S3 + CloudFront**.

## Stack

- **Astro 6** (static output)
- **Tailwind CSS 4** (via the `@tailwindcss/vite` plugin)
- **astro-icon** + Lucide icon set
- **@astrojs/sitemap** for `/sitemap-index.xml`
- No client-side JS framework — pure HTML/CSS plus a tiny mobile-nav script

## Project structure

```
.
├── public/                  # Static assets copied as-is (favicon, robots.txt, images)
├── src/
│   ├── components/          # Header, Footer, Hero, ServiceCard, CTASection, ...
│   ├── data/                # Site config + content (services, industries, nav)
│   ├── layouts/             # BaseLayout (SEO head, header, footer)
│   ├── pages/
│   │   ├── index.astro                # Home
│   │   ├── about.astro                # Company, leadership, quality
│   │   ├── services/
│   │   │   ├── index.astro            # Services overview
│   │   │   └── [slug].astro           # Per-service detail (data-driven)
│   │   ├── industries.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   └── 404.astro
│   └── styles/global.css    # Tailwind + design tokens
├── astro.config.mjs
├── deploy.sh                # Sync built site to S3 + invalidate CloudFront
└── package.json
```

## Local development

This project requires **Node.js 22+**.

```sh
nvm use 22            # or install Node 22 via your preferred manager
npm install
npm run dev           # http://localhost:4321
```

Other commands:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm run dev`     | Local dev server with HMR                    |
| `npm run build`   | Production build → `./dist/`                 |
| `npm run preview` | Preview the production build locally         |

## Adding content

- **Site-wide config (company name, contact, social):** `src/data/site.ts`
- **Services:** `src/data/services.ts` — adding a new entry automatically generates a `/services/<slug>` page and shows up in nav/footer.
- **Industries:** `src/data/industries.ts`
- **Navigation:** `src/data/site.ts` → `nav`

## Deployment to S3 + CloudFront

The site is fully static. Recommended setup:

1. **S3 bucket** (private), named e.g. `versatilesoc-com-prod`
2. **CloudFront distribution** in front of it, with **Origin Access Control (OAC)** so the bucket stays private
3. CloudFront alternate domain: `www.versatilesoc.com` (and `versatilesoc.com` with an S3 redirect bucket if you want apex → www)
4. ACM TLS certificate in **us-east-1** for `versatilesoc.com` and `www.versatilesoc.com`
5. CloudFront default root object: `index.html`
6. CloudFront custom error responses: map `403` and `404` → `/404/index.html` with HTTP 404

### One-shot deploy

```sh
# Required env vars
export AWS_PROFILE=versatilesoc        # or use AWS_ACCESS_KEY_ID / SECRET
export S3_BUCKET=versatilesoc-com-prod
export CF_DISTRIBUTION_ID=E1XXXXXXXXXX # CloudFront distribution ID

./deploy.sh
```

`deploy.sh` runs `npm run build`, syncs `dist/` to S3 with sensible cache headers (long cache for `/assets/*`, short cache for HTML), and triggers a CloudFront invalidation.

### Cache headers used by the deploy script

- **`/assets/*`** (hashed JS/CSS/img from Astro):  `Cache-Control: public, max-age=31536000, immutable`
- **HTML, sitemap, robots.txt, root files:** `Cache-Control: public, max-age=300, must-revalidate`

### Astro static output notes

This project uses `build.format: 'directory'`, which means every route is emitted as `<route>/index.html` (e.g. `/services/index.html`). That matches how CloudFront + S3 serve sites cleanly without rewrites — but if you ever switch to direct S3 website hosting (not via CloudFront OAC), you may need a small Lambda@Edge or CloudFront Function to handle the trailing-slash rewrite.

## SEO

- `astro:sitemap` auto-generates `/sitemap-index.xml` at build time, scoped to the configured `site` (`https://www.versatilesoc.com`).
- `robots.txt` is in `public/`.
- Organisation JSON-LD is rendered globally in `BaseLayout.astro`.

## License

© Versatile SOC India Pvt Ltd. All rights reserved.
