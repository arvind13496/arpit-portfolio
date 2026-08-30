import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import heroPhoto from '../assets/hero-photo.jpg';
import hammock from '../assets/hammock.jpg';

export default function Hero() {
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Rule 12: never gate visibility on an animation that may not run. If
    // motion is off or the tab is hidden (rAF paused, tween can't complete),
    // leave the heading at its CSS-visible default instead of hiding it.
    if (prefersReduced || !el || document.hidden) return;
    const tween = gsap.fromTo(
      el,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.2 }
    );
    // Restore what this effect hid: kill the tween and clear the inline
    // opacity/transform so the heading falls back to its CSS-visible state.
    // Without this, StrictMode's double-invoke can strand it at opacity 0.
    return () => {
      tween.kill();
      gsap.set(el, { clearProps: 'opacity,transform' });
    };
  }, []);

  return (
    <section id="hero" aria-label="Introduction">
      <div className="crease" aria-hidden="true" />
      <div className="tape red t2" aria-hidden="true" />
      <div className="hero-photo">
        <img
          src={heroPhoto}
          width="800"
          height="800"
          alt="Arpit lying back holding a green sneaker up to his face"
        />
      </div>
      <img className="hammock" src={hammock} width="900" height="312" alt="" aria-hidden="true" />
      <p className="kicker">ARPIT LAKHANI'S</p>
      <h1 className="big" ref={headingRef}>
        <span>port</span>
        <span>folio</span>
      </h1>
      <svg className="sneaker-doodle" viewBox="0 0 100 60" fill="none" aria-hidden="true">
        <path
          d="M5 45 C10 20 30 10 45 12 C55 13 55 22 65 22 C75 22 78 15 85 18 C93 21 95 32 95 40 C95 46 90 48 80 48 L15 48 C8 48 5 47 5 45 Z"
          style={{ fill: 'var(--red)', stroke: 'var(--ink)' }}
          strokeWidth="2"
        />
        <path
          d="M5 45 C25 40 60 40 95 40"
          style={{ stroke: 'var(--ink)' }}
          strokeWidth="2"
          fill="none"
        />
      </svg>
      <p className="scrolldown">
        keep scrolling
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 4v16m0 0l-6-6m6 6l6-6"
            style={{ stroke: 'var(--ink)' }}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </p>
    </section>
  );
}
