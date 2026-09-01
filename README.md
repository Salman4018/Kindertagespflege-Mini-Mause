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

| Path            | Content                                 |
| --------------- | --------------------------------------- |
| `/`             | German landing page                     |
| `/en/`          | English landing page                    |
| `/de/`          | Static redirect to `/`                  |
| `/rechtliches/` | German legal notice and privacy policy  |
| `/en/legal/`    | English legal notice and privacy policy |

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
`.env.production` uses the reserved `example.invalid` domain so an unconfigured build cannot claim a
real canonical URL. Changing it also requires updating the URL constants in `tests/e2e/`.

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
- `public/de/index.html` is a static redirect to the default German entry point.

See `kindertagespflege-implementation-plan.md` for the phased delivery plan.
