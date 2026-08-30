import { useEffect, useRef } from 'react';
import { workImages } from '../data/workImages.js';

// Controlled case-study overlay. Rendered once; `active` (a piece object with
// a slug) drives it, and the URL is the source of truth above that. A native
// <dialog> gives us the top layer, backdrop and Escape for free. Visibility of
// the on-page line never depends on this — if showModal throws, the index
// entry is still readable (hard rule 12).
export default function CaseStudyDialog({ pieces, active, onRequestClose, onNavigate }) {
  const dialogRef = useRef(null);
  const titleRef = useRef(null);
  const returnFocusRef = useRef(null);

  const index = active ? pieces.findIndex((p) => p.slug === active.slug) : -1;
  const prev = index > 0 ? pieces[index - 1] : null;
  const next = index >= 0 && index < pieces.length - 1 ? pieces[index + 1] : null;

  // Open / close / focus / scroll-lock all follow `active` in one place, so
  // there is a single close path and no race between custom and native events.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (active) {
      if (!dialog.open) {
        returnFocusRef.current = document.activeElement;
        try {
          dialog.showModal();
        } catch {
          return; // couldn't open; the entry still reads
        }
        document.body.style.overflow = 'hidden';
      }
      // On open and on every prev/next, move focus to the new piece title.
      if (titleRef.current) titleRef.current.focus();
    } else if (dialog.open) {
      dialog.close();
      document.body.style.overflow = '';
      const el = returnFocusRef.current;
      returnFocusRef.current = null;
      if (el && typeof el.focus === 'function') el.focus();
    }
  }, [active]);

  const label = active ? `${active.tag} · ${active.client}` : '';
  const mock = active ? workImages[active.client] : null;

  return (
    <dialog
      ref={dialogRef}
      className="case-study"
      aria-labelledby="case-study-title"
      onCancel={(e) => {
        // Escape: let the route drive the close so history stays in sync.
        e.preventDefault();
        onRequestClose();
      }}
      onClick={(e) => {
        // Click on the backdrop (the dialog element itself) closes it.
        if (e.target === dialogRef.current) onRequestClose();
      }}
    >
      {active && (
        <div className="case-study-inner">
          <div className="case-study-bar">
            <p className="case-study-label" id="case-study-title" ref={titleRef} tabIndex={-1}>
              {label}
            </p>
            <div className="case-study-controls">
              <button
                type="button"
                className="cs-nav"
                onClick={() => prev && onNavigate(prev.slug)}
                disabled={!prev}
                aria-label={prev ? `Previous piece: ${prev.client}` : 'No previous piece'}
              >
                ‹ prev
              </button>
              <button
                type="button"
                className="cs-nav"
                onClick={() => next && onNavigate(next.slug)}
                disabled={!next}
                aria-label={next ? `Next piece: ${next.client}` : 'No next piece'}
              >
                next ›
              </button>
              <button
                type="button"
                className="cs-close"
                onClick={onRequestClose}
                aria-label="Close case study"
              >
                close
              </button>
            </div>
          </div>

          <div className="case-study-body">
            <p className="case-study-heading">The copy</p>
            <p className="case-study-copy">{active.copy}</p>

            <p className="case-study-heading">The brief</p>
            <p className="case-study-brief">{active.brief}</p>

            {/* Margin slot for the T09 self-critique, set as a marker note. */}
            {active.critique && <aside className="case-study-critique">{active.critique}</aside>}

            {mock && (
              <figure className="case-study-mock">
                <img src={mock} alt={`Finished ${active.client} ${active.tag} mockup`} />
                <figcaption>{active.tag}</figcaption>
              </figure>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
