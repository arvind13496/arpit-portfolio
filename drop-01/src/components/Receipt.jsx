import Fill from './Fill.jsx';
import { DROP, PERSON, PASSPORT, RESUME } from '../data/identity.js';

// Career history as a statement of account, printed on an empty till: the
// four supplied facts print as lines, the four unsupplied ones print as
// tokens, and the total counts them honestly.
function Line({ k, children, pending }) {
  return (
    <div className={`flex justify-between gap-x-4 gap-y-1 py-1.5 border-b border-dotted border-rule ${pending ? 'flex-wrap items-baseline' : ''}`}>
      <dt className="label mono-cond shrink-0">{k}</dt>
      <dd className="text-right uppercase text-sm ml-auto">{children}</dd>
    </div>
  );
}

export default function Receipt() {
  const { dayJob } = PERSON;
  return (
    <section id="statement" aria-labelledby="statement-heading" className="border-b-[3px] border-ink">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-14 md:py-28 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
          <p><span className="runhead">Lot 01 / Statement</span></p>
          <h2 id="statement-heading" className="head text-[clamp(32px,3.8vw,58px)]">
            Statement of account
          </h2>
          <div className="read max-w-[58ch] flex flex-col gap-4">
            <p>
              {PERSON.first} runs products on the {dayJob.unit} desk at {dayJob.org}. After hours he writes — the eight briefs on the manifest, a foley reel, a studio session — and keeps seven pairs in rotation, all of them further down the page. {PERSON.school} alumnus, based in {PERSON.city}.
            </p>
            <p>
              The statement holds the headline facts. Dates and milestones land with the résumé; until then they print as pending rather than as guesses.
            </p>
          </div>
          {RESUME ? (
            <a href={RESUME.href} download className="press-4 bg-ink text-paper label font-bold px-5 py-3 self-start inline-flex items-center gap-3">
              Download the résumé
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v13m0 0l-5-5m5 5l5-5M4 21h16" stroke="currentColor" strokeWidth="3" strokeLinecap="square" /></svg>
              <span className="sr-only">, {RESUME.label}</span>
            </a>
          ) : (
            <p className="self-start"><span className="fill">[ RÉSUMÉ PENDING ]</span></p>
          )}
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <div className="max-w-md bg-paper border-[3px] border-ink shadow-hard-8 p-5 md:p-6">
            <div className="bg-blue text-paper -m-5 md:-m-6 mb-5 md:mb-6 p-4 border-b-[3px] border-ink">
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
                <div className="w-[84px] border-2 border-ink shrink-0">
                  <img src={PASSPORT.src} width={PASSPORT.w} height={PASSPORT.h} alt={`Passport photo of ${PERSON.name}`} loading="lazy" className="block w-full h-auto" />
                </div>
              ) : (
                <div className="w-[84px] aspect-[3/4] border-2 border-dashed border-ink shrink-0 flex items-center justify-center text-center p-1">
                  <span className="label mono-cond">Photo pending</span>
                </div>
              )}
            </div>
            <dl>
              <Line k="Employer">{dayJob.org}</Line>
              <Line k="Desk">{dayJob.unit}</Line>
              <Line k="Role">{dayJob.role}</Line>
              <Line k="Value dates" pending><Fill id="GIB_ROLE_DATES" /></Line>
              <Line k="Product surface" pending><Fill id="GIB_PRODUCT_SURFACE" /></Line>
              <Line k="Milestones" pending><Fill id="GIB_MILESTONES" /></Line>
              <Line k="Education">{PERSON.school}</Line>
              <Line k="Dates" pending><Fill id="SCMHRD_DATES" /></Line>
            </dl>
            <div className="mt-5 pt-4 border-t-[3px] border-dashed border-ink flex justify-between font-bold uppercase text-sm">
              <span>Verified entries</span>
              <span className="mono-wide">04</span>
            </div>
            <div className="flex justify-between font-bold uppercase text-sm">
              <span>Pending</span>
              <span className="mono-wide">04</span>
            </div>
            <p className="label mt-4 mono-cond">No amounts fabricated · Keep for your records</p>
          </div>
        </div>
      </div>
    </section>
  );
}
