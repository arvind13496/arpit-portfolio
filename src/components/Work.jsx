import { useEffect, useMemo, useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';
import { workCards, slugify, workBySlug } from '../data/work.js';
import WorkEntry from './WorkEntry.jsx';
import CaseStudyDialog from './CaseStudyDialog.jsx';

const HASH = /^#work\/(.+)$/;

export default function Work() {
  const scope = useReveal();

  // Every piece with a stable slug, in order, for the overlay's prev/next.
  const pieces = useMemo(
    () => workCards.map((c) => ({ ...c, slug: slugify(c.client) })),
    []
  );
  const [activeSlug, setActiveSlug] = useState(null);
  const didPushRef = useRef(false);
  const active = activeSlug ? pieces.find((p) => p.slug === activeSlug) : null;

  // The URL hash is the source of truth, so a shared link opens the piece and
  // the back button closes it.
  useEffect(() => {
    const readHash = () => {
      const m = window.location.hash.match(HASH);
      setActiveSlug(m && workBySlug[m[1]] ? m[1] : null);
    };
    readHash();
    window.addEventListener('popstate', readHash);
    window.addEventListener('hashchange', readHash);
    return () => {
      window.removeEventListener('popstate', readHash);
      window.removeEventListener('hashchange', readHash);
    };
  }, []);

  const open = (slug) => {
    if (window.location.hash !== `#work/${slug}`) {
      window.history.pushState(null, '', `#work/${slug}`);
      didPushRef.current = true;
    }
    setActiveSlug(slug);
  };

  const navigate = (slug) => {
    window.history.replaceState(null, '', `#work/${slug}`);
    setActiveSlug(slug);
  };

  const close = () => {
    if (didPushRef.current) {
      didPushRef.current = false;
      window.history.back(); // pops our entry; popstate clears the state
    } else if (HASH.test(window.location.hash)) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
      setActiveSlug(null);
    } else {
      setActiveSlug(null);
    }
  };

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

      <ol className="work-index">
        {pieces.map((piece) => (
          <li key={piece.slug}>
            <WorkEntry piece={piece} onOpen={open} />
          </li>
        ))}
      </ol>

      <CaseStudyDialog
        pieces={pieces}
        active={active}
        onRequestClose={close}
        onNavigate={navigate}
      />
    </section>
  );
}
