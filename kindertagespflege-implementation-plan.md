# Kindertagespflege Mini-Mause Implementation Plan

## Project Goals

Create a modern, classy, and welcoming landing page for **Kindertagespflege Mini-Mause** with:

- German as the default language
- Complete German and English versions
- A strong focus on childcare-place enquiries
- A responsive, mobile-first design
- Temporary generic imagery and a placeholder logo
- An external form endpoint for enquiry delivery
- Initial deployment through GitHub Pages
- A structure that can later move to AWS
- Strong accessibility, privacy, SEO, and performance

## Proposed Stack

Use current stable releases available when implementation begins.

| Area                | Technology                                            |
| ------------------- | ----------------------------------------------------- |
| Build runtime       | Current Node.js LTS                                   |
| UI                  | React                                                 |
| Language            | TypeScript with strict mode                           |
| Build tool          | Vite                                                  |
| Styling             | Native CSS with CSS custom properties                 |
| Content             | Typed German and English content objects              |
| Form                | Native HTML form and external GDPR-conscious endpoint |
| Testing             | Playwright for critical user journeys                 |
| Code quality        | TypeScript, ESLint, and Prettier                      |
| Deployment          | GitHub Actions and GitHub Pages                       |
| Future hosting      | AWS S3 and CloudFront                                 |
| Future form backend | API Gateway, Lambda, and SES                          |

Vite is used only for local development, TypeScript compilation, and producing static assets. The deployed website is ordinary HTML, CSS, and JavaScript and does not require Node.js at runtime. This keeps it portable across GitHub Pages, AWS S3 and CloudFront, and other static hosts.

### Dependency Policy

- Keep React and React DOM as the only initial runtime dependencies.
- Use native CSS instead of Tailwind CSS or CSS-in-JS.
- Use normal links and separate static entry pages instead of React Router.
- Use typed content objects instead of an internationalization library.
- Use native form controls and browser validation instead of a form framework.
- Use CSS transitions and native browser APIs instead of an animation library.
- Store local SVG assets instead of installing an icon library.
- Add a dependency only when browser capabilities or a small local implementation cannot meet a confirmed requirement.
- Use current stable releases, pin the Node.js LTS major version, and commit `package-lock.json`.

## Phase 1: Foundation

**Status:** Completed on 1 September 2026.

### Tasks

- Create a standalone React application using Vite.
- Enable strict TypeScript.
- Add a native CSS design system based on CSS custom properties.
- Configure ESLint and Prettier.
- Establish the initial source structure.
- Configure environment variables for the external form endpoint.
- Add scripts for development, build, linting, and tests.
- Document supported Node.js and package-manager versions.
- Set up a `.gitignore` that excludes environment files and build artifacts.

### Current Structure

```text
src/
  components/
    Brand.tsx
    Icon.tsx
    LanguageLink.tsx
    SectionHeading.tsx
    SiteFooter.tsx
    SiteHeader.tsx
  content/
    business.ts
    de.ts
    en.ts
    types.ts
  styles/
    tokens.css
    global.css
    components.css
    responsive.css
  App.tsx
  LegalPage.tsx
  locales.ts
  main.tsx
  legal.tsx
  mount.tsx
scripts/
  generate-icons.mjs
  vite-plugin-seo.ts
public/
  images/
    placeholders/
  logo/
  favicon.svg
  favicon.ico
  favicon-32.png
  apple-touch-icon.png
  icon-192.png
  icon-512.png
  og-image.png
  site.webmanifest
  de/
    index.html
tests/
  e2e/
en/
  index.html
  legal/
    index.html
rechtliches/
  index.html
index.html
```

A `.github/workflows/` directory is still outstanding; see Phase 10.

### Deliverables

- [x] Locally running React application
- [x] Successful production build
- [x] Initial quality-tool configuration
- [x] Clean separation between presentation and content

## Phase 2: Visual Design System

**Status:** Completed on 1 September 2026.

### Tasks

- Define the warm editorial visual direction.
- Build a responsive typography scale.
- Define colors as reusable design tokens.
- Implement design tokens with native CSS custom properties.
- Define spacing, borders, shadows, and corner treatments.
- Create reusable button, card, section, and form styles.
- Establish keyboard focus and hover states.
- Add restrained transitions and reveal effects.
- Respect the visitor's reduced-motion preference.

