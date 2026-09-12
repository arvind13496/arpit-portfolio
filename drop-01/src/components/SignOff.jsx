import Q from './Q.jsx';
import { DROP, PERSON } from '../data/identity.js';

export default function SignOff() {
  const subject = `DROP ${DROP.number} — Let’s talk`;
  const mailto = `mailto:${PERSON.email}?subject=${encodeURIComponent(subject)}`;

  const Row = ({ k, children }) => (
    <div className="grid grid-cols-[10ch_minmax(0,1fr)] gap-4 py-3 border-b-[3px] border-ink items-baseline">
      <dt className="label">{k}</dt>
      <dd className="font-bold wrap-anywhere">{children}</dd>
    </div>
  );

  return (
    <section id="sign-off" aria-labelledby="sign-off-heading" className="border-b-[3px] border-ink">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-14 md:py-28 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
          <p><span className="runhead">Lot 07 / Sign off</span></p>
          <h2 id="sign-off-heading" className="head text-[clamp(34px,4.8vw,74px)]">
            So if you’re interested in my work, <span className="text-blue">or just wanna talk sneakers…</span>
          </h2>
          <p className="label">
            Subject line, prefilled: <span className="normal-case font-bold">{subject}</span>
          </p>
          <a href={mailto} className="press bg-lime text-ink border-[3px] border-ink head text-2xl md:text-3xl px-6 py-4 self-start inline-flex items-center gap-4">
            <Q>SEND</Q>
            <span className="sr-only">Send an email to Arpit</span>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 12h18m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="square" />
            </svg>
          </a>
        </div>

        <dl className="col-span-12 md:col-span-5 border-t-[3px] border-ink self-start">
          <Row k="Mail"><a href={`mailto:${PERSON.email}`} className="underline underline-offset-4">{PERSON.email}</a></Row>
          <Row k="Instagram"><a href={PERSON.instagram.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{PERSON.instagram.handle}</a></Row>
          <Row k="LinkedIn"><a href={PERSON.linkedin.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{PERSON.linkedin.handle}</a></Row>
          <Row k="Location">{PERSON.city}</Row>
        </dl>
      </div>
    </section>
  );
}
