import { Brand } from './Brand';
import { LanguageLink } from './LanguageLink';
import type { Language, SiteContent } from '../content/types';

interface SiteHeaderProps {
  content: SiteContent;
  /** Prefix for the in-page anchors, so subpages link back to the home page sections. */
  homeUrl?: string;
  languagePaths?: Record<Language, string>;
}

function Navigation({
  content,
  className,
  label,
  homeUrl,
}: {
  content: SiteContent;
  className: string;
  label: string;
  homeUrl: string;
}) {
  return (
    <nav className={className} aria-label={label}>
      {content.navigation.map((item) => (
        <a href={`${homeUrl}${item.href}`} key={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}

export function SiteHeader({ content, homeUrl = '', languagePaths }: SiteHeaderProps) {
  return (
    <header className="site-header-wrap">
      <div className="site-header container">
        <a className="brand-link" href={`${homeUrl}#top`} aria-label={content.brandName}>
          <Brand eyebrow={content.eyebrow} name={content.brandName} />
        </a>
        <Navigation
          content={content}
          className="site-nav"
          label={content.navigationLabel}
          homeUrl={homeUrl}
        />
        <div className="site-header__actions">
          <LanguageLink
            currentLanguage={content.language}
            copy={content.languageSwitch}
            paths={languagePaths}
          />
          <a
            className="button button--primary button--small header-cta"
            href={`${homeUrl}#contact`}
          >
            {content.primaryAction}
          </a>
          <details className="mobile-menu">
            <summary>{content.menuLabel}</summary>
            <Navigation
              content={content}
              className="mobile-nav"
              label={content.mobileNavigationLabel}
              homeUrl={homeUrl}
            />
          </details>
        </div>
      </div>
    </header>
  );
}
