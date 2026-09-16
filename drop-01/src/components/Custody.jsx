import { CUSTODY } from '../data/closet.js';

// Seven pairs, one register. Image, brand, model, colourway — set like a
// shoebox label and nothing else.
const pad = (n) => String(n).padStart(2, '0');

export default function Custody() {
  return (
    <section id="custody" aria-labelledby="custody-heading" className="border-b-2 border-ink">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-14 md:py-28 grid grid-cols-12 gap-6">
        <div className="col-span-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="custody-heading" className="head text-[clamp(32px,3.8vw,58px)]">
              The rotation
            </h2>
          </div>
          <p className="label"><span className="mono-wide font-bold">{pad(CUSTODY.length)}</span> pairs in rotation</p>
        </div>

        <ol className="col-span-12 grid grid-cols-12 gap-4 md:gap-6">
          {/* Seven pairs in a three-up grid leave the last row part-filled.
              Pair 07 used to span the gap instead, which gave one pair a wider
              window and a different internal layout than the six above it —
              the odd one out read as a mistake. Every crate is identical now
              and the short final row reads as what it is: seven pairs. */}
          {CUSTODY.map((p) => (
            <li key={p.id} className="col-span-12 sm:col-span-6 lg:col-span-4 border border-ink bg-paper text-ink flex flex-col">
              <p className="label flex flex-wrap justify-between gap-x-4 bg-blue text-paper px-4 py-3 border-b border-ink">
                <span className="mono-wide">Pair {p.n}</span>
                <span>In rotation</span>
              </p>
              <div className="p-4 md:p-5 grow flex flex-col gap-3">
                <div className="bg-white aspect-[5/4] lg:aspect-auto lg:h-[210px] flex items-center justify-center overflow-hidden">
                  <img src={p.image.src} width={p.image.w} height={p.image.h} alt={`${p.brand} ${p.model}`} loading="lazy" className="block h-full w-auto max-w-full object-contain" />
                </div>
                <div className="flex flex-col gap-3">
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
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
