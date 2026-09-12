import Fill from './Fill.jsx';
import { DROP, PERSON } from '../data/identity.js';

// Career history as a statement of account, printed on an empty till: the
// four supplied facts print as lines, the four unsupplied ones print as
// tokens, and the total counts them honestly.
function Line({ k, children, pending }) {
  return (
    <div className={`flex justify-between gap-x-4 gap-y-1 py-1.5 border-b border-dotted border-ink ${pending ? 'flex-wrap items-baseline' : ''}`}>
      <dt className="label mono-cond shrink-0">{k}</dt>
      <dd className="text-right uppercase text-sm ml-auto">{children}</dd>
    </div>
  );
}

export default function Receipt() {
  const { dayJob } = PERSON;
  return (
    <section id="statement" aria-labelledby="statement-heading" className="border-b-4 border-ink">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-14 md:py-28 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
          <p><span className="runhead">Lot 01 / Statement</span></p>
          <h2 id="statement-heading" className="head text-[clamp(32px,3.8vw,58px)]">
            Statement of account
          </h2>
          <p className="read max-w-[58ch]">
            Every line on this statement was supplied. Nothing was inferred, estimated or padded to look complete. The pending entries are pending because the account holder has not written them yet.
          </p>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <div className="max-w-md bg-paper border-4 border-ink shadow-hard-8 p-5 md:p-6">
            <div className="bg-blue text-paper -m-5 md:-m-6 mb-5 md:mb-6 p-4 border-b-4 border-ink">
              <p className="label">Statement of account</p>
              <p className="head text-2xl">A. {PERSON.last}</p>
              <p className="label mt-1">Printed {DROP.issued}</p>
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
            <div className="mt-5 pt-4 border-t-4 border-dashed border-ink flex justify-between font-bold uppercase text-sm">
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
