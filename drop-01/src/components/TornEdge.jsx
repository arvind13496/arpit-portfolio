// The torn-off bottom of the receipt. The brief already has this in its
// vocabulary — "hard cuts, torn edges via SVG mask" — and it has to be a
// stroked path rather than a gradient, because gradients are banned outright.
//
// non-scaling-stroke is what keeps it at 1px: the svg is stretched to whatever
// width the receipt is, and without it the zigzag would thin out or fatten up
// with the scale and break the one-pixel rule the rest of the page keeps.
export default function TornEdge({ teeth = 26, height = 10 }) {
  const points = [];
  for (let i = 0; i <= teeth; i += 1) {
    points.push(`${(i / teeth) * 100},${i % 2 === 0 ? 1 : height - 1}`);
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
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
