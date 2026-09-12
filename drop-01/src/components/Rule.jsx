import { RULE, PERSON } from '../data/identity.js';

// The thesis, given the whole spread on the one fill that takes white type.
export default function Rule() {
  return (
    <section id="rule" aria-labelledby="rule-heading" className="bg-blue text-paper border-b-4 border-ink">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-16 md:py-32 grid grid-cols-12 gap-6">
        <p className="col-span-12"><span className="runhead">Lot 05 / The rule</span></p>
        <h2 id="rule-heading" className="sr-only">The rule</h2>
        <blockquote className="col-span-12 md:col-span-11">
          <p className="display text-[clamp(34px,6.6vw,118px)]">{RULE.text}</p>
          <p className="mt-6 text-lg md:text-2xl">{RULE.aside}</p>
        </blockquote>
        <p className="col-span-12 mt-4">
          <span className="stamp display text-3xl md:text-5xl">{PERSON.size}</span>
        </p>
      </div>
    </section>
  );
}
