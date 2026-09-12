import { useEffect, useRef, useState } from 'react';
import Ticker from './components/Ticker.jsx';
import Nav from './components/Nav.jsx';
import Cover from './components/Cover.jsx';
import Receipt from './components/Receipt.jsx';
import Manifest from './components/Manifest.jsx';
import LotDialog from './components/LotDialog.jsx';
import Origin from './components/Origin.jsx';
import Crafts from './components/Crafts.jsx';
import Rule from './components/Rule.jsx';
import Custody from './components/Custody.jsx';
import SignOff from './components/SignOff.jsx';
import { LOTS, lotBySlug } from './data/work.js';
import { DROP, PERSON } from './data/identity.js';

const HASH = /^#lot\/(.+)$/;

export default function App() {
  const [activeSlug, setActiveSlug] = useState(null);
  const didPush = useRef(false);
  const active = activeSlug ? lotBySlug[activeSlug] : null;

  // The hash is the source of truth for the open lot: a shared link opens it,
  // the back button closes it.
  useEffect(() => {
    const read = () => {
      const m = window.location.hash.match(HASH);
      setActiveSlug(m && lotBySlug[m[1]] ? m[1] : null);
    };
    read();
    window.addEventListener('popstate', read);
    window.addEventListener('hashchange', read);
    return () => {
      window.removeEventListener('popstate', read);
      window.removeEventListener('hashchange', read);
    };
  }, []);

  const open = (slug) => {
    if (window.location.hash !== `#lot/${slug}`) {
      window.history.pushState(null, '', `#lot/${slug}`);
      didPush.current = true;
    }
    setActiveSlug(slug);
  };
  const navigate = (slug) => {
    window.history.replaceState(null, '', `#lot/${slug}`);
    setActiveSlug(slug);
  };
  const close = () => {
    if (didPush.current) {
      didPush.current = false;
      window.history.back();
    } else if (HASH.test(window.location.hash)) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
      setActiveSlug(null);
    } else {
      setActiveSlug(null);
    }
  };

  return (
    <>
      <a className="skip-link label" href="#main">
        Skip to content
      </a>
      <Ticker />
      <Nav />
      <main id="main">
        <Cover />
        <Receipt />
        <Manifest onOpen={open} />
        <Origin />
        <Crafts />
        <Rule />
        <Custody />
        <SignOff />
      </main>
      <footer className="label mx-auto max-w-[1440px] px-4 md:px-8 py-6 flex flex-wrap gap-x-6">
        <span>DROP {DROP.number}</span>
        <span>{PERSON.name}</span>
        <span>{PERSON.city}</span>
        <span>Set in Bricolage Grotesque &amp; Martian Mono</span>
      </footer>
      <LotDialog lots={LOTS} active={active} onRequestClose={close} onNavigate={navigate} />
    </>
  );
}