### Initial Visual Direction

- Warm ivory page background
- Deep charcoal text
- Muted sage primary color
- Dusty rose or soft terracotta accent
- Editorial serif headings
- Clean sans-serif body text
- Generous whitespace
- Carefully restrained rounded and arched shapes
- Subtle mouse-inspired details without cartoon-heavy decoration

### Temporary Logo

Create a neutral placeholder brand treatment containing:

```text
Mini-Mause
Kindertagespflege
```

The placeholder will:

- Be clearly marked as temporary in the source.
- Use text and simple decorative shapes.
- Avoid imitating another brand.
- Occupy approximately the same layout space as a future logo.
- Be contained in one replaceable component or asset.

### Temporary Images

Use licensed generic childcare images or neutral local placeholders for:

- Hero photograph
- Caregiver portrait
- Playroom
- Quiet or sleeping area
- Outdoor activities
- Creative activities
- Meals or snacks

Each image location will include:

- Responsive dimensions
- Appropriate aspect ratio
- Alternative text
- Lazy loading below the initial viewport
- WebP or AVIF optimization where practical
- A documented replacement path for the real image

Images of identifiable children must not be taken from Facebook or another source without appropriate permission.

### Deliverables

- [x] Shared visual design system
- [x] Temporary logo
- [x] Responsive image compositions
- [x] Reusable UI primitives

## Phase 3: Bilingual Architecture

**Status:** Completed on 1 September 2026.

### Language Behavior

German will be the default language.

Proposed routes:

```text
/        German landing page
/en/     English landing page
/de/     Redirect to the German landing page
```

The implementation will:

- Render German directly at `/`.
- Provide the complete English version at `/en/`.
- Provide a static redirect from `/de/` to `/` where practical.
- Avoid forced browser-language redirection.
- Provide a visible `DE | EN` switcher on every page.
- Optionally remember the visitor's language selection locally.

### Tasks

- Create shared typed content structures.
- Add German content as the primary source.
- Add complete English translations.
- Render the shared React application from separate German and English HTML entry pages.
- Build a language switcher that retains the equivalent page or section.
- Add translated navigation, buttons, form labels, and messages.
- Set the HTML `lang` attribute correctly.
- Add canonical URLs and `hreflang` metadata.
- Ensure untranslated content cannot silently fall back to mixed-language text.
- Add a build-time check for missing required translations.
- Keep language selection dependency-free; do not add an internationalization library for two static languages.

### Deliverables

- [x] German default experience
- [x] Complete English experience
- [x] Consistent bilingual navigation
- [x] Search-engine-readable language metadata

## Phase 4: Page Sections

**Status:** Completed on 1 September 2026, with two deliberate exceptions: section 12 (Testimonials) is not implemented until approved testimonials exist, and section 14's enquiry form is Phase 5 work.

Implement the landing page in the following order.

### 1. Header

- Temporary Mini-Mause logo
- Section navigation
- German/English switcher
- Primary enquiry button
- Responsive mobile navigation
- Sticky treatment where appropriate

### 2. Hero

- Welcoming German and English headlines
- Concise value proposition
- Location placeholder
- Age-range placeholder
- Availability placeholder
- Primary enquiry button
- Secondary learn-more action
- Generic hero image

### 3. Trust Highlights

Temporary, clearly editable facts for:

- Small group
- Personal care
- Qualified caregiver
- Child-friendly environment
- Individual development
- Healthy daily routine

Unverified qualifications, permits, or group sizes will not be presented as facts.

### 4. About Mini-Mause

- Caregiver introduction placeholder
- Motivation
- Experience
- Qualifications
- Care philosophy
- Generic caregiver image

### 5. Benefits

- Small and familiar group
- Consistent caregiver
- Individual attention
- Family-like setting
- Close communication with parents
- Learning through everyday experiences

### 6. Educational Approach

- Learning through play
- Language development
- Movement
- Creativity
- Independence
- Social development
- Nature experiences
- Child participation

### 7. Daily Routine

A visual timeline for:

- Arrival
- Breakfast
- Free play
- Activities
- Outdoor time
- Lunch
- Rest
- Afternoon activities
- Collection

