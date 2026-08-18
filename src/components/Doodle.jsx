import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal.js';

const SWATCHES = [
  { color: '#242018', name: 'ink' },
  { color: '#c8391f', name: 'red' },
  { color: '#2f9c93', name: 'teal' },
  { color: '#8a6d1f', name: 'mustard' },
];

export default function Doodle() {
  const scope = useReveal();
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const drawingRef = useRef(false);
  const [color, setColor] = useState(SWATCHES[0].color);

  useEffect(() => {
    ctxRef.current = canvasRef.current.getContext('2d');
  }, []);

  function pos(e) {
    const canvas = canvasRef.current;
    const r = canvas.getBoundingClientRect();
    const scaleX = canvas.width / r.width;
    const scaleY = canvas.height / r.height;
    const point = e.touches ? e.touches[0] : e;
    return { x: (point.clientX - r.left) * scaleX, y: (point.clientY - r.top) * scaleY };
  }

  function start(e) {
    drawingRef.current = true;
    const p = pos(e);
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(p.x, p.y);
  }

  function move(e) {
    if (!drawingRef.current) return;
    const p = pos(e);
    const ctx = ctxRef.current;
    ctx.lineTo(p.x, p.y);
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.stroke();
    e.preventDefault();
  }

  function end() {
    drawingRef.current = false;
  }

  function clear() {
    const canvas = canvasRef.current;
    ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
  }

  return (
    <section id="doodle" aria-labelledby="doodle-heading" ref={scope}>
      <h2 id="doodle-heading">leave a doodle</h2>
      <p className="sub">because a journal isn't a journal without scribbles</p>
      <canvas
        ref={canvasRef}
        id="doodleCanvas"
        width="720"
        height="280"
        role="img"
        aria-label="Blank scribble pad. Use a mouse or touch to draw; this canvas is decorative and not required to use the site."
        onMouseDown={start}
        onMouseMove={move}
        onMouseUp={end}
        onMouseLeave={end}
        onTouchStart={start}
        onTouchMove={move}
        onTouchEnd={end}
      />
      <div className="doodle-tools">
        {SWATCHES.map((s) => (
          <button
            key={s.color}
            type="button"
            className="swatch"
            style={{ background: s.color }}
            aria-label={`Use ${s.name} ink`}
            aria-pressed={color === s.color}
            onClick={() => setColor(s.color)}
          />
        ))}
        <button type="button" onClick={clear}>
          clear page
        </button>
      </div>
    </section>
  );
}
