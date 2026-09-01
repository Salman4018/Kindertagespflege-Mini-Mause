/**
 * Machine-readable business facts.
 *
 * Single source of truth for structured data, the footer and the legal pages.
 * `null` means "not confirmed yet" — such values are never rendered and never
 * emitted into JSON-LD, so the published site can never state something untrue.
 */
export interface BusinessFacts {
  /** Trade name as it appears publicly. */
  name: string;
  /** Natural person responsible under §5 TMG. */
  responsiblePerson: string | null;
  address: {
    street: string | null;
    postalCode: string | null;
    city: string | null;
    countryCode: 'DE';
  };
  geo: { latitude: number; longitude: number } | null;
  telephone: string | null;
  email: string | null;
  /** Schema.org opening hours, e.g. `{ days: ['Monday'], opens: '07:30', closes: '16:00' }`. */
  openingHours: readonly { days: readonly string[]; opens: string; closes: string }[];
  /** Supervisory authority for the Pflegeerlaubnis (§43 SGB VIII). */
  supervisoryAuthority: string | null;
  sameAs: readonly string[];
}

export const business: BusinessFacts = {
  name: 'Kindertagespflege Mini-Mäuse',
  responsiblePerson: null,
  address: {
    street: null,
    postalCode: null,
    city: null,
    countryCode: 'DE',
  },
  geo: null,
  telephone: null,
  email: null,
  openingHours: [],
  supervisoryAuthority: null,
  sameAs: ['https://www.facebook.com/people/Kindertagespflege-Mini-M%C3%A4use/100070488924586/'],
};

export function hasPostalAddress(facts: BusinessFacts): boolean {
  const { street, postalCode, city } = facts.address;

  return Boolean(street && postalCode && city);
}
