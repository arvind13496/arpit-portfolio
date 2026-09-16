import liquidDeath from '../assets/liquid-death.webp';
import mailchimp from '../assets/mailchimp.webp';
import duolingoWrap from '../assets/duolingo-wrap.webp';
import duolingoOverhead from '../assets/duolingo-overhead.webp';
import duolingoSeat from '../assets/duolingo-seat.webp';
import economistFlyover from '../assets/economist-flyover.webp';
import economistBridge from '../assets/economist-bridge.webp';
import madAdWoman from '../assets/mad-ad-woman.webp';
import diesel from '../assets/diesel.webp';
import wholeTruthCard1 from '../assets/whole-truth-card-1.webp';
import wholeTruthCard2 from '../assets/whole-truth-card-2.webp';
import dove from '../assets/dove.webp';

// Eight briefs from the Mad Ad Woman copywriting cohort. Nothing here was
// commissioned by the client named; the manifest says so where it cannot be
// missed. `cta` names what opening the lot shows. `line` and `copy` are his
// words, verbatim — they carry the sr-only caption in the dialog, since the
// words themselves live inside the mockups as pixels.
//
// `mocks` is every image of the piece, in the order he wrote the copy for it.
// `layout` says how the dialog sets them: 'single' for one image, 'stack' for
// placements that are too wide to sit beside each other, 'pair' for two ideas
// meant to be compared at a glance.
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
    layout: 'single',
    mocks: [
      { src: liquidDeath, w: 1400, h: 876, alt: 'Liquid Death 404 page in a browser window: a moonlit graveyard where two headstones spell 404, a flaming skull half-buried at the left, and the middle headstone reading “Click here to go back to our thirst-murdering products”' },
    ],
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
    layout: 'single',
    mocks: [
      { src: mailchimp, w: 754, h: 2318, alt: 'The full Mailchimp cold email in an email-preview window: subject line “Put a foot into the doors of your customers’ inbox”, the Intuit Mailchimp wordmark, the opening question about algorithms, a black panel reading “Take control of your visibility, reach out to your customers!”, four feature cards, and a yellow “Sign up now” button under a 50%-off offer' },
    ],
    critique: '',
  },
  {
    lot: '03',
    slug: 'duolingo',
    client: 'Duolingo',
    format: 'metro-coach wrap',
    cta: 'See all three placements',
    brief: 'Write a full metro-coach wrap for Duolingo.',
    line: 'Jitni der scroll karne me waste kiya, utni der me French me ask out karna seekh jaate. Anyways, your loss.',
    copy: [
      '“Duo ko sirf HOOT HOOT hi nahi, slackers ke saath BRUTE hona bhi aata hai.”',
      '“Aaj ka lesson complete nahi kiya? Aa jau kya mai apni pe???”',
    ],
    note: 'Hinglish, as written.',
    layout: 'stack',
    mocks: [
      { src: duolingoWrap, w: 1400, h: 781, alt: 'Duolingo metro coach at a platform, its full length wrapped in white: “Jitni der scroll karne me waste kiya, utni der me French me ask out karna seekh jaate” in green caps, with “Anyways, your loss” beneath it and a sleeping Duo owl beside the line “Learn your next language on Duolingo”' },
      { src: duolingoOverhead, w: 1400, h: 534, alt: 'Overhead panels inside the coach, above the doors: “Duo ko sirf HOOT HOOT hi nahi, Slackers ke saath BRUTE hona bhi aata hai”, with a Duo owl holding a cricket bat' },
      { src: duolingoSeat, w: 1400, h: 457, alt: 'Panels under the blue passenger seats: “Aaj ka lesson complete nahi kiya? AA JAU KYA MAI APNI PE???” with a scowling, arms-folded Duo owl' },
    ],
    critique: '',
  },
  {
    lot: '04',
    slug: 'the-economist',
    client: 'The Economist',
    format: 'billboard',
    cta: 'See both billboards',
    brief: 'Write a hoarding for The Economist. One line, on a flyover, read in 3 seconds at 60kmph. No subhead, no explanation.',
    line: 'Make them mean it when they say ‘great speaking with you.’',
    copy: [
      '“Nice talking to you → Pleasure doing business with you.”',
    ],
    layout: 'pair',
    mocks: [
      { src: economistFlyover, w: 900, h: 600, alt: 'The Economist billboard in signature red on a Mumbai flyover above heavy traffic: “Make them mean it when they say “great speaking with you”.”' },
      { src: economistBridge, w: 900, h: 600, alt: 'A second Economist billboard under a railway bridge: “Nice talking to you” on the left, an arrow drawn through the Economist logo, and “Pleasure doing business with you” on the right' },
    ],
    critique: '',
  },
  {
    lot: '05',
    slug: 'mad-ad-woman',
    client: 'Mad Ad Woman',
    format: 'Instagram ad, long copy',
    cta: 'Read the ad',
    brief: 'Write an ad to sell the ‘Mad Ad Woman’ copy batch. Find insights only someone who’s been through it could know, as a single story with long copy.',
    line: 'Copywriting is a creative task, and creativity is subjective. Then how do you know whether your copy is good or bad?',
    copy: [
      'Subjectively, writing is an art, it’s supposed to be appreciated in its uniqueness. But appreciation rarely brings improvement, and it seldom brings conversions.',
      'Objectively, any copy is considered good when: it has a single clear idea which can be said in one sentence; it has a real, human truth behind it; its craft serves the idea behind it; the copy in itself adds to the idea rather than simply describing it; and finally, it makes you feel an intended emotion.',
      'Only then do you consider any copy an objectively good copy, and that’s exactly what the students of our copy batch are building, a skill in understanding and creating exceptional copy.',
      '“DM to get more details and sign up for the next copy batch.”',
    ],
    layout: 'single',
    mocks: [
      { src: madAdWoman, w: 825, h: 1100, alt: 'The Mad Ad Woman Instagram post open on a phone held in one hand: the headline asking how you know whether your copy is good or bad, two contrasting boxes on subjective versus objective judgement, a five-point list of what makes copy objectively good, and a dark button reading “DM to get more details and sign up for the next copy batch”' },
    ],
    critique: '',
  },
  {
    lot: '06',
    slug: 'diesel',
    client: 'Diesel',
    format: 'cinema ad, 45–60s',
    cta: 'See the storyboard',
    brief: 'Write a 45–60 second cinema ad for Diesel, playing right before a Friday-night blockbuster. The crowd just paid ₹600 for popcorn — they already made one gloriously dumb, joyful decision. Use it. Diesel celebrates the brave-stupid over the safe-smart.',
    line: 'Be Bold. Be Stupid.',
    copy: [
      'An 18-panel storyboard: BMX ride, bike and denim detail, skate jump, campus walk, rock concert — his denim life, cut short by a job offer reading “Dress Code: Formals”.',
      'Denim packed away, suit on, swallowed by a beige open-plan office, then walking home alone at night and slumped on the bed, hollowed out.',
      'Jacket back on, grinning — he dribbles a football through the office and kicks it into the boss’s cabin with “I QUIT” scrawled across it, then rides off in denim again. End card: “BE BOLD. BE STUPID.” over Diesel’s own line, “For Successful Living.”',
    ],
    layout: 'single',
    mocks: [
      { src: diesel, w: 1200, h: 4977, alt: 'Diesel storyboard, 18 panels: a denim-loving free spirit trades his identity for a formal corporate job, finds it hollow, and reclaims his authentic self by resigning and riding off in denim again' },
    ],
    critique: '',
  },
  {
    lot: '07',
    slug: 'the-whole-truth',
    client: 'The Whole Truth',
    format: 'insert card',
    cta: 'Read both cards',
    brief: 'Write the little insert card inside someone’s first-ever Whole Truth order.',
    line: 'The Whole Truth is that this product is not the sweetest out there. And it’s certainly not the cheapest.',
    copy: [
      '“It takes conscious efforts to prioritise one’s health and we’re proud of you for doing that.”',
      '“You already know why you bought this product. If you still need more convincing, check the ingredients on the packaging.”',
    ],
    layout: 'pair',
    mocks: [
      { src: wholeTruthCard1, w: 900, h: 720, alt: 'A hand holding a Whole Truth protein sachet with a cream insert card on top, handwritten: “The Whole Truth is that this product is not the sweetest out there. And it’s certainly not the cheapest. It takes conscious efforts to prioritise one’s health and we’re proud of you for doing that.”' },
      { src: wholeTruthCard2, w: 900, h: 720, alt: 'The second insert card on the same sachet: “You already know why you bought this product. If you still need more convincing, check the ingredients on the packaging.” above The Whole Truth logo' },
    ],
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
      'Since many years, the standards of beautiful skin have been set by the cosmetic and beauty industry, carrying a fixed definition of beautiful skin. Flawless glass skin with no spots, pores, textures or pigmentation. This has led to body dissatisfaction and frustration in women across the globe. About 60 percent of women around the world feel self conscious about their skin.',
      'Dove is here to change that. We believe that beauty isn’t a goal to achieve, it is a feeling. It lies in being true to oneself and accepting one’s own skin. Each stretch mark, freckle, mole and texture of your skin makes you unique and beautiful in your own way. So experience beauty in your real skin and let Dove take care of it for you.',
      'Because this is the only way your skin is supposed to look like.',
    ],
    layout: 'single',
    mocks: [
      { src: dove, w: 848, h: 1200, alt: 'Dove long-copy magazine ad: the headline “This is what your skin is supposed to look like” above an empty wall mirror, then body copy about industry beauty standards and accepting real skin, closing on “Because this is the only way your skin is supposed to look like” and the Dove logo' },
    ],
    critique: '',
  },
];

export const lotBySlug = Object.fromEntries(LOTS.map((l) => [l.slug, l]));

// Real work, not a cohort brief: sits after the eight lots on the manifest,
// labelled apart from the spec work above it.
export const REAL_WORK = {
  title: 'Sneaker Social 3, with Smartkicks Official',
  event: 'Sneaker Social 3',
  partner: 'Smartkicks Official',
  what: 'Worked with sneaker content creator @smartkicksofficial in organising his flagship sneaker-head meet-up.',
  functions: 'Venue curation and partnerships, in-event management, social media content strategy, volunteer management, and everything under the sun.',
};
