import { useReveal } from '../hooks/useReveal.js';
import { closet } from '../data/closet.js';

// The closet. The stack of crates runs down one column; the heading, intro and
// the selected pair's note sit alongside. Selecting a crate changes the note
// (without hiding the stack) and arms the "walk a mile" action in Contact.
// Crates are built in CSS — the shoe image, when present, is the only artwork.
export default function Closet({ selectedId, onSelect }) {
  const scope = useReveal();
  const selected = closet.find((p) => p.id === selectedId) || null;

  return (
    <section id="closet" aria-labelledby="closet-heading" ref={scope}>
      <div className="closet-layout">
        <div className="closet-aside" data-reveal>
          <h2 id="closet-heading">the closet</h2>
          <p className="closet-intro">
            Nine pairs, numbered straight through. Seven in rotation, two long gone — rendered as the
            empty crates they are. Colour means still here.
          </p>
        </div>

        <div className="closet-note" aria-live="polite">
          {selected ? (
            selected.note ? (
              <p className="closet-note-line">{selected.note}</p>
            ) : (
              <p className="closet-note-line is-placeholder">
                [ {selected.model} — Arpit’s line to be written ]
              </p>
            )
          ) : (
            <p className="closet-note-hint">Pick the pair you’d walk a mile in.</p>
          )}
        </div>

        <ol className="crates">
          {closet.map((p) => (
            <li key={p.id}>
              <button
                type="button"
                className={`crate crate--${p.state}${selectedId === p.id ? ' is-selected' : ''}`}
                aria-pressed={selectedId === p.id}
                onClick={() => onSelect(p.id)}
              >
                <span className="crate-window">
                  <span className="crate-stamp" aria-hidden="true">
                    {p.n}
                  </span>
                  {p.state === 'rotation' &&
                    (p.image ? (
                      <img
                        src={p.image.src}
                        width={p.image.w}
                        height={p.image.h}
                        loading="lazy"
                        alt={`${p.brand} ${p.model}`}
                      />
                    ) : (
                      <span className="crate-window-tk" aria-hidden="true">
                        image TK
                      </span>
                    ))}
                </span>
                <span className="crate-label">
                  <span className="crate-n" aria-hidden="true">
                    {p.n}
                  </span>
                  <span className="crate-model">{p.model}</span>
                  <span className="crate-colourway">
                    {p.colourway || (p.state === 'gone' ? 'gone' : '—')}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>

      <p className="closet-credit">
        Product images are reference images, not photographs of the actual pairs.
      </p>
    </section>
  );
}
