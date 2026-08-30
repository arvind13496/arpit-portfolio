import { useReveal } from '../hooks/useReveal.js';
import books from '../assets/sneaker-books.webp';
import flatlayCutout from '../assets/super-kicks-cutout.webp';

export default function Origin() {
  const scope = useReveal();

  return (
    <section id="origin" aria-labelledby="origin-heading" ref={scope}>
      <h2 id="origin-heading">
        this obsession
        <br />
        started in 2016
      </h2>

      <div className="obsession">
        <div className="obsession-copy" data-reveal>
          <p className="obsession-year">2016</p>
          <p>
            My brother made my Instagram account and showed me the page of “Sneakers N Stuff” — a
            Sweden-based sneaker store. They’d just posted the return of the OG AJ1 Bred.
          </p>
          <p>
            Sneakers have inspired me to create stuff — ad campaigns, cold emails, metro wraps, even
            foley sound design. Turns out chasing a good drop and chasing a good headline take the
            same kind of obsessive brain.
          </p>
        </div>

        <figure className="obsession-media" data-reveal>
          <img
            className="obsession-books"
            src={books}
            width="920"
            height="1227"
            alt="A stack of sneaker-culture books: Shoemaker, Legends and Soles, Sneaker Wars, Virgil Abloh Icons, Soled Out"
          />
          <span className="tape red obsession-tape" aria-hidden="true" />
          <img
            className="obsession-cutout"
            src={flatlayCutout}
            width="680"
            height="1209"
            alt=""
            aria-hidden="true"
          />
          <span className="obsession-note script" aria-hidden="true">
            still chasing drops
          </span>
        </figure>
      </div>
    </section>
  );
}
