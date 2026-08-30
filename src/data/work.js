export const workCards = [
  {
    tag: '404 page',
    client: 'Liquid Death',
    line: 'THIS PAGE IS DEAD, BURIED.',
    brief: 'Make an error 404 page for Liquid Death.',
    copy: '"THIS PAGE IS DEAD, BURIED." A graveyard scene — two headstones spell 404, a skull half-buried, moonlit sky. "Click here to go back to our thirst-murdering products."',
  },
  {
    tag: 'cold email',
    client: 'Mailchimp',
    line: 'Put a foot into the doors of your customers’ inbox.',
    brief: 'Write a cold email from Mailchimp to a D2C founder who runs everything on Instagram and has never sent a marketing email.',
    copy: '"Put a foot into the doors of your customers\' inbox." Are your business decisions left on the whimsy of the algorithms? Take control of your visibility, reach out to your customers! With Mailchimp\'s ever-intuitive mailing platform, you\'re always one step closer to your customers.',
  },
  {
    tag: 'metro wrap',
    client: 'Duolingo',
    line: 'Jitni der scroll karne me waste kiya, utni der me French me ask out karna seekh jaate. Anyways, your loss.',
    brief: 'Write a full metro-coach wrap for Duolingo.',
    copy: '"Jitni der scroll karne me waste kiya, utni der me French me ask out karna seekh jaate. Anyways, your loss." · "Duo ko sirf HOOT HOOT hi nahi, slackers ke saath BRUTE hona bhi aata hai." · "Aaj ka lesson complete nahi kiya? Aa jau kya mai apni pe???"',
  },
  {
    tag: 'billboard',
    client: 'The Economist',
    line: 'Make them mean it when they say ‘great speaking with you.’',
    brief: 'Write a hoarding for The Economist. One line, on a flyover, read in 3 seconds at 60kmph. No subhead, no explanation.',
    copy: '"Make them mean it when they say \'great speaking with you.\'"',
  },
  {
    tag: 'ig ad',
    client: 'Mad Ad Woman',
    // TODO: hero line needs writing — the long-copy piece has no punchy one-liner yet.
    line: '',
    brief: 'Write an ad to sell the \'Mad Ad Woman\' copy batch. Find insights only someone who\'s been through it could know, as a single story with long copy.',
    copy: '"Copywriting is a creative task, and creativity is subjective. Then how do you know whether your copy is good or bad?" ...breaks down what makes copy objectively good, then: "DM to get more details and sign up for the next copy batch."',
  },
  {
    tag: 'cinema ad',
    client: 'Diesel',
    line: 'Be Bold. Be Stupid.',
    brief: 'Write a 45–60 second cinema ad for Diesel, playing right before a Friday-night blockbuster. The crowd just paid ₹600 for popcorn — one gloriously dumb, joyful decision already made. Diesel celebrates brave-stupid over safe-smart. Reckless on purpose.',
    copy: '"Be Bold. Be Stupid." — 5-panel storyboard: BMX ride through the city → denim & bike detail → skateboard jump → campus walk → rock concert finale.',
  },
  {
    tag: 'insert card',
    client: 'The Whole Truth',
    line: 'The Whole Truth is that this product is not the sweetest out there.',
    brief: 'Write the little insert card inside someone\'s first-ever Whole Truth order.',
    copy: '"The Whole Truth is that this product is not the sweetest out there. And it\'s certainly not the cheapest. It takes conscious effort to prioritise one\'s health — and we\'re proud of you for doing that."',
  },
  {
    tag: 'magazine ad',
    client: 'Dove',
    line: 'This is what your skin is supposed to look like.',
    brief: 'Write a long-copy magazine ad for Dove about real skin.',
    copy: '"This is what your skin is supposed to look like." (a mirror, reflecting nothing but skin.) "...Dove is here to change that. Beauty isn\'t a goal to achieve, it\'s a feeling. Because this is the only way your skin is supposed to look like."',
  },
];

// Stable url-safe slug for a piece, used by the case-study deep links
// (#work/<slug>). Derived from the client name so the data stays the source
// of truth.
export function slugify(client) {
  return client
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const workBySlug = Object.fromEntries(
  workCards.map((card) => [slugify(card.client), card])
);
