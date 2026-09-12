import aboutPhoto from '../assets/about-photo.webp';
import { ORIGIN } from '../data/identity.js';

// The 2016 origin as a know-your-customer form: the same five facts he told,
// set as fields. The form is rendered straight so the hijack is legible.
export default function Origin() {
  return (
    <section id="kyc" aria-labelledby="kyc-heading" className="border-b-[3px] border-ink">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-14 md:py-28 grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <p><span className="runhead">03 / KYC</span></p>
          <h2 id="kyc-heading" className="head text-[clamp(32px,3.8vw,58px)]">
            This obsession started in {ORIGIN.year}
          </h2>
        </div>

        <figure className="col-span-12 sm:col-span-6 md:col-span-3">
          <div className="border-[3px] border-ink shadow-hard-8 bg-paper">
            <img src={aboutPhoto} width="460" height="480" alt="Arpit holding a green sneaker up to his face" loading="lazy" className="block w-full h-auto" />
          </div>
          <figcaption className="label mt-4">Photo ID · account holder</figcaption>
        </figure>

        <div className="col-span-12 sm:col-span-6 md:col-span-4 border-2 border-ink bg-paper self-start">
          <p className="label bg-ink text-paper px-4 py-2">Know your customer</p>
          <dl className="p-4 text-sm">
            {ORIGIN.kyc.map(([k, v]) => (
              <div key={k} className="grid grid-cols-[minmax(0,12ch)_1fr] gap-2 py-1.5 border-b border-dotted border-rule">
                <dt className="label mono-cond">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="label px-4 py-2 border-t-2 border-ink flex justify-between">
            <span>Status</span>
            <span className="bg-ink text-paper px-2 font-bold">Active</span>
          </p>
        </div>

        <div className="col-span-12 md:col-span-5 read flex flex-col gap-5 max-w-[58ch]">
          {ORIGIN.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
