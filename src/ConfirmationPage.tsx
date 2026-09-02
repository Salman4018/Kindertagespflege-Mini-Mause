import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import type { SiteContent } from './content/types';
import { confirmationPaths, languagePaths, pageUrl } from './locales';

interface ConfirmationPageProps {
  content: SiteContent;
}

export function ConfirmationPage({ content }: ConfirmationPageProps) {
  const homeUrl = pageUrl(languagePaths[content.language]);

  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main">
        {content.skipToContent}
      </a>
      <SiteHeader content={content} homeUrl={homeUrl} languagePaths={confirmationPaths} />
      <main className="confirmation container section" id="main" tabIndex={-1}>
        <p className="eyebrow">{content.confirmation.eyebrow}</p>
        <h1>{content.confirmation.title}</h1>
        <p className="introduction">{content.confirmation.text}</p>
        <a className="button button--primary" href={homeUrl}>
          {content.confirmation.backToHome}
        </a>
      </main>
      <SiteFooter content={content} homeUrl={homeUrl} languagePaths={confirmationPaths} />
    </div>
  );
}
