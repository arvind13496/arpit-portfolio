import Q from './Q.jsx';
import { DROP, PERSON } from '../data/identity.js';

export default function Cover() {
  const { dayJob } = PERSON;
  return (
    <section id="cover" aria-labelledby="cover-heading" className="border-b-4 border-ink">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-8 md:py-12 grid grid-cols-12 gap-4 md:gap-6">
        <p className="label col-span-12 flex flex-wrap gap-x-6">
          <span>DROP {DROP.number}</span>
          <span>ISSUED {DROP.issued}</span>
          <span>LOT 00 / COVER</span>
        </p>

        <h1 id="cover-heading" className="display col-span-12 text-[clamp(72px,17vw,280px)]">
          {PERSON.first}
          <br />
          {PERSON.last}
        </h1>

        <div className="col-span-12 md:col-span-6 bg-blue text-paper border-4 border-ink p-5 md:p-8 shadow-hard-14 flex flex-col gap-4">
          <p className="label flex justify-between">
            <span>Day</span>
            <span>Institutional</span>
          </p>
          <p className="head text-[clamp(26px,3.2vw,46px)]">
            {dayJob.role}
            <br />
            {dayJob.unit}
          </p>
          <p className="mono-wide font-bold uppercase">{dayJob.org}</p>
        </div>

        <div className="col-span-12 md:col-span-6 bg-lime text-ink border-4 border-ink p-5 md:p-8 shadow-hard-14 flex flex-col gap-4">
          <p className="label flex justify-between">
            <span>Craft</span>
            <span>After hours</span>
          </p>
          <ul className="head text-[clamp(26px,3.2vw,46px)]">
            {PERSON.craft.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <p className="mono-wide font-bold uppercase">Size {PERSON.size}</p>
        </div>

        <p className="read col-span-12 md:col-span-8 text-xl md:text-2xl mt-4">
          {PERSON.school} alumnus. Based in {PERSON.city}. Both columns are current.
        </p>

        <a href="#statement" className="col-span-12 md:col-span-4 md:justify-self-end self-end label flex items-center gap-3 mt-4">
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
