import { useEffect, useRef } from 'react';
import Q from './Q.jsx';

// The full lot in a native <dialog>: brief, line, copy as live text, the
// mockup at its own size, and the self-critique margin — empty, and visibly so.
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
      className="m-0 md:m-auto w-full max-w-none md:max-w-[1100px] h-full md:h-auto md:max-h-[92vh] bg-paper text-ink border-0 md:border-4 border-ink p-0 overflow-auto"
    >
      <div className="sticky top-0 bg-paper border-b-4 border-ink flex items-center justify-between gap-4 px-4 md:px-6 h-12">
        <p className="label flex gap-4">
          <span className="mono-wide">Lot {active.lot}</span>
          <span>{active.format}</span>
          <span>{active.client}</span>
        </p>
        <button type="button" data-close onClick={onClose} className="label font-bold h-full px-3 border-l-4 border-ink -mr-4 md:-mr-6">
          <Q>CLOSE</Q>
          <span className="sr-only">Close lot {active.lot}</span>
        </button>
      </div>

      <div className="grid grid-cols-12 gap-6 p-4 md:p-6">
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
          <div className="bg-lime text-ink border-4 border-ink p-4">
            <p className="label">Brief, self-set</p>
            <p className="mt-1 max-w-[70ch]">{active.brief}</p>
          </div>

          <h2 id="lot-heading" className="display text-[clamp(32px,5vw,72px)]">
            {active.line === null ? <span className="fill">[ FILL: MADADWOMAN_LINE ]</span> : active.line}
          </h2>

          {active.copy.length > 0 && (
            <div className="flex flex-col gap-4 max-w-[68ch] text-[17px]">
              {active.copy.map((p, k) => (
                <p key={k}>{p}</p>
              ))}
            </div>
          )}

          <aside className="border-4 border-dashed border-ink p-4" aria-label="Self-critique">
            <p className="label">Self-critique · margin</p>
            {active.critique ? <p className="mt-2 max-w-[60ch]">{active.critique}</p> : <p className="mt-2"><span className="fill">[ SELF-CRITIQUE PENDING ]</span></p>}
          </aside>
        </div>

        <figure className="col-span-12 lg:col-span-5">
          <div className="border-4 border-ink shadow-hard-8">
            <img src={active.mock.src} width={active.mock.w} height={active.mock.h} alt={active.mock.alt} loading="lazy" className="block w-full h-auto" />
          </div>
          <figcaption className="label mt-4">Mockup, {active.mock.w}×{active.mock.h}</figcaption>
        </figure>
      </div>

      <div className="border-t-4 border-ink grid grid-cols-2">
        <button type="button" onClick={() => onNavigate(prev.slug)} className="label font-bold p-4 text-left border-r-4 border-ink hover:bg-ink hover:text-lime focus-visible:bg-ink focus-visible:text-lime">
          ← Lot {prev.lot} · {prev.client}
        </button>
        <button type="button" onClick={() => onNavigate(next.slug)} className="label font-bold p-4 text-right hover:bg-ink hover:text-lime focus-visible:bg-ink focus-visible:text-lime">
          Lot {next.lot} · {next.client} →
        </button>
      </div>
    </dialog>
  );
}
