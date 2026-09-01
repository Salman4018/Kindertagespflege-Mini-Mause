import type { SiteContent } from './types';

export const en = {
  language: 'en',
  brandName: 'Mini-Mäuse',
  eyebrow: 'Family day care',
  status: 'Details to follow',
  skipToContent: 'Skip to content',
  primaryAction: 'Enquire about a place',
  secondaryAction: 'Discover our approach',
  navigationLabel: 'Main navigation',
  mobileNavigationLabel: 'Mobile navigation',
  menuLabel: 'Menu',
  navigation: [
    { href: '#about', label: 'About' },
    { href: '#concept', label: 'Approach' },
    { href: '#daily-routine', label: 'Our day' },
    { href: '#spaces', label: 'Spaces' },
    { href: '#faq', label: 'FAQ' },
  ],
  hero: {
    title: 'A nurturing place for little explorers.',
    introduction:
      'Loving care in a small, family-like group – with time to play, discover, and grow.',
    imageAlt: 'Illustration of a bright play corner with natural materials',
    sealWords: ['small', 'special', 'personal'],
    factsLabel: 'Key care details',
    facts: ['Location to follow', 'Age range to follow', 'Availability on request'],
  },
  highlightsLabel: 'What makes Mini-Mäuse special',
  highlights: [
    {
      icon: 'heart',
      title: 'Personal',
      text: 'A familiar caregiver with space for every child’s individual needs.',
    },
    {
      icon: 'leaf',
      title: 'Natural',
      text: 'Discovering, moving, and learning in a calm and inspiring environment.',
    },
    {
      icon: 'home',
      title: 'Nurturing',
      text: 'A family-like day where little personalities have room to flourish.',
    },
  ],
  about: {
    eyebrow: 'About Mini-Mäuse',
    title: 'Care, calm, and an open mind for every child.',
    introduction:
      'This is where the caregiver’s personal introduction will appear: motivation, experience, qualifications, and what makes working with children so rewarding.',
    quote: 'Every child may arrive, discover, and grow at their own pace.',
    imageAlt: 'Neutral illustration serving as a caregiver portrait placeholder',
    facts: ['Name to follow', 'Qualifications to follow', 'Experience to follow'],
  },
  benefits: {
    eyebrow: 'Family day care',
    title: 'A small group for big developmental steps.',
    introduction:
      'A close-knit setting provides security and leaves room for genuine relationships and individual guidance.',
    items: [
      {
        title: 'Familiar caregiver',
        text: 'Consistent care provides orientation and builds trust.',
      },
      {
        title: 'Individual attention',
        text: 'Needs, interests, and each child’s pace take centre stage.',
      },
      {
        title: 'Family-like setting',
        text: 'A calm, everyday environment with familiar routines.',
      },
      {
        title: 'Working with parents',
        text: 'Open communication creates a dependable partnership.',
      },
    ],
  },
  approach: {
    eyebrow: 'Educational approach',
    title: 'Understanding the world with every sense.',
    introduction:
      'Children learn through play and everyday life. Activities offer inspiration without limiting their own curiosity and initiative.',
    items: [
      'Free play',
      'Language & stories',
      'Movement',
      'Creativity',
      'Nature',
      'Independence',
      'Social learning',
      'Participation',
    ],
  },
  routine: {
    eyebrow: 'Our day',
    title: 'Dependable routines with room for real life.',
    introduction: 'The exact routine will later be adapted to the confirmed care hours and habits.',
    steps: [
      {
        time: 'Morning',
        title: 'Arrive',
        text: 'A calm welcome and time to settle into free play.',
      },
      {
        time: 'Before lunch',
        title: 'Explore',
        text: 'Breakfast, play invitations, movement, and fresh air.',
      },
      {
        time: 'Lunchtime',
        title: 'Eat together',
        text: 'A relaxed meal with familiar table rituals.',
      },
      {
        time: 'Quiet time',
        title: 'Recharge',
        text: 'Sleep or quiet activities according to individual needs.',
      },
      {
        time: 'Afternoon',
        title: 'Play & go home',
        text: 'A gentle close with a personal handover to parents.',
      },
    ],
  },
  spaces: {
    eyebrow: 'Spaces & surroundings',
    title: 'Room to play, dream, and be outdoors.',
    introduction:
      'These neutral illustrations will later be replaced with approved photos of the real spaces.',
    images: [
      {
        src: 'images/placeholders/playroom.svg',
        alt: 'Illustration of a bright playroom',
        caption: 'Play & discover',
        width: 800,
        height: 1050,
      },
      {
        src: 'images/placeholders/rest.svg',
        alt: 'Illustration of a calm sleeping area',
        caption: 'Rest & dream',
        width: 800,
        height: 600,
      },
      {
        src: 'images/placeholders/outdoor.svg',
        alt: 'Illustration of a green outdoor area',
        caption: 'Move & enjoy nature',
        width: 800,
        height: 600,
      },
    ],
  },
  wellbeing: {
    eyebrow: 'Wellbeing',
    title: 'Healthy, cared for, and secure.',
    introduction:
      'Details about meals, allergies, hygiene, and illness policies will be confirmed before publication.',
    items: [
      { title: 'Food & drink', text: 'Balanced meals, snacks, and drinks – details to follow.' },
      { title: 'Allergies', text: 'Individual requirements are discussed personally.' },
      { title: 'Rest & sleep', text: 'A protected retreat for age-appropriate rest.' },
      { title: 'Health & hygiene', text: 'Reliable routines and clear agreements for illness.' },
    ],
  },
  settling: {
    eyebrow: 'Settling in',
    title: 'A gentle arrival. Trust that grows.',
    introduction:
      'Settling in follows the child’s needs and is coordinated closely with parents. A named model will only be added once confirmed.',
    steps: [
      { title: 'Meet', text: 'Discuss expectations, routines, and needs without rushing.' },
      { title: 'Arrive together', text: 'Experience the first visits with a familiar adult.' },
      {
        title: 'Separate gradually',
        text: 'Introduce short separations individually and sensitively.',
      },
      { title: 'Feel secure', text: 'Slowly extend the day to the agreed care hours.' },
    ],
  },
  availability: {
    eyebrow: 'Childcare place',
    title: 'Could Mini-Mäuse suit your family?',
    introduction:
      'Send a no-obligation enquiry. Availability and arrangements will be discussed personally.',
    badge: 'On request',
    details: [
      { label: 'Age range', value: 'to be added' },
      { label: 'Care days', value: 'to be added' },
      { label: 'Opening hours', value: 'to be added' },
      { label: 'Next start', value: 'on request' },
    ],
    note: 'No confirmed details yet – please enquire individually.',
  },
  faq: {
    eyebrow: 'Good to know',
    title: 'Parents’ frequently asked questions.',
    introduction: 'Answers will be completed with the family day care’s confirmed details.',
    items: [
      {
        question: 'Which children are cared for?',
        answer: 'The age range and group size are still to be confirmed.',
      },
      {
        question: 'How does settling in work?',
        answer: 'Gently, individually, and in close coordination with a familiar adult.',
      },
      {
        question: 'Are places available?',
        answer: 'Current and future places can be requested through the childcare enquiry.',
      },
      {
        question: 'What are the care hours?',
        answer: 'Opening days and hours will be added once confirmed.',
      },
      {
        question: 'How are meals organised?',
        answer: 'The food approach and handling of allergies are still to be confirmed.',
      },
      {
        question: 'How much does care cost?',
        answer: 'Costs and public funding depend on local regulations.',
      },
    ],
  },
  contact: {
    eyebrow: 'Meet without obligation',
    title: 'The first step begins with a message.',
    text: 'Tell us briefly when and how much care you need. The enquiry form will follow in Phase 5.',
    note: 'Contact option being prepared',
  },
  footer: {
    tagline: 'A family-like place to arrive, discover, and grow.',
    navigationLabel: 'Page navigation',
    contactHeading: 'Contact',
    legalHeading: 'Legal',
    location: 'Address to follow',
    hours: 'Opening hours to follow',
    email: 'Email to follow',
    facebook: 'Facebook',
    imprint: 'Legal notice',
    privacy: 'Privacy',
    copyright: 'Mini-Mäuse Family Day Care',
  },
  languageSwitch: { label: 'DE', accessibleLabel: 'Diese Seite auf Deutsch ansehen' },
  legal: {
    metaTitle: 'Legal notice & privacy | Mini-Mäuse Family Day Care',
    metaDescription:
      'Legal notice under §5 TMG and the privacy policy of Mini-Mäuse family day care.',
    eyebrow: 'Legal',
    title: 'Legal notice & privacy',
    introduction:
      'Mandatory disclosures under §5 TMG and information about how personal data is processed on this website.',
    backToHome: 'Back to the home page',
    pendingNotice:
      'This entry will be added once it is confirmed. Until then the page is not complete.',
    imprint: {
      heading: 'Legal notice',
      sections: [
        {
          heading: 'Details under §5 TMG',
          paragraphs: [
            'Kindertagespflege Mini-Mäuse',
            'Name of the childminder: to follow',
            'Address: to follow',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: ['Phone: to follow', 'Email: to follow'],
        },
        {
          heading: 'Responsible for the content under §18(2) MStV',
          paragraphs: ['to follow (address as above)'],
        },
        {
          heading: 'Childminding permit',
          paragraphs: [
            'The service is provided on the basis of a childminding permit under §43 SGB VIII.',
            'Issuing supervisory authority (responsible youth welfare office): to follow',
          ],
        },
        {
          heading: 'Dispute resolution',
          paragraphs: [
            'We are neither willing nor obliged to take part in dispute resolution proceedings before a consumer arbitration board.',
          ],
        },
        {
          heading: 'Liability for content and links',
          paragraphs: [
            'We are responsible for our own content on these pages under general law. However, we are not obliged to monitor transmitted or stored third-party information.',
            'Our site contains links to external websites over whose content we have no influence. The respective provider is always responsible for that content. We remove such links immediately if we become aware of any legal violation.',
          ],
        },
        {
          heading: 'Copyright',
          paragraphs: [
            'Content created on this website is subject to German copyright law. Reproduction, adaptation and distribution beyond the limits of copyright require written consent.',
          ],
        },
      ],
    },
    privacy: {
      heading: 'Privacy policy',
      sections: [
        {
          heading: 'Controller',
          paragraphs: [
            'The childminder named in the legal notice is the controller for data processing on this website.',
          ],
        },
        {
          heading: 'Hosting',
          paragraphs: [
            'This website is served as a static site via GitHub Pages (GitHub Inc., 88 Colin P Kelly Jr Street, San Francisco, CA 94107, USA).',
            'When the site is opened, the host processes technically necessary access data such as IP address, date and time, requested file, volume of data transferred, browser type and operating system. The legal basis is Art. 6(1)(f) GDPR (legitimate interest in secure and reliable delivery).',
            'This processing may involve a transfer to the USA. GitHub relies on the EU standard contractual clauses for such transfers.',
          ],
        },
        {
          heading: 'Cookies, analytics and tracking',
          paragraphs: [
            'This website uses no cookies, no web analytics and no tracking. No fonts or scripts are loaded from third-party servers.',
          ],
        },
        {
          heading: 'Contacting us',
          paragraphs: [
            'If you contact us by email or phone, we process your details solely to handle your enquiry. The legal basis is Art. 6(1)(b) or (f) GDPR.',
            'An online enquiry form is not currently active. Once it is set up, this section will be extended with the service provider used and the retention period.',
          ],
        },
        {
          heading: 'External links',
          paragraphs: [
            'This website links to a profile on Facebook (Meta Platforms Ireland Ltd.). The link is only followed when you click it; no data is transmitted to Meta beforehand. Meta is responsible for processing on the destination page.',
          ],
        },
        {
          heading: 'Your rights',
          paragraphs: [
            'You have the right to access, rectification, erasure, restriction of processing, data portability and objection to processing.',
            'You also have the right to lodge a complaint with a data protection supervisory authority.',
          ],
        },
      ],
    },
  },
} satisfies SiteContent;
