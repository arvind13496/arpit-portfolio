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

    if (prefersReduced) {
      gsap.set(targets, { opacity: 1, y: 0, rotate: 0 });
      return;
    }

    const triggers = [];
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
      triggers.push(st);
    });

    return () => {
      triggers.forEach((t) => t.scrollTrigger && t.scrollTrigger.kill());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scope;
}
