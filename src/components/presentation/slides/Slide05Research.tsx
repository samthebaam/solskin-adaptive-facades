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

    <div className="flex gap-16">
      <div className="flex-1 space-y-8 animate-fade-in-up delay-200">
        <p className="text-2xl text-slide-gray-100 leading-[1.6]">
          Research started in <span className="text-slide-gold font-semibold">2014</span>. If a facade should adapt to the environment, it needs to <span className="font-semibold">move</span>.
        </p>

        <p className="text-xl text-slide-gray-200 leading-[1.6]">
          But moving things on buildings for decades without maintenance is extremely challenging. Traditional systems based on electric motors, pulleys, and mechanical joints experience abrasion and wear.
        </p>

        <div className="space-y-4 mt-8">
          <h3 className="text-2xl font-semibold text-slide-gold">The Breakthrough</h3>
          <p className="text-xl text-slide-gray-100 leading-[1.6]">
            During his PhD at ETH, our CEO Bratislav Svetozarevic developed what is now our <span className="font-semibold">patented soft pneumatic actuator</span> — eliminating rigid moving parts entirely.
          </p>
        </div>

        <div className="flex gap-6 mt-6">
          {[
            { num: "8+", label: "Years of R&D" },
            { num: "1", label: "Technical Patent (CH & EU)" },
            { num: "30+", label: "Design Patents" },
          ].map(({ num, label }, i) => (
            <div key={i} className="flex-1 p-5 bg-slide-gray-600 rounded-xl text-center">
              <p className="text-3xl font-bold text-slide-gold">{num}</p>
              <p className="text-lg text-slide-gray-200 mt-2 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[500px] h-[600px] rounded-2xl overflow-hidden animate-scale-in delay-300">
        <img src={ethLab} alt="ETH Zurich ZCBS Lab" className="w-full h-full object-cover" />
      </div>
    </div>
  </SlideLayout>
);
