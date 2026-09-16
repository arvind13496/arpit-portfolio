import Barcode from './Barcode.jsx';
import TornEdge from './TornEdge.jsx';
import { DROP, PERSON, PASSPORT, RESUME, STATEMENT, OFF_THE_BOOKS } from '../data/identity.js';

// Career history as an actual till receipt, not just a document called one.
// The fold was already "Statement of account" set in a mono face with dotted
// leaders; this takes it the rest of the way — narrow column, centred header,
// a total, and a torn-off bottom.
//
// The blue header bar goes, and a lime PAID stamp takes its place. A receipt
// isn't printed in two colours, and it leaves the accents divided more
// cleanly: lime belongs to the drop and the product, blue to the register and
// the rule.
//
// No hard shadow here either. A receipt is thin paper, and a rectangular
// shadow would sit squarely behind a torn edge and give the game away.

// Right-aligning a value works on a receipt when the value is a number. These
// are four-line lists, and ranging them right left every line with a different
// left edge — the section read as broken type. Same two-column row as the
// register elsewhere on the page, so every value starts on one axis.
function Line({ k, children }) {
  return (
    <div className="grid grid-cols-[minmax(0,10ch)_minmax(0,1fr)] gap-x-4 gap-y-1 py-1.5 border-b border-dotted border-rule items-baseline">
      <dt className="label mono-cond">{k}</dt>
      <dd className="uppercase text-sm">{children}</dd>
    </div>
  );
}

export default function Receipt() {
  const barNumber = `${DROP.number} ${DROP.issued.replace(/-/g, ' ')}`;

  return (
    <section id="statement" aria-labelledby="statement-heading" className="border-b-2 border-ink">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-14 md:py-28 grid grid-cols-12 gap-6">
        {/* The receipt beside this column is twice its height, so the intro
            rides the middle of the row instead of stacking at the top above
            400px of bare paper. */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-4 md:justify-center">
          <h2 id="statement-heading" className="head text-[clamp(32px,3.8vw,58px)]">
            My statement of account
          </h2>
          <div className="read max-w-[58ch] flex flex-col gap-4">
            <p>
              {PERSON.first} is, summarised in one word, an enthusiast. The things he's enthusiastic about: sneakers, music, sound, copywriting, marketing and interesting products. Scroll down and you'll find traces of his work in each of them.
            </p>
            <p>
              The statement holds the headline facts, then the ones a résumé leaves out. The résumé itself is one page.
            </p>
          </div>
          {RESUME ? (
            <a href={RESUME.href} target="_blank" rel="noopener noreferrer" className="press-4 bg-ink text-paper label font-bold px-5 py-3 self-start inline-flex items-center gap-3">
              Open the résumé
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19L19 5m0 0H8m11 0v11" stroke="currentColor" strokeWidth="3" strokeLinecap="square" /></svg>
              <span className="sr-only">, {RESUME.label}, opens in a new tab</span>
            </a>
          ) : (
            <p className="self-start"><span className="fill">[ RÉSUMÉ PENDING ]</span></p>
          )}
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7">
          {/* A little wider than the 390px a real till roll would be — the
              long comma lists (Education, Wins, Skills) were wrapping to five
              and six short lines at that width, which is what actually made
              the fold feel unmanaged, not the receipt's narrowness itself. */}
          <div className="max-w-[460px]">
            {/* The tear is a sibling of the bordered box, not a child of it.
                Inside, the widest it could ever reach was the content box —
                458px of a 460px card — which left the two 1px side rules
                running past the tear and meeting it at a right angle in each
                bottom corner. Out here it spans the card's full width and its
                ends land exactly where those rules stop. */}
            <div className="bg-paper border border-ink border-b-0 px-5 md:px-6 pt-5 md:pt-6 pb-5 md:pb-6">
              {/* A receipt header is the one place on this page where centred
                  type is obviously deliberate rather than timid. */}
              <div className="text-center flex flex-col gap-1 pb-4 border-b border-dashed border-ink">
                <p className="head text-xl">DROP {DROP.number}</p>
                <p className="label">Statement of account</p>
                <p className="label">{PERSON.craft.length} crafts · one account</p>
              </div>

              <p className="label flex justify-between gap-4 py-2 border-b border-dashed border-ink">
                <span>Printed {DROP.issued}</span>
                <span className="mono-wide">Lot 00</span>
              </p>

              <div className="flex items-start justify-between gap-4 py-4">
                <div className="flex flex-col gap-1">
                  <span className="label">Account holder</span>
                  <span className="head-sm text-xl">{PERSON.name}</span>
                  <span className="label">{PERSON.city}</span>
                </div>
                {PASSPORT ? (
                  <div className="w-[84px] border border-ink shrink-0">
                    <img src={PASSPORT.src} width={PASSPORT.w} height={PASSPORT.h} alt={`Passport photo of ${PERSON.name}`} loading="lazy" className="block w-full h-auto" />
                  </div>
                ) : (
                  <div className="w-[84px] aspect-[3/4] border border-dashed border-ink shrink-0 flex items-center justify-center text-center p-1">
                    <span className="label mono-cond">Photo pending</span>
                  </div>
                )}
              </div>

              <dl>
                {STATEMENT.map(([k, v]) => (
                  <Line key={k} k={k}>{v}</Line>
                ))}
              </dl>
              <p className="label mt-5 pt-3 border-t border-dashed border-ink">Off the books</p>
              <dl>
                {OFF_THE_BOOKS.map(([k, v]) => (
                  <Line key={k} k={k}>{v}</Line>
                ))}
              </dl>

              {/* The total, under the double rule a receipt puts there. Two 1px
                  lines, not one 2px line: 2px belongs to the page's own
                  divisions, never to an object sitting on it. */}
              <div className="mt-5">
                <div className="border-t border-ink" />
                <div className="border-t border-ink mt-[2px]" />
                <p className="flex items-baseline justify-between gap-4 pt-3">
                  <span className="label mono-cond">Total</span>
                  <span className="head-sm text-lg uppercase">1 enthusiast</span>
                </p>
              </div>

              <div className="flex items-end justify-between gap-4 mt-5">
                <span className="stamp label font-bold bg-lime text-ink">Paid</span>
                <span className="label">Keep this receipt</span>
              </div>

              <div className="mt-5">
                <Barcode seed={`${PERSON.name} ${DROP.issued}`} height={34} />
                <p className="label mono-wide mt-1 text-center">{barNumber}</p>
              </div>
            </div>

            <TornEdge />
          </div>
        </div>
      </div>
    </section>
  );
}
