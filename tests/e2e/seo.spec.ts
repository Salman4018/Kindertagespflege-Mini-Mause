import { expect, test } from '@playwright/test';

/** Mirrors VITE_SITE_URL from .env.production. */
const siteUrl = 'https://example.invalid/';

async function structuredData(page: import('@playwright/test').Page) {
  const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();

  return blocks.map((block) => JSON.parse(block) as { '@type': string });
}

for (const [name, path] of [
  ['German', '/'],
  ['English', '/en/'],
] as const) {
  test(`${name} home page exposes business and FAQ structured data`, async ({ page }) => {
    await page.goto(path);

    const schemas = await structuredData(page);
    const types = schemas.map((schema) => schema['@type']);

    expect(types).toContain('ChildCare');
    expect(types).toContain('FAQPage');

    const faq = schemas.find((schema) => schema['@type'] === 'FAQPage') as {
      mainEntity: unknown[];
    };
    expect(faq.mainEntity).toHaveLength(6);
  });

  test(`${name} home page declares icons and social metadata`, async ({ page }) => {
    await page.goto(path);

    await expect(page.locator('link[rel="icon"]')).toHaveAttribute('href', /favicon\.svg$/);
    await expect(page.locator('link[rel="manifest"]')).toHaveAttribute(
      'href',
      /site\.webmanifest$/,
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      'content',
      `${siteUrl}og-image.png`,
    );
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
      'content',
      'summary_large_image',
    );
  });
}

test('structured data never publishes unconfirmed business details', async ({ page }) => {
  await page.goto('/');

  const business = (await structuredData(page)).find((schema) => schema['@type'] === 'ChildCare');

  expect(business).not.toHaveProperty('address');
  expect(business).not.toHaveProperty('telephone');
  expect(business).not.toHaveProperty('openingHoursSpecification');
});

test('robots.txt and sitemap.xml are published', async ({ request }) => {
  const robots = await request.get('/robots.txt');
  expect(robots.ok()).toBe(true);
  expect(await robots.text()).toContain(`Sitemap: ${siteUrl}sitemap.xml`);

  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.ok()).toBe(true);

  const body = await sitemap.text();
  for (const url of ['', 'en/', 'rechtliches/', 'en/legal/']) {
    expect(body).toContain(`<loc>${siteUrl}${url}</loc>`);
  }
});

test('brand icon assets are served', async ({ request }) => {
  for (const asset of ['/favicon.svg', '/favicon.ico', '/apple-touch-icon.png', '/og-image.png']) {
    expect((await request.get(asset)).ok(), asset).toBe(true);
  }
});
