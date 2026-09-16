import Q from './Q.jsx';
import Barcode from './Barcode.jsx';
import { DROP, PERSON, PORTRAIT } from '../data/identity.js';

// Lot 00 set as a shoebox end label. The page already treated the cover as a
// crate holding him "like a pair in the register"; this says it out loud. Flat
// print, not a rendered 3D box — the whole site speaks in hard-edged press,
// and a photoreal box would be the one object pretending to be a photograph.
//
// Every value on the label traces to real data. The style code is built from
// the drop number and its issue year, the way the lot numbers are: a device
// the page already uses, not an invented fact. The colourway is his four
// crafts, which is the joke worth keeping — a colourway is a list, and that's
// his.
export default function Cover() {
  const { dayJob } = PERSON;
  const year = DROP.issued.slice(0, 4);
  const style = `AL-${DROP.number}-${year}`;
  // A barcode's human-readable line, every digit of it real: drop number,
  // issue date, size.
  const barNumber = `${DROP.number} ${DROP.issued.replace(/-/g, ' ')} ${PERSON.size.replace(/\D/g, '')}`;

  const SPEC = [
    ['Style', style],
    ['Colourway', PERSON.craft.join(' / ')],
    ['Size', PERSON.size],
    ['Made in', PERSON.city],
  ];

  return (
    <section id="cover" aria-labelledby="cover-heading">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-8 md:py-12">
        <div className="border border-ink bg-paper shadow-hard-14 md:grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* The lid band: what a box says before you open it. */}
          <div className="md:col-span-2 border-b border-ink flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2">
            <p className="label flex flex-wrap items-center gap-x-4">
              <span className="mono-wide font-bold">DROP {DROP.number}</span>
              <span>Issued {DROP.issued}</span>
            </p>
            <p className="label flex flex-wrap items-center gap-x-3">
              <span className="bg-lime text-ink px-2 py-0.5 font-bold">New release</span>
              <span>Lot 00 · The account holder</span>
            </p>
          </div>

          {/* The product shot, and the one photograph on the page in full colour. */}
          <div className="bg-lime border-b md:border-b-0 md:border-r border-ink">
            <img src={PORTRAIT.src} width={PORTRAIT.w} height={PORTRAIT.h} alt={PORTRAIT.alt} className="block w-full h-full object-cover" fetchPriority="high" />
          </div>

          <div className="p-5 md:p-8 flex flex-col gap-6">
            {/* The portrait sets this crate's height, so the name rides the
                middle of whatever is left rather than stacking at the top. */}
            <div className="flex flex-col gap-3 md:my-auto">
              <p className="label mono-cond">Model</p>
              <h1 id="cover-heading" className="display text-[clamp(56px,8.5vw,150px)]">
                {PERSON.first}
                <br />
                {PERSON.last}
              </h1>
              <p className="read text-lg md:text-xl max-w-[40ch]">
                {PERSON.craft[0]} after hours; product manager on the {dayJob.unit} desk at {dayJob.org} by day.
              </p>
            </div>

            <dl className="border-t border-ink pt-4 text-sm">
              {SPEC.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[minmax(0,11ch)_minmax(0,1fr)] gap-x-4 py-1.5 border-b border-dotted border-rule items-baseline">
                  <dt className="label mono-cond">{k}</dt>
                  <dd className="uppercase">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
              <div className="w-full max-w-[260px]">
                <Barcode seed={style} height={40} />
                <p className="label mono-wide mt-1">{barNumber}</p>
              </div>
              <a href="#statement" className="label flex items-center gap-3">
                <Q>SCROLL</Q>
                <span className="sr-only">Scroll to the statement</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3v18m0 0l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
