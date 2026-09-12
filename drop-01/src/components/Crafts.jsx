import Q from './Q.jsx';
import Fill from './Fill.jsx';
import { CRAFTS } from '../data/crafts.js';

export default function Crafts() {
  return (
    <section id="other-shoes" aria-labelledby="other-shoes-heading" className="border-b-2 border-ink">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-14 md:py-28 grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <p><span className="runhead">04 / Other shoes</span></p>
          <h2 id="other-shoes-heading" className="head text-[clamp(32px,3.8vw,58px)]">
            The other shoes
          </h2>
        </div>

        {CRAFTS.map((c) => (
          <article key={c.id} className="col-span-12 md:col-span-6 grid grid-cols-1 sm:grid-cols-[minmax(120px,38%)_1fr] gap-5 border border-ink p-4 md:p-5">
            <div className="border border-ink shadow-hard-8 self-start max-w-[260px] sm:max-w-none">
              <img src={c.poster.src} width={c.poster.w} height={c.poster.h} alt={c.poster.alt} loading="lazy" className="block w-full h-auto" />
            </div>
            <div className="flex flex-col gap-3 min-w-0">
              <h3 className="head-sm text-[clamp(24px,2.4vw,34px)]">{c.title}</h3>
              <dl className="text-sm">
                <div className="grid grid-cols-[8ch_1fr] gap-2 py-1.5 border-b border-dotted border-rule">
                  <dt className="label mono-cond">What</dt>
                  <dd>{c.what}</dd>
                </div>
                <div className="grid grid-cols-[8ch_1fr] gap-2 py-1.5 border-b border-dotted border-rule">
                  <dt className="label mono-cond">Where</dt>
                  <dd>{c.where}</dd>
                </div>
                <div className="grid grid-cols-[8ch_1fr] gap-2 py-1.5 border-b border-dotted border-rule">
                  <dt className="label mono-cond">Runtime</dt>
                  <dd><Fill id={c.runtimeFill} /></dd>
                </div>
              </dl>
              <a href={c.href} target="_blank" rel="noopener noreferrer" className="press-4 bg-ink text-paper label font-bold px-5 py-3 self-start inline-flex items-center gap-3">
                <Q>PLAY</Q>
                <span className="sr-only">Play the {c.title.toLowerCase()} video on YouTube, opens in a new tab</span>
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M2 1l10 6-10 6z" fill="currentColor" /></svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
