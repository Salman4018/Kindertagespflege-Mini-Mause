import type { Plugin } from 'vite';
import { business, hasPostalAddress } from '../src/content/business';
import { de } from '../src/content/de';
import { en } from '../src/content/en';
import type { SiteContent } from '../src/content/types';

interface PageDefinition {
  /** Vite's normalised html path, e.g. `/en/index.html`. */
  htmlPath: string;
  /** Path relative to the site root, always ending with a slash (empty for the root). */
  urlPath: string;
  content: SiteContent;
  /** Only the home pages carry business and FAQ structured data. */
  isHome: boolean;
}

const pages: readonly PageDefinition[] = [
  { htmlPath: '/index.html', urlPath: '', content: de, isHome: true },
  { htmlPath: '/en/index.html', urlPath: 'en/', content: en, isHome: true },
  { htmlPath: '/rechtliches/index.html', urlPath: 'rechtliches/', content: de, isHome: false },
  { htmlPath: '/en/legal/index.html', urlPath: 'en/legal/', content: en, isHome: false },
];

function businessSchema(pageUrl: string, siteUrl: string, content: SiteContent) {
  const address = hasPostalAddress(business)
    ? {
        address: {
          '@type': 'PostalAddress',
          streetAddress: business.address.street,
          postalCode: business.address.postalCode,
          addressLocality: business.address.city,
          addressCountry: business.address.countryCode,
        },
      }
    : {};

  return {
    '@context': 'https://schema.org',
    '@type': 'ChildCare',
    name: business.name,
    description: content.hero.introduction,
    url: pageUrl,
    image: `${siteUrl}og-image.png`,
    inLanguage: content.language,
    sameAs: business.sameAs,
    ...address,
    ...(business.telephone ? { telephone: business.telephone } : {}),
    ...(business.email ? { email: business.email } : {}),
    ...(business.geo ? { geo: { '@type': 'GeoCoordinates', ...business.geo } } : {}),
    ...(business.openingHours.length > 0
      ? {
          openingHoursSpecification: business.openingHours.map((slot) => ({
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: slot.days,
            opens: slot.opens,
            closes: slot.closes,
          })),
        }
      : {}),
  };
}

function faqSchema(content: SiteContent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: content.language,
    mainEntity: content.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

/** Guards against `</script>` inside content breaking out of the JSON-LD block. */
function serialise(schema: unknown) {
  return JSON.stringify(schema).replace(/</g, '\\u003c');
}

export function seo(siteUrl: string): Plugin {
  const normalisedSiteUrl = siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`;

  return {
    name: 'mini-maeuse-seo',
    transformIndexHtml: {
      order: 'pre',
      handler(_html, ctx) {
        const page = pages.find((candidate) => candidate.htmlPath === ctx.path);

        if (!page?.isHome) {
          return [];
        }

        const pageUrl = `${normalisedSiteUrl}${page.urlPath}`;

        return [
          {
            tag: 'script',
            attrs: { type: 'application/ld+json' },
            children: serialise(businessSchema(pageUrl, normalisedSiteUrl, page.content)),
            injectTo: 'head' as const,
          },
          {
            tag: 'script',
            attrs: { type: 'application/ld+json' },
            children: serialise(faqSchema(page.content)),
            injectTo: 'head' as const,
          },
        ];
      },
    },
    generateBundle() {
      const alternates = (group: readonly PageDefinition[]) =>
        group
          .map(
            (page) =>
              `    <xhtml:link rel="alternate" hreflang="${page.content.language}" href="${normalisedSiteUrl}${page.urlPath}" />`,
          )
          .join('\n');

      const homes = pages.filter((page) => page.isHome);
      const legal = pages.filter((page) => !page.isHome);

      const urls = pages
        .map((page) => {
          const group = page.isHome ? homes : legal;
          return [
            '  <url>',
            `    <loc>${normalisedSiteUrl}${page.urlPath}</loc>`,
            alternates(group),
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${normalisedSiteUrl}${group[0].urlPath}" />`,
            `    <priority>${page.isHome ? '1.0' : '0.3'}</priority>`,
            '  </url>',
          ].join('\n');
        })
        .join('\n');

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
      });

      // /de/ is excluded through its own noindex tag, not here: a Disallow would
      // stop crawlers from ever seeing that tag.
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${normalisedSiteUrl}sitemap.xml\n`,
      });
    },
  };
}
