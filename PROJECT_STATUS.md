# Project Status

Last updated: 2 September 2026

## Deployment

- GitHub repository: `https://github.com/Salman4018/Kindertagespflege-Mini-Mause`
- GitHub Pages URL: `https://salman4018.github.io/Kindertagespflege-Mini-Mause/`
- Vite is configured for the GitHub Pages repository base path.
- The GitHub Actions Pages workflow runs quality checks, browser tests, and the production build in
  parallel, then deploys only after all three jobs pass.
- GitHub Pages must still be configured to use **GitHub Actions** as its source, followed by the first live deployment check.

## Enquiry Form

- The accessible German and English form UI is implemented.
- Native and cross-field validation is implemented and tested.
- Formspree is the selected hosted form provider.
- The Formspree submission adapter and spam honeypot are implemented.
- Localized inline success and error states are implemented.
- German and English confirmation pages are implemented.
- No recipient email is currently selected, configured, or verified.
- No production Formspree endpoint is currently configured.
- The production form is intentionally disabled and cannot deliver enquiries.

## Form Activation Checklist

- [ ] Select the email address that will receive enquiries.
- [ ] Create the Formspree form.
- [ ] Configure and verify the recipient email in Formspree.
- [ ] Review and accept the applicable data processing agreement.
- [ ] Approve Formspree and recipient-mailbox retention periods.
- [ ] Review safeguards for international data transfers.
- [ ] Complete legal review of the privacy wording.
- [ ] Add the public Formspree endpoint as `VITE_FORM_ENDPOINT`.
- [ ] Configure a generic automatic acknowledgement email if supported and approved.
- [ ] Submit a real enquiry from the deployed site and verify notification delivery.
- [ ] Verify the automatic acknowledgement, if enabled.

The recipient address must remain in the Formspree account. It must not be committed to frontend code. The public endpoint supplied by Formspree is ordinary frontend configuration and belongs in `VITE_FORM_ENDPOINT`.

## Verification

- TypeScript checks pass.
- ESLint checks pass.
- Prettier checks pass.
- The production build passes.
- All 28 Playwright tests pass.
- Production routes and assets have been verified under the GitHub Pages repository base path.

## Other Launch Blockers

- Real operator and business details are incomplete.
- The concrete data-retention period is not approved.
- Legal review is outstanding.
- Approved photographs and final logo are not supplied.
- The custom domain is undecided; the GitHub Pages URL is configured in the meantime.
