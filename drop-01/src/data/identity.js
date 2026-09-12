import passport from '../assets/passport.webp';
import portrait from '../assets/portrait.webp';

// Every fact here traces to the brief. The issue date is the drop's own
// publication date, not a biography fact; it is the one value set by the build.
export const DROP = { number: '01', issued: '2026-09-12' };

export const PERSON = {
  name: 'Arpit Lakhani',
  first: 'Arpit',
  last: 'Lakhani',
  dayJob: {
    role: 'Product Manager',
    unit: 'Government & Institutional Banking',
    org: 'ICICI Bank',
  },
  craft: ['Copywriter', 'Foley artist', 'Vocalist', 'Sneakerhead'],
  school: 'SCMHRD',
  city: 'Mumbai',
  size: 'UK 10',
  email: 'arpitlakhani16@gmail.com',
  instagram: { handle: '@lakhaniarpit', url: 'https://instagram.com/lakhaniarpit' },
  linkedin: { handle: 'arpitlakhani', url: 'https://linkedin.com/in/arpitlakhani' },
};

// Unsupplied facts, rendered as visible tokens. Keys are the <<FILL:...>> ids
// from the brief; the build prints every one still outstanding at check time.
export const FILLS = {
  MADADWOMAN_LINE: null,
  FOLEY_RUNTIME: null,
  VOCAL_RUNTIME: null,
};

// The passport-size photo on the statement of account: a 3:4 crop of a
// supplied photograph, served at 240x320 for an 84px box.
export const PASSPORT = { src: passport, w: 240, h: 320 };

// The cover portrait: a 4:5 crop of the same photograph, served at 800x1000.
export const PORTRAIT = { src: portrait, w: 800, h: 1000, alt: 'Arpit at a monument at sunset, looking over his shoulder and smiling' };

// The résumé lives on Google Drive, not in this repository. Set the href
// once the link exists; until then the statement prints a pending slot.
export const RESUME = { href: 'https://drive.google.com/file/d/1PvQKCqmV7eJAkoFI-A9_SZp6aEd74o16/view?usp=drivesdk', label: 'Google Drive, one page' };

// The statement of account: seven lines. Each says something no other part
// of the page says, in a form a hiring marketer scans. The rest is the résumé.
export const STATEMENT = [
  ['Role', 'Product Manager, Government & Institutional Banking, ICICI Bank · since April 2023'],
  ['Shipped', '10+ BRDs from 100+ client feedback points · 9 customers onboarded · 200+ queries'],
  ['Education', 'MBA, Sales & Marketing, SCMHRD, 2023'],
  ['Wins', 'IMT Marketing World Cup · Peek-a-Sneak · Pen-a-thought'],
];

// The same receipt, off the books: three lines a résumé leaves out and the
// rest of the page does not already carry in this form.
export const OFF_THE_BOOKS = [
  ['Account opened', '2016 · the OG AJ1 Bred'],
  ['Band', 'BlackBook, lead vocalist'],
  ['Content', 'With a sneaker creator: ideation, trends, meetups'],
];

// His thesis line, verbatim.
export const RULE = {
  text: 'I wouldn’t have a problem walking a mile in someone else’s shoes. The shoes must be cool tho — and my size',
  aside: '(UK 10 if you’re wondering)',
};

// The 2016 origin, verbatim in substance. The KYC fields below are the same
// facts re-set as a form, which is the whole 3% move.
export const ORIGIN = {
  year: '2016',
  paragraphs: [
    'My brother made my Instagram account and showed me the page of “Sneakers N Stuff” — a Sweden-based sneaker store. They’d just posted the return of the OG AJ1 Bred.',
    'Sneakers have inspired me to create stuff — ad campaigns, cold emails, metro wraps, even foley sound design. Turns out chasing a good drop and chasing a good headline take the same kind of obsessive brain.',
  ],
  kyc: [
    ['Account opened', '2016'],
    ['Introduced by', 'Brother'],
    ['Channel', 'Instagram'],
    ['Counterparty', 'Sneakers N Stuff, Sweden'],
    ['Instrument', 'OG AJ1 Bred (return)'],
  ],
};
