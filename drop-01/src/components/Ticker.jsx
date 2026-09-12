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
        <li key={i} className="label mono-cond whitespace-nowrap px-6 py-2 border-r border-ink">
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function Ticker() {
  return (
    <div className="ticker bg-paper text-ink overflow-x-auto border-b-[3px] border-ink" aria-label="Drop manifest">
      <div className="ticker-track">
        <Run />
      </div>
    </div>
  );
}
