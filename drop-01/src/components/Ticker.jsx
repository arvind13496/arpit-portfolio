import { DROP, PERSON } from '../data/identity.js';
import { LOTS } from '../data/work.js';
import { CUSTODY } from '../data/closet.js';

// Streams only what is real: the drop, the lots, the custody count.
const inCustody = CUSTODY.filter((p) => p.state === 'custody').length;
const disposed = CUSTODY.length - inCustody;

const ITEMS = [
  `DROP ${DROP.number}`,
  `ISSUED ${DROP.issued}`,
  PERSON.name.toUpperCase(),
  PERSON.city.toUpperCase(),
  'SELF-SET BRIEFS',
  ...LOTS.map((l) => `LOT ${l.lot} · ${l.client.toUpperCase()} · ${l.format.toUpperCase()}`),
  `CUSTODY ${String(inCustody).padStart(2, '0')} PAIRS`,
  `DISPOSED ${String(disposed).padStart(2, '0')}`,
];

function Run({ hidden }) {
  return (
    <ul className="flex gap-0" aria-hidden={hidden || undefined}>
      {ITEMS.map((t, i) => (
        <li key={i} className="label mono-cond whitespace-nowrap px-6 py-2 bg-ink border-r-2 border-lime">
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function Ticker() {
  return (
    <div className="ticker bg-ink text-lime overflow-hidden border-b-4 border-ink" aria-label="Drop manifest ticker">
      <div className="ticker-track">
        <Run />
        <Run hidden />
      </div>
    </div>
  );
}
