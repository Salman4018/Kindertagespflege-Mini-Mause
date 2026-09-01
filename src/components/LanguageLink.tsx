import type { Language, SiteContent } from '../content/types';
import { getAlternateLanguage, languagePaths, pageUrl } from '../locales';
import type { MouseEvent } from 'react';

interface LanguageLinkProps {
  currentLanguage: Language;
  copy: SiteContent['languageSwitch'];
  /** Path of the equivalent page in each language. Defaults to the two home pages. */
  paths?: Record<Language, string>;
}

export function LanguageLink({ currentLanguage, copy, paths = languagePaths }: LanguageLinkProps) {
  const targetLanguage = getAlternateLanguage(currentLanguage);
  const targetPath = pageUrl(paths[targetLanguage]);

  function preserveCurrentSection(event: MouseEvent<HTMLAnchorElement>) {
    event.currentTarget.href = `${targetPath}${window.location.hash}`;
  }

  return (
    <a
      className="language-link"
      href={targetPath}
      hrefLang={targetLanguage}
      lang={targetLanguage}
      aria-label={copy.accessibleLabel}
      onClick={preserveCurrentSection}
    >
      {copy.label}
    </a>
  );
}
