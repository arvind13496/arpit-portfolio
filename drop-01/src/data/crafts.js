import foley from '../assets/foley-artist.webp';
import vocalist from '../assets/vocalist.webp';

// The other shoes. What it is, where it plays, how long it runs — the runtime
// is not supplied and renders as a FILL token rather than a guess.
export const CRAFTS = [
  {
    id: 'foley',
    title: 'Foley artist',
    what: 'Entire foley of the Tenet final sequence — footsteps, falls, carrying, action sequences and all.',
    where: 'YouTube',
    href: 'https://youtu.be/w8C73Huj_iE',
    runtimeFill: 'FOLEY_RUNTIME',
    poster: { src: foley, w: 700, h: 1077, alt: 'Arpit in a recording studio for his Tenet foley sound design work' },
  },
  {
    id: 'vocal',
    title: 'Vocalist',
    what: 'Studio session.',
    where: 'YouTube',
    href: 'https://youtu.be/m-SW2KQaQ1Y',
    runtimeFill: 'VOCAL_RUNTIME',
    poster: { src: vocalist, w: 700, h: 1048, alt: 'Arpit in a recording studio giving peace signs during a vocal session' },
  },
];
