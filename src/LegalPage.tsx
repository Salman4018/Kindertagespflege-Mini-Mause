import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import type { LegalArticle, SiteContent } from './content/types';
import { languagePaths, legalPaths, pageUrl } from './locales';

interface LegalPageProps {
  content: SiteContent;
}

function Article({ article, id }: { article: LegalArticle; id: string }) {
  return (
    <article className="legal__article" id={id} aria-labelledby={`${id}-heading`}>
      <h2 id={`${id}-heading`}>{article.heading}</h2>
      {article.sections.map((section) => (
        <section key={section.heading}>
          <h3>{section.heading}</h3>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      ))}
    </article>
  );
}

export function LegalPage({ content }: LegalPageProps) {
  const homeUrl = pageUrl(languagePaths[content.language]);

  return (
    <div className="site-shell" id="top">
      <a className="skip-link" href="#main">
        {content.skipToContent}
      </a>
      <SiteHeader content={content} homeUrl={homeUrl} languagePaths={legalPaths} />
      <main className="legal container section" id="main" tabIndex={-1}>
        <p className="eyebrow">{content.legal.eyebrow}</p>
        <h1>{content.legal.title}</h1>
        <p className="introduction">{content.legal.introduction}</p>
        <p className="legal__notice">{content.legal.pendingNotice}</p>
        <Article article={content.legal.imprint} id="imprint" />
        <Article article={content.legal.privacy} id="privacy" />
        <a className="button button--quiet" href={homeUrl}>
          {content.legal.backToHome}
        </a>
      </main>
      <SiteFooter content={content} homeUrl={homeUrl} languagePaths={legalPaths} />
    </div>
  );
}
