import { expect, test } from '@playwright/test';

test('the skip link is the first keyboard stop and moves focus to the main landmark', async ({
  page,
}) => {
  await page.goto('/');
  await page.keyboard.press('Tab');

  const skipLink = page.getByRole('link', { name: 'Direkt zum Inhalt' });
  await expect(skipLink).toBeFocused();
  await expect(skipLink).toBeInViewport();

  await skipLink.press('Enter');
  await expect(page.locator('main')).toBeFocused();
});

test('the German legal page is reachable from the footer', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('navigation', { name: 'Rechtliches' }).getByText('Impressum').click();

  await expect(page).toHaveURL(/\/rechtliches\/#imprint$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Impressum & Datenschutz');
  await expect(page.getByRole('heading', { name: 'Angaben gemäß §5 TMG' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Datenschutzerklärung' })).toBeVisible();
});

test('the English legal page mirrors the German one', async ({ page }) => {
  await page.goto('/en/legal/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Legal notice & privacy');
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://example.invalid/en/legal/',
  );
});

test('the language switcher stays on the legal page', async ({ page }) => {
  await page.goto('/rechtliches/');
  await page.getByRole('banner').getByRole('link', { name: 'View this page in English' }).click();

  await expect(page).toHaveURL(/\/en\/legal\/$/);
});

test('legal page navigation links back to the home page sections', async ({ page }) => {
  await page.goto('/rechtliches/');
  await page.getByRole('navigation', { name: 'Hauptnavigation' }).getByText('Konzept').click();

  await expect(page).toHaveURL(/\/#concept$/);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('geborgener Ort');
});

test('every image declares intrinsic dimensions', async ({ page }) => {
  await page.goto('/');

  const images = page.locator('main img');
  await expect(images).toHaveCount(5);

  for (const image of await images.all()) {
    await expect(image).toHaveAttribute('width', /^\d+$/);
    await expect(image).toHaveAttribute('height', /^\d+$/);
  }
});
