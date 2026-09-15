import { useEffect, useRef } from 'react';
import Q from './Q.jsx';

// The full lot in a native <dialog>: the mockup, full width, and nothing
// else — the brief lives on the card that opened this, and the mockup is
// the work, not a description of it.
export default function LotDialog({ lots, active, onRequestClose, onNavigate }) {
  const ref = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (active && !d.open) {
      triggerRef.current = document.activeElement;
      d.showModal();
      document.body.style.overflow = 'hidden';
      d.querySelector('[data-close]')?.focus();
    } else if (!active && d.open) {
      d.close();
    }
  }, [active]);

  const onClose = () => {
    document.body.style.overflow = '';
    triggerRef.current?.focus?.();
    onRequestClose();
  };

  if (!active) return <dialog ref={ref} onClose={onClose} />;

  const i = lots.findIndex((l) => l.slug === active.slug);
  const prev = lots[(i - 1 + lots.length) % lots.length];
  const next = lots[(i + 1) % lots.length];

  // The UA stylesheet pins a modal dialog at both top:0 and bottom:0, so
  // h-auto stretches to the viewport and a short lot sits above a slab of dead
  // paper. Releasing the bottom edge lets the panel hug its content; top-1/2
  // with the translate keeps it centred the way m-auto used to.
  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onCancel={(e) => { e.preventDefault(); onClose(); }}
      aria-labelledby="lot-heading"
      className="m-0 md:mx-auto md:my-0 md:top-1/2 md:bottom-auto md:-translate-y-1/2 w-full max-w-none md:max-w-[1200px] h-full md:h-auto md:max-h-[92vh] bg-paper text-ink border-0 md:border border-ink p-0 overflow-auto"
    >
      <div className="sticky top-0 bg-paper border-b border-ink flex items-center justify-between gap-4 px-4 md:px-6 h-12">
        <p id="lot-heading" className="label flex gap-4">
          <span className="mono-wide">Lot {active.lot}</span>
          <span>{active.format}</span>
          <span>{active.client}</span>
        </p>
        <button type="button" data-close onClick={onClose} className="label font-bold h-full px-3 border-l border-ink -mr-4 md:-mr-6">
          <Q>CLOSE</Q>
          <span className="sr-only">Close lot {active.lot}</span>
        </button>
      </div>

      <div className="p-4 md:p-6">
        {/* 'pair' sets two ideas beside each other so they read as a choice;
            everything else stacks. Each frame is capped at its image's own
            pixel width so nothing is ever upscaled past its source. */}
        <figure className={active.layout === 'pair' ? 'grid gap-4 md:gap-6 md:grid-cols-2 md:items-start' : 'flex flex-col gap-4 md:gap-6'}>
          {active.mocks.map((m, k) => (
            <div key={k} className="border border-ink shadow-hard-8 bg-paper mx-auto w-full" style={{ maxWidth: m.w }}>
              <img src={m.src} width={m.w} height={m.h} alt={m.alt} loading="lazy" className="block w-full h-auto" />
            </div>
          ))}
          {/* The mockups are the work, so they carry the design on their own.
              But the words inside them are his, and words that exist only as
              pixels are unreadable to a screen reader and unfindable by
              search. The copy rides along here, announced and searchable,
              shown to no one. */}
          <figcaption className="sr-only">
            {active.line && <span>{active.line} </span>}
            {active.copy.map((c, k) => (
              <span key={k}>{c} </span>
            ))}
          </figcaption>
        </figure>
      </div>

      <div className="border-t border-ink grid grid-cols-2">
        <button type="button" onClick={() => onNavigate(prev.slug)} className="label font-bold p-4 text-left border-r border-ink hover:bg-ink hover:text-lime focus-visible:bg-ink focus-visible:text-lime">
          ← Lot {prev.lot} · {prev.client}
        </button>
        <button type="button" onClick={() => onNavigate(next.slug)} className="label font-bold p-4 text-right hover:bg-ink hover:text-lime focus-visible:bg-ink focus-visible:text-lime">
          Lot {next.lot} · {next.client} →
        </button>
      </div>
    </dialog>
  );
}
