// The torn-off bottom of the receipt. The brief already has this in its
// vocabulary — "hard cuts, torn edges via SVG mask" — and it has to be a
// stroked path rather than a gradient, because gradients are banned outright.
//
// A perfectly regular sawtooth reads as a printed rickrack trim, not a tear,
// and cutting the first/last tooth off mid-slope against the card's straight
// border looks like a rendering bug rather than paper. Fixed by seeding a
// small jitter into each peak and valley — the same deterministic hash walk
// Barcode.jsx uses, so the tear is stable across renders and rebuilds rather
// than reshuffling — and by forcing both ends to land on a full peak, flush
// with the border above it.
//
// non-scaling-stroke is what keeps it at 1px: the svg is stretched to whatever
// width the receipt is, and without it the zigzag would thin out or fatten up
// with the scale and break the one-pixel rule the rest of the page keeps.
export default function TornEdge({ teeth = 22, height = 12, seed = 'torn-edge' }) {
  let h = 0;
  for (let i = 0; i < seed.length; i += 1) h = (h * 31 + seed.charCodeAt(i)) & 0xffff;
  const next = () => { h = (h * 1103515245 + 12345) & 0x7fffffff; return (h >> 8) / 0x7fffff; };

  const peakY = () => 0.5 + next() * 2.5; // near the top: 0.5–3
  const valleyY = () => height - 0.5 - next() * 2.5; // near the bottom

  const points = [];
  for (let i = 0; i <= teeth; i += 1) {
    const x = (i / teeth) * 100;
    const onPeak = i % 2 === 0;
    // Force both ends onto a full peak so the tear meets the card's straight
    // border flush, instead of stopping mid-slope.
    const y = i === 0 || i === teeth ? 0.5 : onPeak ? peakY() : valleyY();
    points.push(`${x},${y}`);
  }

  return (
    <svg
      viewBox={`0 0 100 ${height}`}
      width="100%"
      height={height}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className="block"
    >
      <polyline
        points={points.join(' ')}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
