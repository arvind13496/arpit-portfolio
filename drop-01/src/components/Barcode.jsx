// The one mark that says "box label" on the cover and "till receipt" on the
// statement, in a single glyph, and it costs no image file: the bars are drawn
// from a seed string, so the same seed always prints the same code. Decorative
// — whatever it stands for is set as readable text beside it.
//
// currentColor throughout, so it inherits ink or paper from whatever it sits
// on and never introduces a colour of its own.
export default function Barcode({ seed, height = 40, className = '' }) {
  // A linear congruential walk seeded by the string: stable per seed, and
  // irregular enough to read as a real code rather than a comb.
  let h = 0;
  for (let i = 0; i < seed.length; i += 1) h = (h * 31 + seed.charCodeAt(i)) & 0xffff;
  const bars = [];
  let x = 0;
  for (let i = 0; i < 58; i += 1) {
    h = (h * 1103515245 + 12345) & 0x7fffffff;
    const w = 1 + ((h >> 8) % 3);
    bars.push({ x, w });
    x += w + 1 + ((h >> 17) % 2);
  }
  return (
    <svg
      viewBox={`0 0 ${x} 20`}
      width="100%"
      height={height}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={`block ${className}`}
    >
      {bars.map((b, i) => (
        <rect key={i} x={b.x} y="0" width={b.w} height="20" fill="currentColor" />
      ))}
    </svg>
  );
}
