import { SlideLayout } from "../SlideLayout";
import kellerRender from "@/assets/slides/keller-render.jpg";

export const Slide16HSG = () => (
  <SlideLayout>
    <p className="text-slide-gold font-body text-xl uppercase tracking-[0.3em] mb-4 animate-fade-in">
      Vision for HSG
    </p>
    <h2 className="font-display text-5xl leading-tight mb-10 animate-fade-in-up">
      Solskin on <span className="text-slide-gold">Universität St. Gallen</span>
    </h2>

    <div className="flex gap-12">
      <div className="flex-1 space-y-8 animate-fade-in-up delay-200">
        <p className="text-2xl text-slide-gray-100 leading-[1.6]">
          Imagine what an HSG building could look like with an adaptive Solskin facade — 
          combining <span className="text-slide-gold font-semibold">sustainability</span>, 
          <span className="text-slide-gold font-semibold"> energy efficiency</span>, and 
          <span className="text-slide-gold font-semibold"> architectural elegance</span>.
        </p>

        <div className="space-y-5">
          {[
            "Significant reduction in cooling energy demand",
            "On-site renewable energy generation",
            "Enhanced occupant comfort through adaptive shading",
            "A visible commitment to sustainability and innovation",
            "A landmark project for the university",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-slide-gold shrink-0" />
              <span className="text-xl text-slide-gray-100 leading-normal">{item}</span>
            </div>
          ))}
        </div>

        <div className="p-5 border border-slide-gold/30 rounded-xl bg-slide-gold/5">
          <p className="text-xl text-slide-gold font-display italic leading-relaxed">
            We would be delighted to explore how Solskin could transform an HSG building.
          </p>
        </div>
      </div>

      <div className="w-[600px] rounded-2xl overflow-hidden animate-scale-in delay-300">
        <img src={kellerRender} alt="Solskin facade visualization" className="w-full h-[580px] object-cover" />
        <div className="absolute bottom-0 inset-x-0 p-4">
          <p className="text-sm text-slide-gray-300 italic">Reference: KELLER Diamant, Winterthur</p>
        </div>
      </div>
    </div>
  </SlideLayout>
);
