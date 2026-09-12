import { CUSTODY } from '../data/closet.js';

// Seven pairs, one register: a row each, the image at label size, the
// name and colourway set like a shoebox end. No orphans, no crates.
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

        <ol className="col-span-12 border-t-[3px] border-ink">
          {CUSTODY.map((p) => (
            <li key={p.id} className="grid grid-cols-[4ch_88px_minmax(0,1fr)] sm:grid-cols-[5ch_140px_minmax(0,1fr)] md:grid-cols-[6ch_180px_minmax(0,1fr)_auto] gap-x-4 md:gap-x-8 gap-y-2 items-center py-4 border-b-2 border-ink">
              <span className="label mono-wide self-start pt-1">{p.n}</span>
              <div className="border-2 border-ink bg-paper">
                <img src={p.image.src} width={p.image.w} height={p.image.h} alt={`${p.brand} ${p.model}`} loading="lazy" className="block w-full h-auto" />
              </div>
              <div className="min-w-0 flex flex-col gap-1">
                <span className="label">{p.brand}</span>
                <h3 className="head-sm text-[clamp(18px,2.2vw,32px)] wrap-anywhere">{p.model}</h3>
                <p className="label mono-cond uppercase">{p.colourway || '— / —'}</p>
                {!p.verified && (
                  <p className="label"><span className="inline px-2 font-bold bg-pink text-ink box-decoration-clone">Name unverified</span></p>
                )}
              </div>
              <span className="label col-start-3 md:col-start-auto md:text-right">In rotation</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