### 8. Rooms and Environment

- Play area
- Eating area
- Quiet or sleeping area
- Outdoor space
- Nearby nature or playgrounds
- Temporary image gallery

### 9. Nutrition and Wellbeing

- Meals and snacks
- Drinks
- Allergies and dietary requirements
- Hygiene
- Rest arrangements
- Health and illness policy placeholder

### 10. Settling-In Process

- Initial conversation
- Joint parent-child visits
- Gradual separation
- Individual transition
- Regular parent communication

A named settling-in model will only be stated after confirmation.

### 11. Availability

- Current-place status
- Upcoming availability
- Accepted ages
- Care days
- Opening hours
- Desired starting date
- Waiting-list option
- Enquiry action

### 12. Testimonials

- Prepare the component during initial development.
- Hide it until authentic, approved testimonials exist.
- Do not invent reviews.
- Do not copy Facebook reviews without permission.

### 13. FAQ

- Accepted ages
- Group size
- Opening hours
- Availability
- Settling-in period
- Meals
- Allergies
- Illness
- Holidays
- Funding and costs
- Required documents
- Introductory visits

### 14. Final Enquiry Call to Action

- Short, reassuring message
- Strong enquiry button
- Essential contact information
- Optional response-time statement once confirmed

### 15. Footer

- Business details
- Contact information
- Opening hours
- Facebook link
- Language switcher
- `Impressum`
- Privacy policy

### Deliverables

- [x] Complete responsive landing page
- [x] All primary sections in both languages
- [x] Content placeholders centralized for easy replacement

## Phase 5: Enquiry Form

**Status:** Implemented on 2 September 2026 with Formspree as the selected provider. The bilingual form, accessible validation, provider adapter, spam honeypot, inline status handling, confirmation pages, documentation, and automated tests are complete. No recipient email is currently selected or configured, so the production form remains disabled and cannot deliver enquiries. Real delivery requires creating the Formspree form, selecting and verifying the recipient email in Formspree, setting `VITE_FORM_ENDPOINT`, approving retention, reviewing the privacy wording, and completing a live delivery test.

The recipient email must be configured in the Formspree account and must not be embedded in frontend code. Only the public Formspree endpoint belongs in `VITE_FORM_ENDPOINT`.

The privacy page already contains a placeholder paragraph stating that no form is active yet; that paragraph must be replaced with the concrete processor, legal basis and retention period when the form goes live.

### Fields

- Parent or guardian name
- Email address
- Optional telephone number
- Child's birth month and year
- Desired starting date
- Required care days
- Required care hours
- Optional message
- Privacy-policy acceptance

The public form will not request the child's full name, medical records, or other unnecessary sensitive information.

### Tasks

- [x] Build accessible field components.
- [x] Add German and English labels.
- [x] Use semantic HTML controls and native browser validation first.
- [x] Add a small local TypeScript validator only where localized or cross-field validation requires it.
- [ ] Add provider-side validation where supported. Blocked by Formspree account creation.
- [ ] Configure the real external Formspree endpoint. The frontend adapter and disabled unconfigured state are complete.
- [x] Add spam protection using Formspree's `_gotcha` honeypot field.
- [x] Create localized success and error states.
- [x] Add localized confirmation pages at `/anfrage-gesendet/` and `/en/enquiry-sent/`.
- [ ] Select the recipient email, configure it in Formspree, and verify ownership. No recipient is currently configured.
- [ ] Configure notification email delivery and complete a live delivery test. Blocked by Formspree account, recipient selection, and destination verification.
- [ ] Configure an automatic acknowledgement email if supported. Blocked by Formspree account configuration.
- [x] Keep provider-specific code isolated for future replacement.

### Provider Selection Criteria

- Data Processing Agreement
- Clear GDPR documentation
- Appropriate processing location and safeguards
- Configurable data retention
- Spam protection
- Reliable email delivery
- No private credentials included in frontend code
- Straightforward deletion or export of submissions

---

---

### Future AWS Replacement

The frontend contract should support replacing the external provider with:

```text
Website -> API Gateway -> Lambda -> SES
```

### Deliverables

