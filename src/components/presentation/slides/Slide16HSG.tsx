import { SlideLayout } from "../SlideLayout";
import hsgBefore from "@/assets/slides/hsg-before.jpg";
import hsgProposal03 from "@/assets/slides/hsg-proposal-03.jpg";

export const Slide16HSG = () => (
  <SlideLayout>
    <p className="text-slide-gold font-body text-xl uppercase tracking-[0.3em] mb-4 animate-fade-in">
      Vision for HSG
    </p>
    <h2 className="font-display text-5xl leading-tight mb-10 animate-fade-in-up">
      Solskin on <span className="text-slide-gold">Universität St. Gallen</span>
    </h2>

    <div className="grid grid-cols-[1fr,760px] gap-14 items-start">
      <div className="space-y-8 animate-fade-in-up delay-200">
        <p className="text-2xl text-slide-gray-100 leading-[1.55]">
          A concept for the <span className="text-slide-gold font-semibold">Weiterbildungzentrum in St. Gallen</span> shows how Solskin could become a visible HSG statement on sustainability, comfort, and innovation.
        </p>

        <div className="space-y-4">
          {[
            "Significant reduction in cooling energy demand",
            "On-site renewable energy generation",
            "Enhanced occupant comfort through adaptive shading",
            "A visible pilot project for sustainability and innovation",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 rounded-2xl bg-slide-gray-600/80 px-6 py-5">
              <div className="mt-3 h-3 w-3 rounded-full bg-slide-gold shrink-0" />
              <span className="text-xl text-slide-gray-100 leading-[1.5]">{item}</span>
            </div>
          ))}
        </div>

      </div>

      <div className="space-y-5 animate-scale-in delay-300">
        {[
          { label: "Before", img: hsgBefore, alt: "Further Education Center in St. Gallen before Solskin" },
          { label: "After", img: hsgProposal03, alt: "Concept visualization of Solskin on the Weiterbildungzentrum in St. Gallen" },
        ].map(({ label, img, alt }) => (
          <div key={label} className="space-y-2">
            <p className="text-base font-semibold tracking-[0.06em] text-slide-gold">{label}</p>
            <div className="overflow-hidden rounded-[30px] border border-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.30)]">
              <img
                src={img}
                alt={alt}
                className="h-[255px] w-full object-cover object-center"
              />
            </div>
          </div>
        ))}
        <p className="text-base text-slide-gray-400 italic">
          Before: presentation page 17. After: proposal visualization on page 18.
        </p>
      </div>
    </div>
  </SlideLayout>
);
