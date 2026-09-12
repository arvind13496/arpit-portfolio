import Fill from './Fill.jsx';
import { LOTS } from '../data/work.js';
import { THUMBS } from '../data/thumbs.js';

// Lots 02–08 fill complete rows on the 12-column grid: 6+6, 4+4+4, 6+6.
const SPANS = ['md:col-span-6', 'md:col-span-6', 'md:col-span-4', 'md:col-span-4', 'md:col-span-4', 'md:col-span-6', 'md:col-span-6'];

function LotLine({ lot, className }) {
  if (lot.line === null) {
    // No hero line exists yet: the slot is shown at label scale, not dressed
    // up as a headline he has not written.
    return (
      <p className="flex-1 py-3 text-base">
        <Fill id="MADADWOMAN_LINE" />
      </p>
    );
  }
  return <p className={className}>{lot.line}</p>;
}

function Meta({ lot }) {
  return (
    <p className="label flex flex-wrap gap-x-4">
      <span className="mono-wide">Lot {lot.lot}</span>
      <span>{lot.format}</span>
      <span>{lot.client}</span>
    </p>
  );
}

export default function Manifest({ onOpen }) {
  const [lead, ...rest] = LOTS;
  return (
    <section id="manifest" aria-labelledby="manifest-heading" className="border-b-4 border-ink">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-14 md:py-28 grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 flex flex-col md:flex-row md:items-end gap-4 md:gap-8">
          <div>
            <p><span className="runhead">Lot 02 / Manifest</span></p>
            <h2 id="manifest-heading" className="head text-[clamp(32px,3.8vw,58px)]">
              Manifest — 08 lots
            </h2>
          </div>
        </div>

        <p className="col-span-12 bg-pink text-ink border-4 border-ink p-5 md:p-7 head text-[clamp(20px,2.3vw,32px)]">
          Self-set briefs. No client on this manifest commissioned the work. He wrote the brief, then he answered it.
        </p>

        <article className="col-span-12 border-4 border-ink p-5 md:p-8 flex flex-col gap-6">
          <Meta lot={lead} />
          <LotLine lot={lead} className="display text-[clamp(44px,10vw,170px)]" />
          <div className="flex flex-wrap items-center gap-4">
            <button type="button" onClick={() => onOpen(lead.slug)} className="press-4 bg-ink text-paper label font-bold px-5 py-3">
              Open lot {lead.lot}
            </button>
            <span className="label">Brief: {lead.brief}</span>
          </div>
        </article>

        {rest.map((lot, i) => (
          <article key={lot.slug} className={`col-span-12 ${SPANS[i]} border-2 border-ink p-4 md:p-5 flex flex-col gap-4`}>
            <Meta lot={lot} />
            <div className="border-2 border-ink bg-paper aspect-[4/3] overflow-hidden">
              <img src={THUMBS[lot.slug]} width="400" height="300" alt="" aria-hidden="true" loading="lazy" className="block w-full h-full object-cover object-top" />
            </div>
            <LotLine lot={lot} className="head text-[clamp(22px,2.3vw,34px)] flex-1" />
            {lot.note && <p className="label">{lot.note}</p>}
            <button type="button" onClick={() => onOpen(lot.slug)} className="press-4 bg-ink text-paper label font-bold px-5 py-3 self-start">
              Open lot {lot.lot}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
