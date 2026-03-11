import { SlideLayout } from "../SlideLayout";
import ethLab from "@/assets/slides/eth-lab.jpg";

export const Slide05Research = () => (
  <SlideLayout>
    <p className="text-slide-gold font-body text-xl uppercase tracking-[0.3em] mb-4 animate-fade-in">
      The Research Beginning
    </p>
    <h2 className="font-display text-5xl leading-tight mb-12 animate-fade-in-up">
      Born at <span className="text-slide-gold">ETH Zurich</span>
    </h2>

    <div className="grid grid-cols-[1.15fr,560px] gap-16 items-start">
      <div className="space-y-8 animate-fade-in-up delay-200">
        <p className="max-w-[920px] text-2xl text-slide-gray-100 leading-[1.55]">
          Research started in <span className="text-slide-gold font-semibold">2014</span> around one core question: how can a facade truly adapt to the environment?
        </p>

        <div className="space-y-4">
          {[
            "Adaptive facades need to move, not just look dynamic.",
            "Conventional motors, pulleys, and joints wear too quickly for decades-long building use.",
            "During his PhD at ETH, Bratislav Svetozarevic developed the patented soft pneumatic actuator with no rigid moving parts.",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 rounded-2xl bg-slide-gray-600/80 px-6 py-5">
              <div className="mt-3 h-3 w-3 shrink-0 rounded-full bg-slide-gold" />
              <p className="text-xl text-slide-gray-100 leading-[1.55]">{item}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 pt-2">
          {[
            { num: "8+", label: "Years of R&D" },
            { num: "1", label: "Technical Patent (CH & EU)" },
            { num: "30+", label: "Design Patents" },
          ].map(({ num, label }, i) => (
            <div key={i} className="rounded-2xl bg-slide-gray-600 p-6 text-center">
              <p className="text-3xl font-bold text-slide-gold">{num}</p>
              <p className="text-lg text-slide-gray-200 mt-2 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[640px] rounded-[28px] overflow-hidden animate-scale-in delay-300 shadow-[0_30px_70px_rgba(0,0,0,0.28)]">
        <img src={ethLab} alt="ETH Zurich ZCBS Lab" className="w-full h-full object-cover" />
      </div>
    </div>
  </SlideLayout>
);
