import { DROP, PERSON, PASSPORT, RESUME, STATEMENT, OFF_THE_BOOKS } from '../data/identity.js';

// Career history as a statement of account: the headline facts from the
// résumé print as lines, and the total counts them.
function Line({ k, children }) {
  return (
    <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 py-1.5 border-b border-dotted border-rule items-baseline">
      <dt className="label mono-cond shrink-0">{k}</dt>
      <dd className="text-right uppercase text-sm ml-auto max-w-full md:max-w-[32ch]">{children}</dd>
    </div>
  );
}

export default function Receipt() {
  return (
    <section id="statement" aria-labelledby="statement-heading" className="border-b-2 border-ink">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-14 md:py-28 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
          <h2 id="statement-heading" className="head text-[clamp(32px,3.8vw,58px)]">
            Statement of account
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
          <div className="max-w-md bg-paper border border-ink shadow-hard-8 p-5 md:p-6">
            <div className="bg-blue text-paper -m-5 md:-m-6 mb-5 md:mb-6 p-4 border-b border-ink">
              <p className="label">Statement of account</p>
              <p className="head text-2xl">A. {PERSON.last}</p>
              <p className="label mt-1">Printed {DROP.issued}</p>
            </div>
            <div className="flex items-start justify-between gap-4 mb-3">
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
            <dl className="mb-1">
              {OFF_THE_BOOKS.map(([k, v]) => (
                <Line key={k} k={k}>{v}</Line>
              ))}
            </dl>
            
          </div>
        </div>
      </div>
    </section>
  );
}