- [x] Working bilingual form UI and submission integration
- [ ] Verified secure email notification flow. Blocked by Formspree account and endpoint.
- [x] Accessible validation and status messages
- [x] Documented provider configuration
- [x] Clear AWS migration boundary

## Phase 6: Legal and Privacy Pages

**Status:** Structure completed on 1 September 2026. Legal review and real operator data are still outstanding.

### Routes

```text
/rechtliches/    German legal notice and privacy policy
/en/legal/       English legal notice and privacy policy
```

Both are separate Vite HTML entry points rendering `src/LegalPage.tsx` through the shared `src/mount.tsx` bootstrap. A single page per language carries both articles, anchored at `#imprint` and `#privacy`, so the footer can link to either without a second entry point. The language switcher stays within the legal page family via the `paths` prop on `LanguageLink`.

### Tasks

- [x] Add a German `Impressum`.
- [x] Add German and English privacy pages.
- [x] Describe the selected external form provider and data categories. Final safeguards and retention details remain blocked by provider configuration and legal review.
- [ ] Include contact and controller information. Blocked by Phase 11.
- [ ] Add the approved concrete retention period. Processing purpose and categories are documented; retention remains blocked by operator decision.
- [x] Link to the Facebook page without embedding Facebook tracking.
- [x] Avoid Google Maps embeds in the initial version.
- [x] Avoid analytics and non-essential cookies initially.
- [x] Confirm whether a cookie-consent interface is necessary before adding one. It is not: the site sets no cookies and loads no third-party resources.

Legal text should be reviewed by the site operator or qualified legal counsel before launch.

### Deliverables

- [x] `Impressum`
- [x] German privacy policy
- [x] English privacy information
- [x] Privacy links in the footer
- [x] Initial site without unnecessary tracking
- [x] Privacy link beside the form.

## Phase 7: SEO and Social Sharing

**Status:** Completed on 1 September 2026, except for the business location and a photographic sharing image.

### Generated Metadata

Structured data, `sitemap.xml`, and `robots.txt` are produced at build time by `scripts/vite-plugin-seo.ts` from the same typed content the page renders, so they cannot drift from the visible copy. Machine-readable business facts live in `src/content/business.ts`; any value still set to `null` is omitted from the output rather than published as a guess.

`robots.txt` deliberately does not `Disallow: /de/`, because that would stop crawlers from ever reading the `noindex` tag on the redirect page.

### Tasks

- [x] Add localized page titles and descriptions.
- [ ] Include the business location once known. Blocked by Phase 11.
- [x] Add canonical URLs.
- [x] Add German/English `hreflang` entries.
- [x] Generate an XML sitemap.
- [x] Add `robots.txt`.
- [x] Add Open Graph metadata, including `og:url`, `og:site_name`, `og:image`, and a Twitter card.
- [x] Add a temporary social-sharing image. `public/og-image.png` is generated from the brand mark by `npm run generate:icons`.
- [x] Add appropriate structured data. `ChildCare` on both home pages.
- [x] Add FAQ structured data only when content is visible and eligible.
- [x] Create meaningful image alternative text.
- [x] Use a semantic heading hierarchy. Footer micro-labels are no longer headings.
- [x] Add favicons, an Apple touch icon, a web app manifest, and a `theme-color`.

### Example Titles

```text
Kindertagespflege Mini-Mause in [Ort] | Liebevolle Betreuung
```

```text
Mini-Mause Child Day Care in [Location] | Personal Childcare
```

### Deliverables

- [x] Search-engine-ready German and English pages
- [x] Social-sharing previews
- [x] Local SEO foundations
- [x] No unverified business information in metadata

### Outstanding

- `VITE_SITE_URL` now points to the GitHub Pages project URL. Replace it and set `VITE_BASE_PATH=/` if a custom domain is adopted later.
- Replace the generated brand-mark sharing image with a photographic one during Phase 11.

## Phase 8: Accessibility and Performance

**Status:** In progress. Accessibility corrections and layout-shift prevention are done; typography and Lighthouse verification are outstanding.

### Accessibility Tasks

