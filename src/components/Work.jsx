import { useReveal } from '../hooks/useReveal.js';
import WorkEntry from './WorkEntry.jsx';

// Presentational work section: a titled index of the pieces it is handed.
// State (the overlay, hash routing) lives in App so there is one dialog.
export default function Work({ id, title, pieces, onOpen }) {
  const scope = useReveal();

  return (
    <section id={id} aria-labelledby={`${id}-heading`} ref={scope}>
      <h2 id={`${id}-heading`}>{title}</h2>
      <ol className="work-index">
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <WorkEntry piece={piece} onOpen={onOpen} />
          </li>
        ))}
      </ol>
    </section>
  );
}
