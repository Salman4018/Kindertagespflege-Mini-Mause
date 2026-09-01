import { expect, test } from '@playwright/test';

test('German is the default language', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'de');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('geborgener Ort');
  await expect(page).toHaveTitle('Kindertagespflege Mini-Mäuse | Liebevolle Betreuung');
  await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute(
    'href',
    'https://example.invalid/en/',
  );
});

test('English entry point renders English content', async ({ page }) => {
  await page.goto('/en/');

  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('nurturing place');
  await expect(page.getByText('personal', { exact: true })).toBeVisible();
  await expect(page).toHaveTitle('Mini-Mäuse Family Day Care | Nurturing Childcare');
  await expect(page.locator('link[rel="alternate"][hreflang="de"]')).toHaveAttribute(
    'href',
    'https://example.invalid/',
  );
});

test('language switch retains the current section', async ({ page }) => {
  await page.goto('/#highlights');
  await page.getByRole('banner').getByRole('link', { name: 'View this page in English' }).click();

  await expect(page).toHaveURL(/\/en\/#highlights$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
});

test('/de/ redirects to the default German page and preserves the section', async ({ page }) => {
  await page.goto('/de/#highlights');

  await expect(page).toHaveURL(/\/#highlights$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'de');
});

test('visual system fits a mobile viewport without horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');

  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth,
  }));

  expect(dimensions.content).toBe(dimensions.viewport);
  await expect(page.getByRole('link', { name: 'Platz anfragen' })).toBeVisible();
  await expect(page.getByRole('img').first()).toBeVisible();
});

test('German landing page contains all primary sections', async ({ page }) => {
  await page.goto('/');

  for (const sectionId of [
    'about',
    'benefits',
    'concept',
    'daily-routine',
    'spaces',
    'wellbeing',
    'settling',
    'availability',
    'faq',
    'contact',
  ]) {
    await expect(page.locator(`#${sectionId}`)).toBeAttached();
  }

  await expect(page.getByRole('heading', { name: 'Häufige Fragen von Eltern.' })).toBeVisible();
  await expect(page.getByRole('img')).toHaveCount(5);
});

test('English page translates section navigation and content', async ({ page }) => {
  await page.goto('/en/');

  await expect(page.getByRole('navigation', { name: 'Main navigation' })).toContainText('Approach');
  await expect(
    page.getByRole('heading', { name: 'Parents’ frequently asked questions.' }),
  ).toBeVisible();
  await expect(page.getByText('No confirmed details yet')).toBeVisible();
});

test('FAQ uses accessible native disclosure controls', async ({ page }) => {
  await page.goto('/');

  const question = page.getByText('Wie läuft die Eingewöhnung ab?', { exact: true });
  await question.click();
  await expect(page.getByText('Behutsam, individuell und in enger Abstimmung')).toBeVisible();
});

test('mobile navigation exposes section links', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');

  await page.getByText('Menü', { exact: true }).click();
  await expect(page.getByRole('navigation', { name: 'Mobile Navigation' })).toBeVisible();
  await expect(
    page.getByRole('navigation', { name: 'Mobile Navigation' }).getByRole('link', {
      name: 'Tagesablauf',
    }),
  ).toBeVisible();
});