- [x] Verify keyboard navigation.
- [x] Provide visible focus indicators.
- [x] Use correct landmarks and heading order.
- [x] Add a skip link that moves focus to the `main` landmark.
- [x] Give the desktop and mobile navigation distinct accessible names.
- [x] Remove `aria-label` from elements without a role, and label the hero fact list meaningfully.
- [x] Associate every form field with a label.
- [x] Announce form errors and submission status.
- [ ] Meet WCAG 2.2 AA color-contrast requirements. Verify `--color-muted` at `--text-xs` sizes.
- [x] Add meaningful image alternative text.
- [ ] Test at increased browser text sizes.
- [x] Support reduced-motion preferences.
- [x] Ensure the language switcher has an accessible name.
- [x] Ensure mobile controls have adequate touch targets.
- [x] Enforce accessibility rules in CI through `eslint-plugin-jsx-a11y`.

### Performance Tasks

- [x] Minimize client-side JavaScript.
- [ ] Optimize local images. Blocked by Phase 11; placeholders are SVG today.
- [x] Prevent layout shifts with explicit image dimensions.
- [x] Load below-the-fold images lazily, and mark the hero image `fetchpriority="high"`.
- [ ] Self-host fonts where licensing permits. `Iowan Old Style` and `Aptos` are platform-specific, so typography currently differs between macOS, Windows, and Linux.
- [ ] Subset fonts if beneficial.
- [x] Avoid loading Facebook, map, or analytics scripts.
- [ ] Check generated bundle sizes. Both language bundles still ship on every page.

### Targets

- Lighthouse Performance: 95 or higher under suitable test conditions
- Lighthouse Accessibility: 95 or higher
- Lighthouse Best Practices: 95 or higher
- Lighthouse SEO: 95 or higher
- No major Core Web Vitals regressions
- No horizontal overflow on supported mobile widths

## Phase 9: Testing

**Status:** In progress. 28 Playwright tests pass across four spec files.

### Spec Files

```text
tests/e2e/foundation.spec.ts      Language defaults, routing, sections, mobile layout
tests/e2e/seo.spec.ts             Structured data, icons, social metadata, robots, sitemap
tests/e2e/accessibility.spec.ts   Skip link, legal pages, image dimensions
tests/e2e/enquiry-form.spec.ts    Form fields, validation, provider responses, confirmation pages
```

### Automated Tests

- [x] Verify German is the default.
- [x] Verify `/en/` renders English content.
- [x] Verify the language switcher works, on both the home and legal pages.
- [x] Verify navigation anchors work.
- [x] Verify required form fields.
- [x] Verify invalid email handling.
- [x] Verify privacy acknowledgement is required.
- [x] Verify success and failure states without contacting the real provider.
- [x] Verify essential metadata, including that unconfirmed business facts never reach the JSON-LD.
- [ ] Verify missing-image fallback behavior.
- [x] Check desktop and mobile viewport layouts.
- [ ] Add a mobile Playwright project and an `@axe-core/playwright` assertion.

### Manual Tests

- Current Chrome, Edge, Firefox, and Safari
- iOS Safari
- Android Chrome
- Keyboard-only navigation
- Screen-reader smoke test
- Slow mobile connection
- JavaScript-disabled core-content test
- GitHub Pages project-subpath deployment

Testing project-subpath behavior is important because GitHub Pages may publish the site under:

```text
https://username.github.io/repository-name/
```

All routes, images, and links must work under that base path.

### Deliverables

- Automated test suite
- Responsive screenshots where useful
- Accessibility checklist
- Release verification checklist

## Phase 10: GitHub Pages Deployment

**Status:** Implemented on 2 September 2026. Vite uses the committed GitHub Pages repository base path, and `.github/workflows/deploy-pages.yml` validates and deploys the static artifact on pushes to `main` or manual dispatch. Repository Pages settings must still be switched to GitHub Actions, and the first live deployment must be verified.

### Tasks

- [x] Configure Vite's static output and GitHub Pages base path.
- [x] Ensure all German and English HTML entry points are included in the production build.
- [x] Create a GitHub Actions workflow.
- [x] Run install, formatting, lint, test, and build checks.
- [x] Upload the static build artifact.
- [x] Configure deployment of the artifact to GitHub Pages.
- [ ] Configure the custom domain later, if supplied.
- [x] Add HTTPS and domain documentation.
- [x] Keep form secrets in provider configuration; the public endpoint is ordinary frontend configuration.

