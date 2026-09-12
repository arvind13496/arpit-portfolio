import { useEffect, useState } from 'react';
import Q from './Q.jsx';
import { DROP } from '../data/identity.js';

export const CONTENTS = [
  ['cover', '00', 'Cover'],
  ['statement', '01', 'Statement'],
  ['manifest', '02', 'Manifest'],
  ['kyc', '03', 'KYC'],
  ['other-shoes', '04', 'Other shoes'],
  ['rule', '05', 'Rule'],
  ['custody', '06', 'Custody'],
  ['sign-off', '07', 'Sign off'],
];

// One row, 48px, at every width: the wordmark stays put and the contents strip
// scrolls sideways inside the bar rather than pushing the page wider.
export default function Nav() {
  const [current, setCurrent] = useState('cover');

  useEffect(() => {
    let raf = 0;
    const spy = () => {
      raf = 0;
      const line = window.innerHeight * 0.35;
      let best = CONTENTS[0][0];
      for (const [id] of CONTENTS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) best = id;
      }
      setCurrent(best);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(spy);
    };
    spy();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-40 bg-paper border-b-[3px] border-ink h-12" aria-label="Contents">
      <div className="mx-auto max-w-[1440px] h-full flex items-stretch">
        <a href="#cover" className="display text-2xl px-4 flex items-center border-r-[3px] border-ink shrink-0">
          DROP&nbsp;{DROP.number}
        </a>
        <span className="label hidden md:flex items-center px-4 border-r-[3px] border-ink shrink-0">
          <Q>CONTENTS</Q>
          <span className="sr-only">Contents</span>
        </span>
        <ul className="flex items-stretch overflow-x-auto whitespace-nowrap flex-1 min-w-0">
          {CONTENTS.map(([id, n, name]) => (
            <li key={id} className="shrink-0">
              <a
                href={`#${id}`}
                aria-current={current === id ? 'location' : undefined}
                className="label flex items-center h-full px-4 gap-2 aria-[current]:bg-ink aria-[current]:text-lime"
              >
                <span className="mono-wide">{n}</span>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
