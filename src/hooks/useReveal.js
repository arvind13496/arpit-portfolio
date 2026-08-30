import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Reveals every [data-reveal] child inside the returned ref with a
// scrapbook-style drop-in as it scrolls into view. No-ops for users
// who prefer reduced motion.
export function useReveal(deps = []) {
  const scope = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = scope.current
      ? scope.current.querySelectorAll('[data-reveal]')
      : [];
    if (!targets.length) return;

    // Rule 12: content reads even if the animation layer never runs. When
    // motion is off or the tab is hidden (rAF paused, so the reveal tween
    // would never complete), show everything at its resting state instead
    // of leaving it stranded at opacity 0.
    if (prefersReduced || document.hidden) {
      gsap.set(targets, { opacity: 1, y: 0, rotate: 0 });
      return;
    }

    const tweens = [];
    targets.forEach((el) => {
      gsap.set(el, { opacity: 0, y: 40, rotate: -1 });
      const st = gsap.to(el, {
        opacity: 1,
        y: 0,
        rotate: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
      tweens.push(st);
    });

    // Restore what this effect hid: kill each tween and its ScrollTrigger,
    // then clear the inline opacity/transform so every target falls back to
    // its CSS-visible default. Content must never be stranded hidden by a
    // torn-down (StrictMode / HMR / unmount) animation.
    return () => {
      tweens.forEach((t) => {
        if (t.scrollTrigger) t.scrollTrigger.kill();
        t.kill();
      });
      gsap.set(targets, { clearProps: 'opacity,transform' });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scope;
}
