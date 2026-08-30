import { useReveal } from '../hooks/useReveal.js';

const ENTRIES = [
  {
    year: '2016',
    text: "My brother made my Instagram account and showed me the page of 'Sneakers N Stuff' — a Sweden-based sneaker store. They'd just posted the return of the OG AJ1 Bred.",
  },
  {
    year: 'since then',
    text: 'Sneakers have inspired me to create stuff — ad campaigns, cold emails, metro wraps, even foley sound design. Turns out chasing a good drop and chasing a good headline take the same kind of obsessive brain.',
  },
];

export default function Origin() {
  const scope = useReveal();

  return (
    <section id="origin" aria-labelledby="origin-heading" ref={scope}>
      <h2 id="origin-heading">this obsession started in 2016, when...</h2>
      <ol className="thread">
        {ENTRIES.map((entry) => (
          <li className="entry" key={entry.year} data-reveal>
            <div className="card">
              <span className="yr">{entry.year}</span>
              <p>{entry.html ?? entry.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
