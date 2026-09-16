import { CUSTODY } from '../data/closet.js';
import Barcode from './Barcode.jsx';

// Seven pairs, each set as a small shoebox end label — the same object the
// cover is, at crate scale. Cover is his box; these are theirs.
//
// One row of seven at lg, which is what the heading already claims: seven
// pairs in rotation, shown as seven. At three-up these read as hero cards and
// the fold spent a fifth of the page listing what he owns; a single shelf is
// the right weight for a register. The list carries its own 7-column track
// rather than the page's 12, because seven does not divide into twelve.
//
// BAND is the band colour. Black, matching the cover's label, so all eight
// printed objects on the page share one header. Measured over the whole page
// the choice is worth about one percentage point of blue either way, so it was
// never an accent-budget decision — the blue on this page is almost entirely
// the Rule spread, which stays.
const BAND = 'ink';
const bandClass = BAND === 'ink' ? 'bg-ink text-paper' : 'bg-blue text-paper';

const pad = (n) => String(n).padStart(2, '0');

export default function Custody() {
  return (
    <section id="custody" aria-labelledby="custody-heading" className="border-b-2 border-ink">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-14 md:py-28 grid grid-cols-12 gap-6">
        <div className="col-span-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="custody-heading" className="head text-[clamp(32px,3.8vw,58px)]">
              My current pairs
            </h2>
          </div>
          <p className="label"><span className="mono-wide font-bold">{pad(CUSTODY.length)}</span> pairs in rotation</p>
        </div>

        <ol className="col-span-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
          {CUSTODY.map((p) => (
            <li key={p.id} className="border border-ink bg-paper text-ink flex flex-col">
              {/* Every crate used to also say "In rotation", under a heading
                  that already says all seven are. The band carries the pair
                  number and nothing else. */}
              <p className={`label mono-wide px-2.5 py-1.5 border-b border-ink ${bandClass}`}>
                Pair {p.n}
              </p>
              <div className="p-2.5 grow flex flex-col gap-2">
                {/* Padding lives on the window, not the image: h-full/w-auto
                    let a wide shoe touch or spill past the window's own
                    edges under overflow-hidden, which crops it. w-full/h-full
                    object-contain inside a padded box means the image can
                    only ever shrink to fit — never crop — and the padding is
                    what gives every pair the same margin of white around it. */}
                <div className="bg-white aspect-[5/4] lg:aspect-auto lg:h-[104px] p-3 flex items-center justify-center overflow-hidden">
                  <img src={p.image.src} width={p.image.w} height={p.image.h} alt={`${p.brand} ${p.model}`} loading="lazy" className="block w-full h-full object-contain" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="head-sm text-[clamp(14px,1.15vw,17px)]">
                    <span className="block label mono-cond text-[10px] mb-0.5">{p.brand}</span>
                    {p.model}
                  </h3>
                  <p className="label mono-cond uppercase text-[10px]">{p.colourway || '— / —'}</p>
                  {!p.verified && (
                    <p className="label text-[10px]">
                      <span className="px-1.5 font-bold bg-pink text-ink">Name unverified</span>
                    </p>
                  )}
                </div>
                {/* The foot of an end label: the code that identifies the pair.
                    The id is dropped here — at this width it overflowed, and
                    the pair number is the part that identifies it on the page. */}
                <div className="mt-auto pt-2 border-t border-ink">
                  <Barcode seed={p.id} height={14} />
                  <p className="label mono-wide text-[10px] mt-0.5">{pad(CUSTODY.length)} · {p.n}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
