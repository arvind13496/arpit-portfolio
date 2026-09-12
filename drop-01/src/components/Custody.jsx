import { CUSTODY } from '../data/closet.js';

// Nine lots, numbered without a gap so the two disposals read as absences.
// The walk-a-mile button is the press that commits: pushed, it stays down,
// and the sign-off's mail subject picks the pair up.
const inCustody = CUSTODY.filter((p) => p.state === 'custody').length;
const disposed = CUSTODY.length - inCustody;
const pad = (n) => String(n).padStart(2, '0');

function Absence() {
  return (
    <div className="border-4 border-dashed border-ink aspect-[5/4] flex items-center justify-center" aria-hidden="true">
      <span className="stamp bg-pink text-ink border-ink label font-bold">Disposed</span>
    </div>
  );
}

export default function Custody({ selectedId, onSelect }) {
  return (
    <section id="custody" aria-labelledby="custody-heading" className="border-b-4 border-ink">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-14 md:py-28 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-7">
          <p><span className="runhead">Lot 06 / Custody</span></p>
          <h2 id="custody-heading" className="head text-[clamp(32px,3.8vw,58px)]">
            Custody register
          </h2>
        </div>
        <dl className="col-span-12 md:col-span-5 self-end grid grid-cols-3 border-4 border-ink text-center">
          {[['Lots', pad(CUSTODY.length)], ['In custody', pad(inCustody)], ['Disposed', pad(disposed)]].map(([k, v], i) => (
            <div key={k} className={`p-3 ${i < 2 ? 'border-r-4 border-ink' : ''}`}>
              <dt className="label">{k}</dt>
              <dd className="head text-4xl md:text-5xl">{v}</dd>
            </div>
          ))}
        </dl>

        <p className="col-span-12 read max-w-[58ch]">
          Pick the pair you would walk a mile in. It goes into the subject line at the sign-off, so the mail arrives already knowing what you wanted to talk about.
        </p>

        <ol className="col-span-12 grid grid-cols-12 gap-4 md:gap-6">
          {CUSTODY.map((p) => {
            const selected = selectedId === p.id;
            const gone = p.state === 'disposed';
            return (
              <li
                key={p.id}
                className={`col-span-12 sm:col-span-6 lg:col-span-4 border-[3px] border-ink p-4 flex flex-col gap-3 ${selected ? 'bg-ink text-lime' : 'bg-paper text-ink'}`}
              >
                <p className="label flex justify-between">
                  <span className="mono-wide">Lot {p.n}</span>
                  <span>{gone ? 'Disposed' : 'In custody'}</span>
                </p>
                {gone ? (
                  <Absence />
                ) : (
                  <div className="border-4 border-ink bg-paper">
                    <img src={p.image.src} width={p.image.w} height={p.image.h} alt={`${p.brand} ${p.model}`} loading="lazy" className="block w-full h-auto" />
                  </div>
                )}
                <h3 className="head-sm text-[clamp(22px,2vw,30px)]">
                  <span className="block label font-mono mb-1">{p.brand}</span>
                  {p.model}
                </h3>
                <p className="label mono-cond">{p.colourway || '— / —'}</p>
                {!p.verified && (
                  <p className="label">
                    <span className={`px-2 font-bold ${selected ? 'bg-lime text-ink' : 'bg-pink text-ink'}`}>Name unverified</span>
                  </p>
                )}
                <p className="text-sm">
                  {p.note ? p.note : <span className="fill">[ NOTE PENDING ]</span>}
                </p>
                {!gone && (
                  <button
                    type="button"
                    aria-pressed={selected}
                    onClick={() => onSelect(selected ? null : p.id)}
                    className={`press mt-auto self-start label font-bold px-4 py-3 border-4 border-ink ${selected ? 'bg-lime text-ink' : 'bg-paper text-ink'}`}
                  >
                    {selected ? 'Walking a mile' : 'Walk a mile'}
                  </button>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
