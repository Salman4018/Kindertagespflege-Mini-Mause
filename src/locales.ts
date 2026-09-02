import { de } from './content/de';
import { en } from './content/en';
import type { Language, SiteContent } from './content/types';

export const defaultLanguage: Language = 'de';

export const contentByLanguage = {
  de,
  en,
} satisfies Record<Language, SiteContent>;

export const languagePaths = {
  de: '',
  en: 'en/',
} satisfies Record<Language, string>;

export const legalPaths = {
  de: 'rechtliches/',
  en: 'en/legal/',
} satisfies Record<Language, string>;

export const confirmationPaths = {
  de: 'anfrage-gesendet/',
  en: 'en/enquiry-sent/',
} satisfies Record<Language, string>;

export function pageUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path}`;
}

export function getDocumentLanguage(): Language {
  const documentLanguage = document.documentElement.lang;

  return documentLanguage in contentByLanguage ? (documentLanguage as Language) : defaultLanguage;
}

export function getAlternateLanguage(language: Language): Language {
  return language === 'de' ? 'en' : 'de';
}
