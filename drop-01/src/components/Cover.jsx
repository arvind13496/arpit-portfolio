import Q from './Q.jsx';
import { DROP, PERSON, PORTRAIT } from '../data/identity.js';

// Lot 00: the account holder, set exactly like a pair in the custody
// register. The colourway line carries the craft first, then the day job.
export default function Cover() {
  const { dayJob } = PERSON;
  return (
    <section id="cover" aria-labelledby="cover-heading" className="border-b-[3px] border-ink">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-8 md:py-12 grid grid-cols-12 gap-5 md:gap-6">
        <p className="label col-span-12 flex flex-wrap gap-x-6">
          <span>DROP {DROP.number}</span>
          <span>Issued {DROP.issued}</span>
          <span>Lot 00 / Cover</span>
        </p>

        <h1 id="cover-heading" className="display col-span-12 text-[clamp(64px,14vw,230px)]">
          {PERSON.first}
          <br />
          {PERSON.last}
        </h1>

        <div className="col-span-12 md:col-span-8 border-[3px] border-ink bg-paper shadow-hard-14 md:grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <p className="label flex justify-between px-4 py-2 border-b-[3px] border-ink md:col-span-2">
            <span className="mono-wide">Lot 00</span>
            <span>In custody</span>
          </p>
          <div className="bg-lime border-b-[3px] md:border-b-0 md:border-r-[3px] border-ink">
            <img src={PORTRAIT.src} width={PORTRAIT.w} height={PORTRAIT.h} alt={PORTRAIT.alt} className="block w-full h-full object-cover" fetchPriority="high" />
          </div>
          <div className="p-4 md:p-6 flex flex-col gap-2 md:justify-end">
            <p className="label">{PERSON.last}</p>
            <p className="head text-[clamp(30px,3.2vw,44px)]">{PERSON.first}</p>
            <p className="label mono-cond uppercase">{PERSON.craft.join(' / ')}</p>
            <p className="label mono-cond uppercase">
              <span className="bg-blue text-paper px-1.5 py-0.5">{dayJob.role} / {dayJob.unit} / {dayJob.org}</span>
            </p>
            <p className="label flex flex-wrap justify-between gap-x-4 pt-3 mt-1 border-t-2 border-ink">
              <span>Size {PERSON.size}</span>
              <span>{PERSON.city}</span>
              <span>{PERSON.school}</span>
            </p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 flex flex-col justify-between gap-8">
          <p className="read text-xl md:text-2xl max-w-[30ch]">
            {PERSON.craft[0]} after hours; product manager on the {dayJob.unit} desk at {dayJob.org} by day. The manifest below is the copy. The statement is the rest.
          </p>
          <a href="#statement" className="label flex items-center gap-3 self-start md:self-end">
            <Q>SCROLL</Q>
            <span className="sr-only">Scroll to the statement</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3v18m0 0l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
