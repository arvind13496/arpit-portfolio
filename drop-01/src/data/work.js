import liquidDeath from '../assets/liquid-death.webp';
import mailchimp from '../assets/mailchimp.webp';
import duolingo from '../assets/duolingo.webp';
import economist from '../assets/economist.webp';
import madAdWoman from '../assets/mad-ad-woman.webp';
import diesel from '../assets/diesel.webp';
import wholeTruth from '../assets/whole-truth.webp';
import dove from '../assets/dove.webp';

// Eight briefs from the Mad Ad Woman copywriting cohort. Nothing here was
// commissioned by the client named; the manifest says so where it cannot be
// missed. `cta` names what opening the lot shows. `line` and `copy` are his words, verbatim.
// `line: null` means he has not written one — it renders as a FILL token.
// `critique` is his to write and renders as a pending slot while empty.
export const LOTS = [
  {
    lot: '01',
    slug: 'liquid-death',
    client: 'Liquid Death',
    format: '404 page',
    cta: 'See the 404 page',
    brief: 'Make an error 404 page for Liquid Death.',
    line: 'THIS PAGE IS DEAD, BURIED.',
    copy: [
      'A graveyard scene — two headstones spell 404, a skull half-buried, moonlit sky.',
      '“Click here to go back to our thirst-murdering products.”',
    ],
    lead: true,
    mock: { src: liquidDeath, w: 800, h: 772, alt: 'Liquid Death 404 page mockup: a graveyard where two headstones spell 404' },
    critique: '',
  },
  {
    lot: '02',
    slug: 'mailchimp',
    client: 'Mailchimp',
    format: 'cold email',
    cta: 'Read the email',
    brief: 'Write a cold email from Mailchimp to a D2C founder who runs everything on Instagram and has never sent a marketing email.',
    line: 'Put a foot into the doors of your customers’ inbox.',
    copy: [
      'Are your business decisions left on the whimsy of the algorithms? Take control of your visibility, reach out to your customers! With Mailchimp’s ever-intuitive mailing platform, you’re always one step closer to your customers.',
    ],
    mock: { src: mailchimp, w: 800, h: 1263, alt: 'Mailchimp cold email mockup' },
    critique: '',
  },
  {
    lot: '03',
    slug: 'duolingo',
    client: 'Duolingo',
    format: 'metro-coach wrap',
    cta: 'Read the wrap',
    brief: 'Write a full metro-coach wrap for Duolingo.',
    line: 'Jitni der scroll karne me waste kiya, utni der me French me ask out karna seekh jaate. Anyways, your loss.',
    copy: [
      '“Duo ko sirf HOOT HOOT hi nahi, slackers ke saath BRUTE hona bhi aata hai.”',
      '“Aaj ka lesson complete nahi kiya? Aa jau kya mai apni pe???”',
    ],
    note: 'Hinglish, as written.',
    mock: { src: duolingo, w: 900, h: 228, alt: 'Duolingo metro-coach wrap mockup' },
    critique: '',
  },
  {
    lot: '04',
    slug: 'the-economist',
    client: 'The Economist',
    format: 'billboard',
    cta: 'See the billboard',
    brief: 'One line, on a flyover, read in 3 seconds at 60kmph. No subhead, no explanation.',
    line: 'Make them mean it when they say ‘great speaking with you.’',
    copy: [],
    mock: { src: economist, w: 900, h: 307, alt: 'The Economist billboard mockup' },
    critique: '',
  },
  {
    lot: '05',
    slug: 'mad-ad-woman',
    client: 'Mad Ad Woman',
    format: 'Instagram ad, long copy',
    cta: 'Read the ad',
    brief: 'Write an ad to sell the ‘Mad Ad Woman’ copy batch. Find insights only someone who’s been through it could know, as a single story with long copy.',
    line: null,
    copy: [
      '“Copywriting is a creative task, and creativity is subjective. Then how do you know whether your copy is good or bad?”',
      '— breaks down what makes copy objectively good, then:',
      '“DM to get more details and sign up for the next copy batch.”',
    ],
    mock: { src: madAdWoman, w: 800, h: 1124, alt: 'Mad Ad Woman Instagram ad mockup' },
    critique: '',
  },
  {
    lot: '06',
    slug: 'diesel',
    client: 'Diesel',
    format: 'cinema ad, 45–60s',
    cta: 'See the storyboard',
    brief: 'Playing right before a Friday-night blockbuster. The crowd just paid ₹600 for popcorn — one gloriously dumb, joyful decision already made. Diesel celebrates brave-stupid over safe-smart. Reckless on purpose.',
    line: 'Be Bold. Be Stupid.',
    copy: [
      '5-panel storyboard — BMX ride through the city → denim & bike detail → skateboard jump → campus walk → rock concert finale.',
    ],
    mock: { src: diesel, w: 800, h: 1351, alt: 'Diesel cinema ad five-panel storyboard' },
    critique: '',
  },
  {
    lot: '07',
    slug: 'the-whole-truth',
    client: 'The Whole Truth',
    format: 'insert card',
    cta: 'Read the card',
    brief: 'Write the little insert card inside someone’s first-ever Whole Truth order.',
    line: 'The Whole Truth is that this product is not the sweetest out there. And it’s certainly not the cheapest.',
    copy: [
      '“It takes conscious effort to prioritise one’s health — and we’re proud of you for doing that.”',
    ],
    mock: { src: wholeTruth, w: 800, h: 1446, alt: 'The Whole Truth insert card mockup' },
    critique: '',
  },
  {
    lot: '08',
    slug: 'dove',
    client: 'Dove',
    format: 'long-copy magazine ad',
    cta: 'Read the ad',
    brief: 'Write a long-copy magazine ad for Dove about real skin.',
    line: 'This is what your skin is supposed to look like.',
    copy: [
      '(a mirror, reflecting nothing but skin.)',
      '“...Dove is here to change that. Beauty isn’t a goal to achieve, it’s a feeling. Because this is the only way your skin is supposed to look like.”',
    ],
    mock: { src: dove, w: 800, h: 1088, alt: 'Dove long-copy magazine ad mockup' },
    critique: '',
  },
];

export const lotBySlug = Object.fromEntries(LOTS.map((l) => [l.slug, l]));
