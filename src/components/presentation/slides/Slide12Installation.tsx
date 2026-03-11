import { SlideLayout } from "../SlideLayout";
import installation2 from "@/assets/slides/installation-2.jpg";

export const Slide12Installation = () => (
  <SlideLayout className="flex flex-col">
    <div className="max-w-[1500px]">
      <p className="text-slide-gold font-body text-xl uppercase tracking-[0.3em] mb-4 animate-fade-in">
        On-Site Installation
      </p>
      <h2 className="font-display text-5xl leading-tight animate-fade-in-up">
        Modular <span className="text-slide-gold">Installation</span>
      </h2>
    </div>

    <div className="flex flex-1 items-center justify-center pb-10 pt-10">
      <div className="animate-scale-in delay-200 rounded-[32px] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
        <img
          src={installation2}
          alt="Prefabricated Solskin facade unit being lifted into place"
          className="h-[760px] w-[1014px] object-cover object-center"
        />
      </div>
    </div>
  </SlideLayout>
);
