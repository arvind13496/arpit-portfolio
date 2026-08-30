import { useReveal } from '../hooks/useReveal.js';
import foleyArtistImg from '../assets/foley-artist.jpg';
import vocalistImg from '../assets/vocalist.jpg';

const CRAFTS = [
  {
    title: 'Foley Artist',
    text: 'Entire foley of the Tenet final sequence — footsteps, falls, carrying, action sequences and all.',
    image: foleyArtistImg,
    imageW: 700,
    imageH: 1077,
    alt: 'Arpit in a recording studio for his Tenet foley sound design work',
    href: 'https://youtu.be/w8C73Huj_iE',
  },
  {
    title: 'Vocalist',
    text: 'Yes, he sings too. Studio session, full video linked below.',
    image: vocalistImg,
    imageW: 700,
    imageH: 1048,
    alt: 'Arpit in a recording studio giving peace signs during a vocal session',
    href: 'https://youtu.be/m-SW2KQaQ1Y?si=kWUl9KQZpAPsLgDc',
  },
];

export default function Beyond() {
  const scope = useReveal();

  return (
    <section id="beyond" aria-labelledby="beyond-heading" ref={scope}>
      <h2 id="beyond-heading" className="sr-only">
        Beyond copy
      </h2>
      <p className="quote" data-reveal>
        “Having many shoes means I step into a lot of shoes as well — <b>literally &amp; metaphorically</b>, such
        as…”
      </p>
      <ul className="duo">
        {CRAFTS.map((craft) => (
          <li className="craft-card" key={craft.title} data-reveal>
            <div className="thumb">
              <img src={craft.image} width={craft.imageW} height={craft.imageH} alt={craft.alt} />
            </div>
            <div className="info">
              <h3>{craft.title}</h3>
              <p>{craft.text}</p>
              <a className="watch" href={craft.href} target="_blank" rel="noopener noreferrer">
                ▶ watch the full video here
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
