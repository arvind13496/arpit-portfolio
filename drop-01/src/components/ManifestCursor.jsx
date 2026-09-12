import { useEffect, useRef, useState } from 'react';

// A tag that rides the pointer over the manifest cards and names what
// opening the lot shows. Decorative: fine pointers only, off under reduced
// motion, hidden from assistive tech, never in the way of a click.
export default function ManifestCursor({ scope }) {
  const ref = useRef(null);
  const [label, setLabel] = useState(null);

  useEffect(() => {
    const el = scope.current;
    if (!el) return;
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;
    const move = (e) => {
      const card = e.target.closest('[data-cta]');
      if (!card) return setLabel(null);
      setLabel(card.dataset.cta);
      if (ref.current) ref.current.style.translate = `${e.clientX}px ${e.clientY}px`;
    };
    const leave = () => setLabel(null);
    el.classList.add('has-cursor');
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', leave);
    return () => {
      el.classList.remove('has-cursor');
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', leave);
    };
  }, [scope]);

  return (
    <div ref={ref} hidden={!label} aria-hidden="true" className="fixed left-0 top-0 z-50 pointer-events-none">
      <span className="tag-cursor">{label} →</span>
    </div>
  );
}
