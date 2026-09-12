import aboutPhoto from '../assets/about-photo.webp';
import { ORIGIN } from '../data/identity.js';

// The 2016 origin as a know-your-customer form: the same five facts he told,
// set as fields. The form is rendered straight so the hijack is legible.
export default function Origin() {
  return (
    <section id="kyc" aria-labelledby="kyc-heading" className="border-b-4 border-ink">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 py-10 md:py-16 grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <p className="label">Lot 03 / KYC</p>
          <h2 id="kyc-heading" className="display text-[clamp(44px,7vw,120px)]">
            This obsession started in {ORIGIN.year}
          </h2>
        </div>

        <div className="col-span-12 md:col-span-5 border-4 border-ink shadow-hard-8 bg-paper">
          <p className="label bg-ink text-paper px-4 py-2">Know your customer</p>
          <div className="p-4 grid grid-cols-[auto_1fr] gap-4 items-start">
            <div className="border-4 border-ink w-[120px]">
              <img src={aboutPhoto} width="460" height="480" alt="Arpit holding a green sneaker up to his face" loading="lazy" className="block w-full h-auto" />
              <p className="label text-center border-t-4 border-ink py-1">Photo ID</p>
            </div>
            <dl className="text-sm">
              {ORIGIN.kyc.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[minmax(0,12ch)_1fr] gap-2 py-1.5 border-b-2 border-dotted border-ink">
                  <dt className="label mono-cond">{k}</dt>
                  <dd className="uppercase">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="label px-4 py-2 border-t-4 border-ink flex justify-between">
            <span>Status</span>
            <span className="bg-lime text-ink px-2 font-bold">Active</span>
          </p>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7 flex flex-col gap-5 text-[17px] max-w-[62ch]">
          {ORIGIN.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
