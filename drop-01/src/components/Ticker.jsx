import { DROP, PERSON } from '../data/identity.js';
import { LOTS } from '../data/work.js';
import { CUSTODY } from '../data/closet.js';

// Only what is real: the drop, who he is, the lots, the custody count.

const ITEMS = [
  `DROP ${DROP.number}`,
  PERSON.craft.map((c) => c.toUpperCase()).join(' · '),
  PERSON.name.toUpperCase(),
  PERSON.city.toUpperCase(),
  `ISSUED ${DROP.issued}`,
  'COHORT BRIEFS · MAD AD WOMAN',
  ...LOTS.map((l) => `LOT ${l.lot} · ${l.client.toUpperCase()} · ${l.format.toUpperCase()}`),
  `CUSTODY ${String(CUSTODY.length).padStart(2, '0')} PAIRS`,
];

function Run({ hidden }) {
  return (
    <ul className="flex gap-0" aria-hidden={hidden || undefined}>
      {ITEMS.map((t, i) => (
        <li key={i} className="label mono-cond text-[11px] whitespace-nowrap px-6 py-1.5 border-r border-ink">
          {t}
        </li>
      ))}
    </ul>
  );
}

// The track animates by translating -50%, which only lands on a clean seam
// if the content is doubled: one copy scrolls fully off as the next copy
// arrives at the start, so the loop has no visible jump. The second copy is
// aria-hidden so a screen reader hears the manifest once, not twice.
export default function Ticker() {
  return (
    <div className="ticker bg-paper text-ink overflow-x-auto border-b-2 border-ink" aria-label="Drop manifest">
      <div className="ticker-track">
        <Run />
        <Run hidden />
      </div>
    </div>
  );
}
