import Q from './Q.jsx';
import Barcode from './Barcode.jsx';
import { DROP, PERSON, PORTRAIT } from '../data/identity.js';

// Lot 00 set as the label stuck on a shoebox's short end.
//
// Four studies went into this. Three of them tried to draw a box, and the
// reason they failed was measurable: a real two-piece shoebox front is 2.6:1
// to 3.2:1 with the lid taking 39–45% of the height, and what got built was
// 2:1 with a lid strip at 4% — a card with a stripe on it. The end label is
// the study that never had that problem, because a real end label genuinely is
// about 2.6:1. It is also the only one that keeps the promise the rest of this
// page keeps: flat print that never pretends to be a photograph of an object.
//
// So nothing here fakes depth. The cells are the cells a real box label has —
// model, size, product — and every value traces to data. The style code is
// built from the drop number and its issue year the way the lot numbers are,
// and the barcode's human-readable line is the drop number, the issue date and
// the size. The colourway is his four crafts, which is the joke worth keeping:
// a colourway is a list, and that is his.
export default function Cover() {
  const { dayJob } = PERSON;
  const year = DROP.issued.slice(0, 4);
  const style = `AL-${DROP.number}-${year}`;
  const barNumber = `${DROP.number} ${DROP.issued.replace(/-/g, ' ')} ${PERSON.size.replace(/\D/g, '')}`;

  return (
    <section id="cover" aria-labelledby="cover-heading">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-8 md:py-12">
        <div className="border border-ink bg-paper shadow-hard-8">
          {/* The brand band across the top of the label, printed as a solid
              black bar the way a box label's header is. min-h rather than
              padding so the depth is a stated measure, not a by-product of the
              line height — it wraps to two lines on a phone and grows. */}
          <p className="label flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 md:px-6 py-4 min-h-[76px] bg-ink text-paper border-b border-ink">
            <span className="flex flex-wrap items-center gap-x-4">
              <span className="mono-wide font-bold">DROP {DROP.number}</span>
              <span>Issued {DROP.issued}</span>
            </span>
            <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="bg-lime text-ink px-2 py-0.5 font-bold">New release</span>
              <span>Lot 00 · The account holder</span>
            </span>
          </p>

          {/* Model, size, product — the three cells a box label carries. They
              are columns on a label and stack on a phone. */}
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,18ch)_minmax(0,200px)]">
            <div className="p-5 md:p-8 border-b md:border-b-0 md:border-r border-ink">
              <p className="label mono-cond">Model</p>
              <h1 id="cover-heading" className="display text-[clamp(48px,7.2vw,112px)] mt-2 md:mt-3">
                {PERSON.first}
                <br />
                {PERSON.last}
              </h1>
              <p className="label mono-cond uppercase mt-4 md:mt-6 max-w-[48ch]">
                {PERSON.craft.join(' / ')}
              </p>
            </div>

            <div className="p-5 md:p-8 border-b md:border-b-0 md:border-r border-ink flex md:flex-col items-end md:items-stretch justify-between gap-4 md:gap-6">
              <div>
                <p className="label mono-cond">Size</p>
                <p className="display text-[clamp(38px,4.8vw,76px)] mt-2">{PERSON.size}</p>
              </div>
              <p className="label mono-cond md:mt-auto text-right md:text-left">
                Style
                <br />
                <span className="mono-wide">{style}</span>
              </p>
            </div>

            <div className="p-4 md:p-5">
              <div className="border border-ink bg-lime aspect-[4/3] md:aspect-auto md:h-full">
                <img src={PORTRAIT.src} width={PORTRAIT.w} height={PORTRAIT.h} alt={PORTRAIT.alt} className="block w-full h-full object-cover" fetchPriority="high" />
              </div>
            </div>
          </div>

          {/* The foot a box label puts its barcode and origin on. */}
          <div className="border-t border-ink grid grid-cols-1 md:grid-cols-[minmax(0,280px)_minmax(0,1fr)] gap-5 md:gap-8 px-4 md:px-6 py-4 md:py-5 md:items-end">
            <div>
              <Barcode seed={style} height={38} />
              <p className="label mono-wide mt-1">{barNumber}</p>
            </div>
            <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
              <p className="read text-base max-w-[58ch]">
                Made in {PERSON.city} · {PERSON.craft[0]} after hours; product manager on the {dayJob.unit} desk at {dayJob.org} by day.
              </p>
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
