import { useReveal } from '../hooks/useReveal.js';
import { workCards } from '../data/work.js';
import WorkCard from './WorkCard.jsx';

export default function Work() {
  const scope = useReveal();

  return (
    <section id="work" aria-labelledby="work-heading" ref={scope}>
      <div className="heading">
        <div className="stack" aria-hidden="true">
          S<br />P<br />E<br />C
        </div>
        <h2 id="work-heading">spec work</h2>
        <div className="stack" aria-hidden="true">
          W<br />O<br />R<br />K
        </div>
      </div>
      <p className="sub">click a card to flip it and see the brief ↷</p>
      <ul className="cards">
        {workCards.map((card) => (
          <WorkCard key={card.client} {...card} />
        ))}
      </ul>
    </section>
  );
}
