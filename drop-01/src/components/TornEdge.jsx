// The torn-off bottom of the receipt. The brief already has this in its
// vocabulary — "hard cuts, torn edges via SVG mask" — and it has to be a
// stroked path rather than a gradient, because gradients are banned outright.
//
// Two things were wrong with the first cut of this, both measurable rather
// than matters of taste:
//
// 1. Every tooth was exactly (i / teeth) * 100 wide, so the only variation in
//    the whole edge was ±2.5px of depth on a 12px strip. That reads as printed
//    rickrack trim. Tooth *width* is what the eye reads as a tear, so the walk
//    now takes a jittered step and the widths are normalised to fill the
//    hundred units — a run of 1.0 to 1.9 relative, nearly two to one.
//
// 2. The strip rendered 458px wide inside a 460px card, because it only
//    negated the card's padding, not its 1px side borders. The two side rules
//    therefore ran the full 12px past the tear and met it at a right angle:
//    a notch in each bottom corner, which is exactly what made the bottom
//    read as cropped. It now sits outside the bordered box at the card's full
//    width, and both ends are pinned to y=0 so the tear starts and finishes
//    precisely where those side rules stop. overflow visible is what lets the
//    outer half of the end strokes render instead of being clipped at the
//    viewBox edge, so the join is solid.
//
// The jitter is the same deterministic hash walk Barcode.jsx uses, so the tear
// is stable across renders and rebuilds rather than reshuffling on every load.
//
// non-scaling-stroke is what keeps it at 1px: the svg is stretched to whatever
// width the receipt is, and without it the zigzag would thin out or fatten up
// with the scale and break the one-pixel rule the rest of the page keeps.
// `teeth` has to stay even. Both ends are pinned to y=0, and the parity of
// the last interior point decides what the tear does as it reaches the
// corner: odd puts a peak there, which closes the edge with a flat ramp into
// the side rule; even puts a valley there, so the tear rises into the corner
// the way the left end already falls out of it.
export default function TornEdge({ teeth = 30, height = 14, seed = 'torn-edge' }) {
  let h = 0;
  for (let i = 0; i < seed.length; i += 1) h = (h * 31 + seed.charCodeAt(i)) & 0xffff;
  const next = () => { h = (h * 1103515245 + 12345) & 0x7fffffff; return (h >> 8) / 0x7fffff; };

  // Widths first, then normalised — otherwise the accumulated jitter decides
  // where the edge ends, and it has to end at exactly 100.
  const widths = Array.from({ length: teeth }, () => 1 + next() * 0.9);
  const span = widths.reduce((a, b) => a + b, 0);

  // The viewBox is 100 wide and `height` tall against a strip that renders
  // ~460 by `height`, so with preserveAspectRatio none the x jitter is
  // amplified about 4.6x and the y jitter is not. Depth therefore has to be
  // spent generously to register at all: peaks in the top fifth, valleys in
  // the bottom third.
  const points = [];
  let x = 0;
  for (let i = 0; i <= teeth; i += 1) {
    let y;
    if (i === 0 || i === teeth) {
      y = 0; // flush with the side rules above
    } else if (i % 2 === 0) {
      y = next() * 3;
    } else {
      y = height - next() * 4.5;
    }
    points.push(`${((x / span) * 100).toFixed(2)},${y.toFixed(2)}`);
    x += widths[i] ?? 0;
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
      style={{ overflow: 'visible' }}
    >
      <polyline
        points={points.join(' ')}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="miter"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
