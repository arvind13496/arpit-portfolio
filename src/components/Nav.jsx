import { useEffect, useState } from 'react';

// Contents of the issue. Numbers run as spread numbers in the margin; the
// active spread is marked by scroll position. Section ids match the sections
// rendered in App; this list is renumbered when the braid lands in T05.
const SPREADS = [
  { id: 'about', n: '01', label: 'about' },
  { id: 'origin', n: '02', label: 'the obsession' },
  { id: 'work', n: '03', label: 'spec work' },
  { id: 'beyond', n: '04', label: 'beyond copy' },
  { id: 'doodle', n: '05', label: 'doodle pad' },
  { id: 'contact', n: '06', label: "let's talk" },
];

export default function Nav() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const sections = SPREADS.map((s) => document.getElementById(s.id)).filter(Boolean);
    if (!sections.length || !('IntersectionObserver' in window)) return;
    // Scroll spy only marks the current spread; it never controls whether a
    // link renders, so a failed observer leaves the contents fully readable.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Contents">
      <span className="issue">Issue 01</span>
      <ul className="contents">
        {SPREADS.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} aria-current={active === s.id ? 'true' : undefined}>
              <span className="num" aria-hidden="true">
                {s.n}
              </span>
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
