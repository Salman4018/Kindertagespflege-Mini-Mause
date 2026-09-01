import type { SiteContent } from './types';

export const de = {
  language: 'de',
  brandName: 'Mini-Mäuse',
  eyebrow: 'Kindertagespflege',
  status: 'Angaben folgen',
  skipToContent: 'Direkt zum Inhalt',
  primaryAction: 'Platz anfragen',
  secondaryAction: 'Konzept entdecken',
  navigationLabel: 'Hauptnavigation',
  mobileNavigationLabel: 'Mobile Navigation',
  menuLabel: 'Menü',
  navigation: [
    { href: '#about', label: 'Über uns' },
    { href: '#concept', label: 'Konzept' },
    { href: '#daily-routine', label: 'Tagesablauf' },
    { href: '#spaces', label: 'Räume' },
    { href: '#faq', label: 'FAQ' },
  ],
  hero: {
    title: 'Ein geborgener Ort für kleine Entdecker.',
    introduction:
      'Liebevolle Betreuung in einer kleinen, familiären Gruppe – mit Zeit zum Spielen, Entdecken und Wachsen.',
    imageAlt: 'Illustration einer hellen Spielecke mit natürlichen Materialien',
    sealWords: ['klein', 'fein', 'familiär'],
    factsLabel: 'Kurzinfos zur Betreuung',
    facts: ['Ort wird ergänzt', 'Betreuungsalter folgt', 'Verfügbarkeit auf Anfrage'],
  },
  highlightsLabel: 'Was Mini-Mäuse besonders macht',
  highlights: [
    {
      icon: 'heart',
      title: 'Persönlich',
      text: 'Eine vertraute Bezugsperson und Raum für individuelle Bedürfnisse.',
    },
    {
      icon: 'leaf',
      title: 'Natürlich',
      text: 'Entdecken, bewegen und lernen in einem ruhigen, anregenden Umfeld.',
    },
    {
      icon: 'home',
      title: 'Geborgen',
      text: 'Ein familiärer Alltag, in dem sich kleine Persönlichkeiten entfalten.',
    },
  ],
  about: {
    eyebrow: 'Über Mini-Mäuse',
    title: 'Mit Herz, Ruhe und einem offenen Blick fürs Kind.',
    introduction:
      'Hier entsteht die persönliche Vorstellung der Kindertagespflegeperson: Motivation, Erfahrung, Qualifikation und das, was die Arbeit mit Kindern besonders macht.',
    quote: 'Jedes Kind darf in seinem eigenen Tempo ankommen, entdecken und wachsen.',
    imageAlt: 'Neutrale Illustration als Platzhalter für ein Porträt der Betreuungsperson',
    facts: ['Name folgt', 'Qualifikation wird ergänzt', 'Erfahrung wird ergänzt'],
  },
  benefits: {
    eyebrow: 'Kindertagespflege',
    title: 'Kleine Gruppe. Große Entwicklungsschritte.',
    introduction:
      'Ein überschaubares Umfeld schenkt Sicherheit und lässt Raum für echte Beziehung und individuelle Begleitung.',
    items: [
      {
        title: 'Vertraute Bezugsperson',
        text: 'Beständige Begleitung gibt Orientierung und stärkt das Vertrauen.',
      },
      {
        title: 'Individuelle Aufmerksamkeit',
        text: 'Bedürfnisse, Interessen und Entwicklungstempo stehen im Mittelpunkt.',
      },
      {
        title: 'Familiärer Rahmen',
        text: 'Ein ruhiger, alltagsnaher Ort mit wiederkehrenden Ritualen.',
      },
      {
        title: 'Gemeinsam mit Eltern',
        text: 'Offener Austausch schafft eine verlässliche Erziehungspartnerschaft.',
      },
    ],
  },
  approach: {
    eyebrow: 'Pädagogisches Konzept',
    title: 'Die Welt mit allen Sinnen begreifen.',
    introduction:
      'Kinder lernen im Spiel und im Alltag. Angebote geben Impulse, ohne die eigene Neugier und Initiative einzuengen.',
    items: [
      'Freies Spiel',
      'Sprache & Geschichten',
      'Bewegung',
      'Kreativität',
      'Natur erleben',
      'Selbstständigkeit',
      'Soziales Lernen',
      'Mitbestimmung',
    ],
  },
  routine: {
    eyebrow: 'Unser Tag',
    title: 'Verlässliche Rituale, viel Raum fürs Leben.',
    introduction:
      'Der genaue Tagesablauf wird später an die tatsächlichen Betreuungszeiten und Gewohnheiten angepasst.',
    steps: [
      {
        time: 'Morgens',
        title: 'Ankommen',
        text: 'In Ruhe begrüßen, orientieren und ins freie Spiel finden.',
      },
      {
        time: 'Vormittags',
        title: 'Entdecken',
        text: 'Frühstück, Spielimpulse, Bewegung und Zeit an der frischen Luft.',
      },
      {
        time: 'Mittags',
        title: 'Gemeinsam essen',
        text: 'Eine entspannte Mahlzeit und vertraute Tischrituale.',
      },
      {
        time: 'Ruhezeit',
        title: 'Kraft sammeln',
        text: 'Schlafen oder ruhige Beschäftigung – passend zum individuellen Bedarf.',
      },
      {
        time: 'Nachmittags',
        title: 'Spielen & Abholen',
        text: 'Ein sanfter Ausklang mit persönlicher Übergabe an die Eltern.',
      },
    ],
  },
  spaces: {
    eyebrow: 'Räume & Umgebung',
    title: 'Platz zum Spielen, Träumen und Draußensein.',
    introduction:
      'Die Bilder sind neutrale Illustrationen und werden später durch freigegebene Fotos der echten Räume ersetzt.',
    images: [
      {
        src: 'images/placeholders/playroom.svg',
        alt: 'Illustration eines hellen Spielraums',
        caption: 'Spielen & entdecken',
        width: 800,
        height: 1050,
      },
      {
        src: 'images/placeholders/rest.svg',
        alt: 'Illustration eines ruhigen Schlafbereichs',
        caption: 'Ruhen & träumen',
        width: 800,
        height: 600,
      },
      {
        src: 'images/placeholders/outdoor.svg',
        alt: 'Illustration eines grünen Außenbereichs',
        caption: 'Bewegen & Natur erleben',
        width: 800,
        height: 600,
      },
    ],
  },
  wellbeing: {
    eyebrow: 'Wohlbefinden',
    title: 'Gesund versorgt und gut aufgehoben.',
    introduction:
      'Konkrete Angaben zu Mahlzeiten, Allergien, Hygiene und Krankheitsregeln werden vor Veröffentlichung bestätigt.',
    items: [
      {
        title: 'Essen & Trinken',
        text: 'Ausgewogene Mahlzeiten, Snacks und Getränke – Details folgen.',
      },
      {
        title: 'Allergien',
        text: 'Individuelle Anforderungen werden im persönlichen Gespräch geklärt.',
      },
      { title: 'Ruhe & Schlaf', text: 'Ein geschützter Rückzugsort für altersgerechte Erholung.' },
      {
        title: 'Gesundheit & Hygiene',
        text: 'Verlässliche Abläufe und klare Absprachen zum Krankheitsfall.',
      },
    ],
  },
  settling: {
    eyebrow: 'Eingewöhnung',
    title: 'Behutsam ankommen. Vertrauen wachsen lassen.',
    introduction:
      'Die Eingewöhnung orientiert sich am Kind und wird eng mit den Eltern abgestimmt. Ein konkretes Modell wird erst nach Bestätigung genannt.',
    steps: [
      {
        title: 'Kennenlernen',
        text: 'Erwartungen, Gewohnheiten und Bedürfnisse in Ruhe besprechen.',
      },
      {
        title: 'Gemeinsam ankommen',
        text: 'Erste Besuche mit einer vertrauten Bezugsperson erleben.',
      },
      {
        title: 'Schrittweise lösen',
        text: 'Kurze Trennungen individuell und feinfühlig gestalten.',
      },
      {
        title: 'Sicher im Alltag',
        text: 'Die Betreuungszeit langsam bis zum vereinbarten Umfang ausbauen.',
      },
    ],
  },
  availability: {
    eyebrow: 'Betreuungsplatz',
    title: 'Passt Mini-Mäuse zu Ihrer Familie?',
    introduction:
      'Senden Sie eine unverbindliche Anfrage. Verfügbarkeit und Rahmenbedingungen werden persönlich besprochen.',
    badge: 'Auf Anfrage',
    details: [
      { label: 'Betreuungsalter', value: 'wird ergänzt' },
      { label: 'Betreuungstage', value: 'werden ergänzt' },
      { label: 'Öffnungszeiten', value: 'werden ergänzt' },
      { label: 'Nächster Start', value: 'auf Anfrage' },
    ],
    note: 'Noch keine bestätigten Angaben – bitte individuell anfragen.',
  },
  faq: {
    eyebrow: 'Gut zu wissen',
    title: 'Häufige Fragen von Eltern.',
    introduction:
      'Die Antworten werden mit den verbindlichen Angaben der Kindertagespflege vervollständigt.',
    items: [
      {
        question: 'Welche Kinder werden betreut?',
        answer: 'Altersbereich und Gruppengröße werden noch bestätigt.',
      },
      {
        question: 'Wie läuft die Eingewöhnung ab?',
        answer: 'Behutsam, individuell und in enger Abstimmung mit einer vertrauten Bezugsperson.',
      },
      {
        question: 'Gibt es freie Plätze?',
        answer: 'Aktuelle und zukünftige Plätze können über die Betreuungsanfrage erfragt werden.',
      },
      {
        question: 'Wie sind die Betreuungszeiten?',
        answer: 'Öffnungstage und Uhrzeiten werden ergänzt, sobald sie verbindlich vorliegen.',
      },
      {
        question: 'Wie werden Mahlzeiten organisiert?',
        answer: 'Das Verpflegungskonzept und der Umgang mit Allergien werden noch bestätigt.',
      },
      {
        question: 'Was kostet die Betreuung?',
        answer:
          'Die Kosten und mögliche öffentliche Förderung hängen von den örtlichen Regelungen ab.',
      },
    ],
  },
  contact: {
    eyebrow: 'Unverbindlich kennenlernen',
    title: 'Der erste Schritt beginnt mit einer Nachricht.',
    text: 'Erzählen Sie kurz, ab wann und in welchem Umfang Sie Betreuung suchen. Das Anfrageformular folgt in Phase 5.',
    note: 'Kontaktmöglichkeit wird eingerichtet',
  },
  footer: {
    tagline: 'Ein familiärer Ort zum Ankommen, Entdecken und Wachsen.',
    navigationLabel: 'Seitennavigation',
    contactHeading: 'Kontakt',
    legalHeading: 'Rechtliches',
    location: 'Adresse wird ergänzt',
    hours: 'Öffnungszeiten werden ergänzt',
    email: 'E-Mail wird ergänzt',
    facebook: 'Facebook',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    copyright: 'Kindertagespflege Mini-Mäuse',
  },
  languageSwitch: { label: 'EN', accessibleLabel: 'View this page in English' },
  legal: {
    metaTitle: 'Impressum & Datenschutz | Kindertagespflege Mini-Mäuse',
    metaDescription:
      'Impressum nach §5 TMG und Datenschutzerklärung der Kindertagespflege Mini-Mäuse.',
    eyebrow: 'Rechtliches',
    title: 'Impressum & Datenschutz',
    introduction:
      'Pflichtangaben nach §5 TMG sowie Informationen zur Verarbeitung personenbezogener Daten auf dieser Website.',
    backToHome: 'Zurück zur Startseite',
    pendingNotice:
      'Diese Angabe wird ergänzt, sobald sie verbindlich vorliegt. Die Seite ist bis dahin nicht vollständig.',
    imprint: {
      heading: 'Impressum',
      sections: [
        {
          heading: 'Angaben gemäß §5 TMG',
          paragraphs: [
            'Kindertagespflege Mini-Mäuse',
            'Name der Kindertagespflegeperson: wird ergänzt',
            'Anschrift: wird ergänzt',
          ],
        },
        {
          heading: 'Kontakt',
          paragraphs: ['Telefon: wird ergänzt', 'E-Mail: wird ergänzt'],
        },
        {
          heading: 'Verantwortlich für den Inhalt nach §18 Abs. 2 MStV',
          paragraphs: ['wird ergänzt (Anschrift wie oben)'],
        },
        {
          heading: 'Erlaubnis zur Kindertagespflege',
          paragraphs: [
            'Die Tätigkeit erfolgt auf Grundlage einer Pflegeerlaubnis nach §43 SGB VIII.',
            'Erteilende Aufsichtsbehörde (zuständiges Jugendamt): wird ergänzt',
          ],
        },
        {
          heading: 'Streitbeilegung',
          paragraphs: [
            'Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.',
          ],
        },
        {
          heading: 'Haftung für Inhalte und Links',
          paragraphs: [
            'Für eigene Inhalte auf diesen Seiten sind wir nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.',
            'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese Inhalte ist stets der jeweilige Anbieter verantwortlich. Bei Bekanntwerden von Rechtsverletzungen entfernen wir solche Links umgehend.',
          ],
        },
        {
          heading: 'Urheberrecht',
          paragraphs: [
            'Die auf dieser Website erstellten Inhalte unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung.',
          ],
        },
      ],
    },
    privacy: {
      heading: 'Datenschutzerklärung',
      sections: [
        {
          heading: 'Verantwortliche Stelle',
          paragraphs: [
            'Verantwortlich für die Datenverarbeitung auf dieser Website ist die im Impressum genannte Kindertagespflegeperson.',
          ],
        },
        {
          heading: 'Hosting',
          paragraphs: [
            'Diese Website wird als statische Seite über GitHub Pages (GitHub Inc., 88 Colin P Kelly Jr Street, San Francisco, CA 94107, USA) bereitgestellt.',
            'Beim Aufruf der Seite verarbeitet der Hoster technisch notwendige Zugriffsdaten wie IP-Adresse, Datum und Uhrzeit, aufgerufene Datei, übertragene Datenmenge, Browsertyp und Betriebssystem. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und störungsfreien Bereitstellung).',
            'Die Verarbeitung kann eine Übermittlung in die USA umfassen. GitHub stützt diese auf die EU-Standardvertragsklauseln.',
          ],
        },
        {
          heading: 'Cookies, Analyse und Tracking',
          paragraphs: [
            'Diese Website setzt keine Cookies, keine Webanalyse und kein Tracking ein. Es werden keine Schriftarten oder Skripte von Servern Dritter nachgeladen.',
          ],
        },
        {
          heading: 'Kontaktaufnahme',
          paragraphs: [
            'Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO.',
            'Ein Online-Anfrageformular ist derzeit nicht aktiv. Sobald es eingerichtet ist, wird dieser Abschnitt um den eingesetzten Dienstleister und die Speicherdauer ergänzt.',
          ],
        },
        {
          heading: 'Externe Verlinkungen',
          paragraphs: [
            'Diese Website verlinkt auf ein Profil bei Facebook (Meta Platforms Ireland Ltd.). Der Link wird erst durch Ihren Klick aufgerufen; vorher werden keine Daten an Meta übertragen. Für die Verarbeitung auf der Zielseite ist Meta verantwortlich.',
          ],
        },
        {
          heading: 'Ihre Rechte',
          paragraphs: [
            'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung.',
            'Zudem steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.',
          ],
        },
      ],
    },
  },
} satisfies SiteContent;
