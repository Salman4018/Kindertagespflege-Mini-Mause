export type Language = 'de' | 'en';
export type IconName = 'heart' | 'leaf' | 'home';

export interface CardContent {
  title: string;
  text: string;
}

export interface SectionContent {
  eyebrow: string;
  title: string;
  introduction: string;
}

export interface LegalArticle {
  heading: string;
  sections: readonly { heading: string; paragraphs: readonly string[] }[];
}

export interface SiteContent {
  language: Language;
  brandName: string;
  eyebrow: string;
  status: string;
  skipToContent: string;
  primaryAction: string;
  secondaryAction: string;
  navigationLabel: string;
  mobileNavigationLabel: string;
  menuLabel: string;
  navigation: readonly { href: string; label: string }[];
  hero: {
    title: string;
    introduction: string;
    imageAlt: string;
    sealWords: readonly [string, string, string];
    factsLabel: string;
    facts: readonly string[];
  };
  highlightsLabel: string;
  highlights: readonly [
    CardContent & { icon: IconName },
    CardContent & { icon: IconName },
    CardContent & { icon: IconName },
  ];
  about: SectionContent & {
    quote: string;
    imageAlt: string;
    facts: readonly string[];
  };
  benefits: SectionContent & { items: readonly CardContent[] };
  approach: SectionContent & { items: readonly string[] };
  routine: SectionContent & { steps: readonly { time: string; title: string; text: string }[] };
  spaces: SectionContent & {
    images: readonly {
      src: string;
      alt: string;
      caption: string;
      width: number;
      height: number;
    }[];
  };
  wellbeing: SectionContent & { items: readonly CardContent[] };
  settling: SectionContent & { steps: readonly CardContent[] };
  availability: SectionContent & {
    badge: string;
    details: readonly { label: string; value: string }[];
    note: string;
  };
  faq: SectionContent & { items: readonly { question: string; answer: string }[] };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    note: string;
  };
  footer: {
    tagline: string;
    navigationLabel: string;
    contactHeading: string;
    legalHeading: string;
    location: string;
    hours: string;
    email: string;
    facebook: string;
    imprint: string;
    privacy: string;
    copyright: string;
  };
  languageSwitch: {
    label: string;
    accessibleLabel: string;
  };
  legal: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    title: string;
    introduction: string;
    backToHome: string;
    pendingNotice: string;
    imprint: LegalArticle;
    privacy: LegalArticle;
  };
}
