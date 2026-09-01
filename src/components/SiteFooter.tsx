import { Brand } from './Brand';
import { LanguageLink } from './LanguageLink';
import { business } from '../content/business';
import type { Language, SiteContent } from '../content/types';
import { legalPaths, pageUrl } from '../locales';

interface SiteFooterProps {
  content: SiteContent;
  /** Prefix for the in-page anchors, so subpages link back to the home page sections. */
  homeUrl?: string;
  languagePaths?: Record<Language, string>;
}

export function SiteFooter({ content, homeUrl = '', languagePaths }: SiteFooterProps) {
  const legalUrl = pageUrl(legalPaths[content.language]);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Brand eyebrow={content.eyebrow} name={content.brandName} />
          <p>{content.footer.tagline}</p>
        </div>
        <nav aria-label={content.footer.navigationLabel}>
          {content.navigation.slice(0, 4).map((item) => (
            <a href={`${homeUrl}${item.href}`} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div>
          <p className="footer-grid__heading">{content.footer.contactHeading}</p>
          <address>
            <span>{content.footer.location}</span>
            <span>{content.footer.hours}</span>
            <span>{content.footer.email}</span>
          </address>
          <a href={business.sameAs[0]} rel="noreferrer" target="_blank">
            {content.footer.facebook}
          </a>
        </div>
        <nav aria-labelledby="footer-legal-heading">
          <p className="footer-grid__heading" id="footer-legal-heading">
            {content.footer.legalHeading}
          </p>
          <a href={`${legalUrl}#imprint`}>{content.footer.imprint}</a>
          <a href={`${legalUrl}#privacy`}>{content.footer.privacy}</a>
          <LanguageLink
            currentLanguage={content.language}
            copy={content.languageSwitch}
            paths={languagePaths}
          />
        </nav>
      </div>
      <div className="footer-bottom container">
        © {new Date().getFullYear()} {content.footer.copyright}
      </div>
    </footer>
  );
}
