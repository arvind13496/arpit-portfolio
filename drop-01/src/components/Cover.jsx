import Q from './Q.jsx';
import { DROP, PERSON, PORTRAIT } from '../data/identity.js';

// Lot 00 is the cover: one crate, the account holder inside it, set like a
// pair in the register. The name appears once, here.
export default function Cover() {
  const { dayJob } = PERSON;
  return (
    <section id="cover" aria-labelledby="cover-heading">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-8 md:py-12">
        <div className="border border-ink bg-paper shadow-hard-14 md:grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <p className="label flex flex-wrap justify-between gap-x-6 px-4 py-2 border-b border-ink md:col-span-2">
            <span><span className="mono-wide">DROP {DROP.number}</span> · Issued {DROP.issued}</span>
            <span>Lot 00 · The account holder</span>
          </p>
          <div className="bg-lime border-b md:border-b-0 md:border-r border-ink">
            <img src={PORTRAIT.src} width={PORTRAIT.w} height={PORTRAIT.h} alt={PORTRAIT.alt} className="block w-full h-full object-cover" fetchPriority="high" />
          </div>
          <div className="p-5 md:p-8 flex flex-col gap-4 md:gap-5">
            <h1 id="cover-heading" className="display text-[clamp(56px,8.5vw,150px)]">
              {PERSON.first}
              <br />
              {PERSON.last}
            </h1>
            <p className="read text-lg md:text-xl max-w-[40ch]">
              {PERSON.craft[0]} after hours; product manager on the {dayJob.unit} desk at {dayJob.org} by day.
            </p>
            <div className="mt-auto pt-4 border-t border-ink flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
              <p className="label flex flex-wrap gap-x-6">
                <span>Size {PERSON.size}</span>
                <span>{PERSON.city}</span>
                <span>{PERSON.school}</span>
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
