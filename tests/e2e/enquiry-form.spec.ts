import { expect, test } from '@playwright/test';

async function completeRequiredFields(page: import('@playwright/test').Page) {
  await page.getByLabel(/Name eines Elternteils/).fill('Erika Muster');
  await page.getByLabel(/E-Mail-Adresse/).fill('erika@example.com');
  await page.getByLabel(/Geburtsmonat und -jahr/).fill('2024-01');
  await page.getByLabel(/Gewünschter Betreuungsbeginn/).fill('2026-10');
  await page.getByLabel('Montag').check();
  await page.getByLabel(/Bringzeit/).fill('08:00');
  await page.getByLabel(/Abholzeit/).fill('15:00');
  await page.getByLabel(/Ich habe die/).check();
}

test('renders localized, privacy-conscious enquiry fields', async ({ page }) => {
  await page.goto('/#contact');

  await expect(
    page.getByRole('heading', { name: 'Der erste Schritt beginnt mit einer Nachricht.' }),
  ).toBeVisible();
  await expect(page.getByLabel(/Name eines Elternteils/)).toHaveAttribute('required', '');
  await expect(page.getByLabel(/E-Mail-Adresse/)).toHaveAttribute('type', 'email');
  await expect(page.getByLabel(/Geburtsmonat und -jahr/)).toHaveAttribute('required', '');
  await expect(page.getByRole('group', { name: /Benötigte Betreuungstage/ })).toBeVisible();
  await expect(page.getByLabel(/Ich habe die/)).toHaveAttribute('required', '');
  await expect(page.getByLabel(/Name des Kindes/i)).toHaveCount(0);
  await expect(page.getByText(/Gesundheitsdaten/)).toBeVisible();
  await expect(page.getByRole('link', { name: 'Datenschutzhinweise' })).toHaveAttribute(
    'href',
    '/rechtliches/#privacy',
  );

  await page.goto('/en/#contact');
  await expect(page.getByLabel(/Parent or guardian name/)).toBeVisible();
  await expect(page.getByRole('group', { name: /Required care days/ })).toBeVisible();
  await expect(page.getByRole('link', { name: 'privacy information' })).toHaveAttribute(
    'href',
    '/en/legal/#privacy',
  );
});

test('uses native required and email validation', async ({ page }) => {
  await page.goto('/#contact');
  await page.getByRole('button', { name: 'Anfrage senden' }).click();
  await expect(page.getByLabel(/Name eines Elternteils/)).toBeFocused();

  await page.getByLabel(/Name eines Elternteils/).fill('Erika Muster');
  await page.getByLabel(/E-Mail-Adresse/).fill('keine-adresse');
  await page.getByRole('button', { name: 'Anfrage senden' }).click();
  await expect(page.getByLabel(/E-Mail-Adresse/)).toBeFocused();
  expect(
    await page
      .getByLabel(/E-Mail-Adresse/)
      .evaluate((input: HTMLInputElement) => input.validity.typeMismatch),
  ).toBe(true);
});

test('validates care days and the requested time range', async ({ page }) => {
  await page.goto('/#contact');
  await completeRequiredFields(page);
  await page.getByLabel('Montag').uncheck();
  await page.getByRole('button', { name: 'Anfrage senden' }).click();
  await expect(
    page.getByText('Bitte wählen Sie mindestens einen Betreuungstag aus.'),
  ).toBeVisible();

  await page.getByLabel('Montag').check();
  await page.getByLabel(/Bringzeit/).fill('16:00');
  await page.getByRole('button', { name: 'Anfrage senden' }).click();
  await expect(page.getByText('Die Abholzeit muss nach der Bringzeit liegen.')).toBeVisible();
});

test('submits the expected fields and shows localized success', async ({ page }) => {
  let submittedData = '';
  await page.route('**/__formspree-test', async (route) => {
    submittedData = route.request().postData() ?? '';
    await route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' });
  });
  await page.goto('/#contact');
  await completeRequiredFields(page);
  await page.getByRole('button', { name: 'Anfrage senden' }).click();

  await expect(page.getByRole('status')).toContainText('Vielen Dank für Ihre Anfrage.');
  expect(submittedData).toContain('name="guardian_name"');
  expect(submittedData).toContain('name="care_days"');
  expect(submittedData).not.toContain('child_name');
  await expect(page.getByRole('link', { name: 'Bestätigung öffnen' })).toHaveAttribute(
    'href',
    '/anfrage-gesendet/',
  );
});

test('announces a provider failure without exposing provider details', async ({ page }) => {
  await page.route('**/__formspree-test', (route) =>
    route.fulfill({
      status: 422,
      contentType: 'application/json',
      body: '{"error":"private provider detail"}',
    }),
  );
  await page.goto('/#contact');
  await completeRequiredFields(page);
  await page.getByRole('button', { name: 'Anfrage senden' }).click();

  const alert = page.getByRole('alert');
  await expect(alert).toContainText('Die Anfrage konnte gerade nicht gesendet werden.');
  await expect(alert).not.toContainText('private provider detail');
});

test('confirmation pages are localized, switchable, and excluded from indexing', async ({
  page,
}) => {
  await page.goto('/anfrage-gesendet/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Vielen Dank für Ihre Anfrage.');
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex,follow');
  await page.getByRole('banner').getByRole('link', { name: 'View this page in English' }).click();
  await expect(page).toHaveURL(/\/en\/enquiry-sent\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Thank you for your enquiry.');
});