### Deployment Flow

```text
Pull request
    |
    v
Lint + Test + Build
    |
    v
Merge to main
    |
    v
GitHub Actions
    |
    v
GitHub Pages
```

### Deliverables

- [x] Repeatable automated deployment
- [ ] Verified working production site. Requires enabling GitHub Actions as the Pages source and running the workflow.
- [x] Documented deployment and rollback process

## Phase 11: Content and Asset Replacement

**Status:** Not started. Source the facts from the Google Business Profile and the Facebook page, then confirm them directly with the operator before publishing.

Machine-readable facts belong in `src/content/business.ts`; visible copy belongs in `src/content/de.ts` and `src/content/en.ts`. Nothing else in the codebase hard-codes business data.

When real information becomes available:

- Replace the temporary logo.
- Replace generic photographs with approved real photographs. The hero and the first gallery tile currently share `playroom.svg`, so they need distinct assets.
- Build the testimonials component from Phase 4.12; it was deliberately left unimplemented until approved testimonials exist.
- Add the caregiver's name and biography.
- Add verified qualifications.
- Add the correct address or service area.
- Add exact opening hours.
- Add age range and group size.
- Add current availability.
- Add the real daily routine.
- Confirm educational principles.
- Confirm meal and allergy arrangements.
- Confirm settling-in details.
- Add approved testimonials.
- Complete legal operator information.
- Update image alternative text.
- Update social-sharing imagery.

All placeholder content should be marked in one content checklist so none is accidentally left in the live release.

## Phase 12: Future AWS Migration

### Static Website

Move the generated static output to:

```text
S3 -> CloudFront -> Route 53
```

### Form Backend

Replace the external endpoint with:

```text
API Gateway -> Lambda -> SES
```

Optional storage can use DynamoDB only if retaining enquiries is required and a retention/deletion policy has been established.

### Migration Tasks

- Add AWS infrastructure as code.
- Configure the domain and TLS certificate.
- Deploy the static build to S3.
- Configure CloudFront caching and security headers.
- Implement Lambda validation and spam controls.
- Configure SES identities and email templates.
- Add logging without recording unnecessary personal data.
- Update the privacy policy.
- Remove the external form provider.
- Run regression and delivery tests.

The page structure and form interface should not need to change.

## Implementation Order

1. Foundation and tooling
2. Visual design system
3. German-first content architecture
4. English translation architecture
5. Main landing-page sections
6. Enquiry form
7. Legal and privacy pages
8. SEO and metadata
9. Accessibility and performance
10. Automated and manual tests
11. GitHub Pages deployment
12. Real content and image replacement
13. Future AWS migration

Phases 7 and 8 were brought forward ahead of the enquiry form, because they are independent of the form provider decision and were blocking search visibility and legal compliance.

## Current Blockers

| Blocker                                        | Blocks          |
| ---------------------------------------------- | --------------- |
| Real business data not yet gathered            | Phases 6, 7, 11 |
| Custom domain undecided; GitHub Pages URL used | Phase 7         |
| Form provider account not yet created          | Phases 5, 6, 9  |
| Recipient email not selected or verified       | Phases 5, 6, 9  |
| Approved photographs and logo not yet supplied | Phases 8, 11    |

## Launch Criteria

The site is ready for public launch when:

- German is the complete default experience.
- English contains the same essential information.
- All temporary business facts have been replaced or explicitly approved.
- Contact-form delivery has been tested.
- The destination email address is verified.
- `Impressum` and privacy information are complete.
- Images have appropriate usage rights.
- No identifiable child appears without valid permission.
- Mobile, desktop, and keyboard navigation work.
- GitHub Pages routes and assets work under the repository base path.
- SEO metadata contains the correct location and domain.
- No development secrets or private information are exposed.
- The production build, tests, and deployment workflow pass.

## Decisions to Finalize During Implementation

- GitHub repository and GitHub Pages site name
- External form provider
- Destination email address
- Temporary stock-image source
- Exact font pairing
- Final domain name

The routing decision is to render German directly at `/`, provide English at `/en/`, and make `/de/` redirect to `/` where practical. This gives German visitors the simplest default experience while preserving a clear bilingual structure.
