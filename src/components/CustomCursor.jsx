import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Purely decorative pencil-dot cursor. Skipped on touch devices and
// for users who prefer reduced motion, since it adds no functional value there.
export default function CustomCursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReduced) return;

    const dot = dotRef.current;
    // Read the spot colour from the token rather than hardcoding a hex.
    const red = getComputedStyle(document.documentElement).getPropertyValue('--red').trim() || 'red';
    const move = (e) => {
      gsap.to(dot, { left: e.clientX, top: e.clientY, duration: 0.12, ease: 'power1.out' });
    };
    const grow = () =>
      gsap.to(dot, { width: 26, height: 26, backgroundColor: 'rgba(200,57,31,.5)', duration: 0.15 });
    const shrink = () => gsap.to(dot, { width: 10, height: 10, backgroundColor: red, duration: 0.15 });

    window.addEventListener('mousemove', move);
    const interactive = document.querySelectorAll('a, button, .card3d, .swatch');
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', grow);
        el.removeEventListener('mouseleave', shrink);
      });
      gsap.killTweensOf(dot);
    };
  }, []);

  return <div id="pencil" ref={dotRef} aria-hidden="true" />;
}
