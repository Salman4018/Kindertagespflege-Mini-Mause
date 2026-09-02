# Kindertagespflege Mini-Mäuse

Bilingual German-first landing page for Kindertagespflege Mini-Mäuse.

## Requirements

- Node.js 24 LTS
- npm 10 or newer

## Setup

```sh
npm install
npm run dev
```

## Routes

| Path                 | Content                                 |
| -------------------- | --------------------------------------- |
| `/`                  | German landing page                     |
| `/en/`               | English landing page                    |
| `/de/`               | Static redirect to `/`                  |
| `/rechtliches/`      | German legal notice and privacy policy  |
| `/en/legal/`         | English legal notice and privacy policy |
| `/anfrage-gesendet/` | German enquiry confirmation             |
| `/en/enquiry-sent/`  | English enquiry confirmation            |

Language switching preserves the equivalent page and, on the landing pages, the current section
anchor.

## Checks

```sh
npm run typecheck
npm run lint
npm run format:check
npm run build
npm test
```

Install the Playwright Chromium browser once before running end-to-end tests:

```sh
npx playwright install chromium
```

## Environment

Copy `.env.example` to `.env.local` when the external enquiry form is configured. Only
variables prefixed with `VITE_` are available to frontend code; never place credentials or secrets
in them.

Set `VITE_SITE_URL` to the complete public site URL, including a GitHub Pages repository base path
when applicable, before launch. It must end with `/`. The committed production value in
`.env.production` points to the GitHub Pages project URL. `VITE_BASE_PATH` must be `/` for a custom
domain or `/REPOSITORY-NAME/` for a GitHub Pages project site. The tracked `.env.development`
provides `http://localhost:5173/` and `/` for local development; `.env.test` provides isolated test
values.

### Enquiry form activation

The enquiry form uses a public Formspree endpoint and remains disabled when
`VITE_FORM_ENDPOINT` is empty. The endpoint is not a credential; recipient addresses, account
settings, and any private keys must remain in Formspree.

Before enabling submissions:

1. Create the Formspree form and verify its destination email address.
2. Review and sign the applicable data processing agreement.
3. Confirm safeguards for processing or transfers outside the EEA.
4. Set deletion periods for Formspree submissions and recipient mailbox copies.
5. Configure provider-side field validation and the `_gotcha` honeypot where supported.
6. Enable an automatic acknowledgement only with a generic receipt message that repeats no
   childcare details.
7. Set `VITE_FORM_ENDPOINT` to the generated `https://formspree.io/f/...` URL.
8. Complete operator or legal review of the privacy text.
9. Build and test one real notification and acknowledgement from the deployed site.

The Playwright suite builds with `.env.test` and intercepts its local test endpoint. Automated tests
never send data to Formspree.

## GitHub Pages deployment

The production site is configured for:

```text
https://salman4018.github.io/Kindertagespflege-Mini-Mause/
```

`.github/workflows/deploy-pages.yml` runs formatting, lint, browser tests, and the production build
for every push to `main`, then deploys `dist` with GitHub's official Pages actions. It can also be
started manually from the Actions tab.

Repository setup required once:

1. Open **Settings > Pages** in the GitHub repository.
2. Set **Source** to **GitHub Actions**.
3. Push or merge the changes to `main`, or run **Deploy to GitHub Pages** manually.
4. Confirm the deployed German, English, legal, redirect, and confirmation routes.

The workflow uses only the automatically issued GitHub token and does not require a deployment
secret. If a custom domain is added later, set `VITE_SITE_URL` to that HTTPS URL and
`VITE_BASE_PATH=/`, then configure the domain in GitHub Pages.

## Brand assets

The favicon, Apple touch icon, manifest icons, and the Open Graph image are generated from the same
shapes as `public/favicon.svg` by a dependency-free script:

```sh
npm run generate:icons
```

Run it only after changing the brand mark; the output is committed.

## Architecture

- React and TypeScript provide the shared UI.
- Vite builds static assets for GitHub Pages and future AWS hosting.
- Native CSS provides design tokens and component styles.
- Typed files in `src/content` keep German and English content aligned.
- `src/content/business.ts` holds machine-readable business facts. Unconfirmed values are `null` and
  are never rendered or published in structured data.
- `src/locales.ts` owns the supported languages, default language, and page paths.
- `src/mount.tsx` bootstraps any entry point with the content matching the document language.
- `scripts/vite-plugin-seo.ts` generates JSON-LD, `sitemap.xml`, and `robots.txt` at build time from
  the same content the pages render.
- `index.html` is the default German entry point.
- `en/index.html` is the English entry point.
- `rechtliches/index.html` and `en/legal/index.html` render the legal pages.
- `anfrage-gesendet/index.html` and `en/enquiry-sent/index.html` render noindex confirmation pages.
- `public/de/index.html` is a static redirect to the default German entry point.

See `kindertagespflege-implementation-plan.md` for the phased delivery plan.
See `PROJECT_STATUS.md` for current deployment readiness, blockers, and the form activation checklist.
