import Q from './Q.jsx';
import { DROP, PERSON } from '../data/identity.js';

export default function Cover() {
  const { dayJob } = PERSON;
  const [craftLead, ...craftRest] = PERSON.craft;
  return (
    <section id="cover" aria-labelledby="cover-heading" className="border-b-[3px] border-ink">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-8 md:py-12 grid grid-cols-12 gap-4 md:gap-6">
        <p className="label col-span-12 flex flex-wrap gap-x-6">
          <span>DROP {DROP.number}</span>
          <span>Issued {DROP.issued}</span>
          <span>Lot 00 / Cover</span>
        </p>

        <h1 id="cover-heading" className="display col-span-12 text-[clamp(72px,17vw,280px)]">
          {PERSON.first}
          <br />
          {PERSON.last}
        </h1>

        {/* One column, two rows: the craft first, the day job second. */}
        <div className="col-span-12 md:col-span-8 border-[3px] border-ink shadow-hard-14">
          <div className="bg-lime text-ink p-5 md:p-7 flex flex-col gap-3 border-b-[3px] border-ink">
            <p className="label flex justify-between">
              <span>Craft</span>
              <span>After hours</span>
            </p>
            <p className="head text-[clamp(34px,4.6vw,66px)]">{craftLead}</p>
            <p className="head-sm text-[clamp(18px,1.8vw,24px)]">{craftRest.join(' · ')}</p>
          </div>
          <div className="bg-blue text-paper p-5 md:p-7 flex flex-col gap-2">
            <p className="label flex justify-between">
              <span>Day</span>
              <span>Institutional</span>
            </p>
            <p className="head-sm text-[clamp(18px,1.9vw,26px)]">
              {dayJob.role}, {dayJob.unit}
            </p>
            <p className="mono-wide font-bold uppercase text-sm">{dayJob.org}</p>
          </div>
        </div>

        <p className="read col-span-12 md:col-span-8 text-xl md:text-2xl mt-2">
          {PERSON.school} alumnus. Based in {PERSON.city}. Size {PERSON.size}.
        </p>

        <a href="#statement" className="col-span-12 md:col-span-4 md:justify-self-end self-end label flex items-center gap-3 mt-2">
          <Q>SCROLL</Q>
          <span className="sr-only">Scroll to the statement</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 3v18m0 0l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
          </svg>
        </a>
      </div>
    </section>
  );
}
