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

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onCancel={(e) => { e.preventDefault(); onClose(); }}
      aria-labelledby="lot-heading"
      className="m-0 md:m-auto w-full max-w-none md:max-w-[1200px] h-full md:h-auto md:max-h-[92vh] bg-paper text-ink border-0 md:border border-ink p-0 overflow-auto"
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
        <figure>
          <div className="border border-ink shadow-hard-8 bg-paper flex items-center justify-center">
            <img src={active.mock.src} width={active.mock.w} height={active.mock.h} alt={active.mock.alt} loading="lazy" className="block w-full h-auto max-h-[80vh] object-contain" />
          </div>
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
