import { LOTS, REAL_WORK } from '../data/work.js';
import { THUMBS } from '../data/thumbs.js';

// Lots 02–08 fill complete rows on the 12-column grid: 6+6, 4+4+4, 6+6.
const SPANS = ['md:col-span-6', 'md:col-span-6', 'md:col-span-4', 'md:col-span-4', 'md:col-span-4', 'md:col-span-6', 'md:col-span-6'];

function Meta({ lot }) {
  return (
    <p className="label flex flex-wrap gap-x-4">
      <span className="mono-wide">Lot {lot.lot}</span>
      <span>{lot.format}</span>
      <span>{lot.client}</span>
    </p>
  );
}

// A card carries the teaser and nothing else: the whole brief, the line he
// wrote and every word of copy stay behind the button. The teaser is capped at
// 90 characters, so the cards sit at one height instead of ranging from one
// line to six. Clicking anywhere on the card opens the same dialog the button
// does — the button stays the real, focusable target.
export default function Manifest({ onOpen }) {
  const [lead, ...rest] = LOTS;
  return (
    <section id="manifest" aria-labelledby="manifest-heading" className="border-b-2 border-ink">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-14 md:py-28 grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 flex flex-wrap items-center gap-4">
          <h2 id="manifest-heading" className="head text-[clamp(32px,3.8vw,58px)]">
            The work
          </h2>
          <span className="label border border-ink px-2 py-1">Spec work</span>
        </div>

        <article onClick={() => onOpen(lead.slug)} className="col-span-12 border border-ink p-5 md:p-8 flex flex-col gap-5 cursor-pointer">
          <Meta lot={lead} />
          <p className="head text-[clamp(26px,3.4vw,44px)] max-w-[56ch]">{lead.teaser}</p>
          <button type="button" onClick={(e) => { e.stopPropagation(); onOpen(lead.slug); }} className="press-4 bg-ink text-paper label font-bold px-5 py-3 self-start">
            {lead.cta}
          </button>
        </article>

        {rest.map((lot, i) => (
          <article key={lot.slug} onClick={() => onOpen(lot.slug)} className={`col-span-12 ${SPANS[i]} border border-ink p-4 md:p-5 flex flex-col gap-4 cursor-pointer`}>
            <Meta lot={lot} />
            <div className="border border-ink bg-paper aspect-[3/2] overflow-hidden">
              <img src={THUMBS[lot.slug]} width="960" height="640" alt="" aria-hidden="true" loading="lazy" className="block w-full h-full object-cover object-top" />
            </div>
            <p className="read text-base flex-1">{lot.teaser}</p>
            <button type="button" onClick={(e) => { e.stopPropagation(); onOpen(lot.slug); }} className="press-4 bg-ink text-paper label font-bold px-5 py-3 self-start">
              {lot.cta}
            </button>
          </article>
        ))}

        <div className="col-span-12 flex flex-wrap items-center gap-4 mt-4">
          <span className="label border border-ink px-2 py-1">Real work</span>
        </div>

        <article className="col-span-12 border border-ink p-5 md:p-8 flex flex-col gap-4">
          <p className="label flex flex-wrap gap-x-4">
            <span className="mono-wide">Event</span>
            <span>{REAL_WORK.event}</span>
            <span>{REAL_WORK.partner}</span>
          </p>
          <h3 className="head text-[clamp(24px,2.6vw,36px)] max-w-[56ch]">{REAL_WORK.title}</h3>
          <p className="read max-w-[62ch]">{REAL_WORK.what}</p>
          <dl className="text-sm">
            <div className="grid grid-cols-[minmax(0,10ch)_1fr] gap-2 py-1.5 border-b border-dotted border-rule">
              <dt className="label mono-cond">Functions</dt>
              <dd>{REAL_WORK.functions}</dd>
            </div>
          </dl>
        </article>
      </div>
    </section>
  );
}
