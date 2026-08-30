import { useEffect, useRef, useState } from 'react';
import CustomCursor from './components/CustomCursor.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Origin from './components/Origin.jsx';
import Work from './components/Work.jsx';
import Beyond from './components/Beyond.jsx';
import Closet from './components/Closet.jsx';
import Contact from './components/Contact.jsx';
import CaseStudyDialog from './components/CaseStudyDialog.jsx';
import { workCards, slugify } from './data/work.js';
import { closet } from './data/closet.js';

const HASH = /^#work\/(.+)$/;

// Every piece with a stable slug.
const pieces = workCards.map((c) => ({ ...c, slug: slugify(c.client) }));
const bySlug = Object.fromEntries(pieces.map((p) => [p.slug, p]));
const pick = (slugs) => slugs.map((s) => bySlug[s]);

// The three work movements, and the narrative order the overlay's prev/next
// traverses (movement 02 → 04 → 06, not data-file order).
const FAST_WORK = pick(['the-economist', 'the-whole-truth']);
const LONG_COPY = pick(['dove', 'liquid-death', 'diesel', 'mad-ad-woman']);
const COMMERCIAL = pick(['duolingo', 'mailchimp']);
const NARRATIVE = [...FAST_WORK, ...LONG_COPY, ...COMMERCIAL];

const closetById = Object.fromEntries(closet.map((p) => [p.id, p]));

export default function App() {
  const [activeSlug, setActiveSlug] = useState(null);
  const [walkId, setWalkId] = useState(null); // the closet pair to walk a mile in
  const didPushRef = useRef(false);
  const active = activeSlug ? bySlug[activeSlug] : null;
  const walkPair = walkId ? closetById[walkId] : null;

  // The URL hash is the source of truth: a shared link opens the piece and the
  // back button closes it. One listener, one dialog, for the whole page.
  useEffect(() => {
    const readHash = () => {
      const m = window.location.hash.match(HASH);
      setActiveSlug(m && bySlug[m[1]] ? m[1] : null);
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
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <CustomCursor />
      <Nav />
      <main id="main">
        {/* 01 — the cover and the person (T06 will merge these). */}
        <Hero />
        <About />
        {/* 02 — fast work */}
        <Work id="fast-work" title="Fast work" pieces={FAST_WORK} onOpen={open} />
        {/* 03 — the obsession */}
        <Origin />
        {/* 04 — the long copy */}
        <Work id="long-copy" title="The long copy" pieces={LONG_COPY} onOpen={open} />
        {/* 05 — the other shoes */}
        <Beyond />
        {/* 06 — the commercial close */}
        <Work id="commercial" title="The commercial close" pieces={COMMERCIAL} onOpen={open} />
        {/* 07 — the closet */}
        <Closet selectedId={walkId} onSelect={setWalkId} />
        {/* 08 — sign off */}
        <Contact walkPair={walkPair} />
      </main>
      <footer>Issue 01 &middot; Arpit Lakhani &middot; Mumbai &middot; set in Archivo &amp; Space Mono</footer>
      <CaseStudyDialog
        pieces={NARRATIVE}
        active={active}
        onRequestClose={close}
        onNavigate={navigate}
      />
    </>
  );
}
