import { CUSTODY } from '../data/closet.js';

// Seven pairs, one register. Image, brand, model, colourway — set like a
// shoebox label and nothing else.
const pad = (n) => String(n).padStart(2, '0');

export default function Custody() {
  return (
    <section id="custody" aria-labelledby="custody-heading" className="border-b-[3px] border-ink">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-14 md:py-28 grid grid-cols-12 gap-6">
        <div className="col-span-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p><span className="runhead">Lot 06 / Custody</span></p>
            <h2 id="custody-heading" className="head text-[clamp(32px,3.8vw,58px)]">
              Custody register
            </h2>
          </div>
          <p className="label"><span className="mono-wide font-bold">{pad(CUSTODY.length)}</span> pairs in rotation</p>
        </div>

        <ol className="col-span-12 grid grid-cols-12 gap-4 md:gap-6">
          {CUSTODY.map((p) => (
            <li key={p.id} className="col-span-12 sm:col-span-6 lg:col-span-4 border-2 border-ink p-4 flex flex-col gap-3 bg-paper text-ink">
              <p className="label flex justify-between">
                <span className="mono-wide">Lot {p.n}</span>
                <span>In rotation</span>
              </p>
              <div className="border-2 border-ink bg-paper">
                <img src={p.image.src} width={p.image.w} height={p.image.h} alt={`${p.brand} ${p.model}`} loading="lazy" className="block w-full h-auto" />
              </div>
              <h3 className="head-sm text-[clamp(22px,2vw,30px)]">
                <span className="block label font-mono mb-1">{p.brand}</span>
                {p.model}
              </h3>
              <p className="label mono-cond uppercase">{p.colourway || '— / —'}</p>
              {!p.verified && (
                <p className="label">
                  <span className="px-2 font-bold bg-pink text-ink">Name unverified</span>
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
