import { SlideLayout } from "../SlideLayout";
import aiConcept from "@/assets/slides/ai-concept.jpg";
import { Brain, Users, TrendingDown } from "lucide-react";

export const Slide12AI = () => (
  <SlideLayout noPadding>
    <div className="relative w-full h-full">
      <img src={aiConcept} alt="AI concept" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-slide-bg via-slide-bg/80 to-slide-bg/60" />

      <div className="absolute inset-0 p-[80px] flex flex-col justify-center">
        <p className="text-slide-gold font-body text-xl uppercase tracking-[0.3em] mb-4 animate-fade-in">
          Intelligence Layer
        </p>
        <h2 className="font-display text-5xl leading-tight mb-6 animate-fade-in-up">
          Solskin <span className="text-slide-gold">AI</span>
        </h2>
        <p className="text-xl text-slide-gray-300 mb-10 leading-relaxed animate-fade-in delay-200">
          Innosuisse research project with ETH Zurich • 650k CHF • 1.5 years
        </p>

        <div className="max-w-[1100px] space-y-8 animate-fade-in-up delay-300">
          <p className="text-2xl text-slide-gray-100 leading-[1.6]">
            A self-learning control system that optimally positions panels to maximize energy production — while adapting to occupant preferences.
          </p>

          {/* Feedback loop */}
          <div className="flex items-start gap-6 mt-8">
            {[
              { icon: Brain, label: "AI positions panels", sub: "Maximize energy production" },
              { icon: Users, label: "Occupants adjust", sub: "More or less sunlight" },
              { icon: TrendingDown, label: "System learns", sub: "Error decreases over time" },
            ].map(({ icon: Icon, label, sub }, i) => (
              <div key={i} className="flex-1 flex items-center gap-4">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full bg-slide-gold/15 border-2 border-slide-gold flex items-center justify-center">
                    <Icon size={36} className="text-slide-gold" />
                  </div>
                  <p className="text-xl font-semibold mt-4 leading-normal">{label}</p>
                  <p className="text-lg text-slide-gray-300 mt-1 leading-normal">{sub}</p>
                </div>
                {i < 2 && (
                  <div className="flex-1 h-[2px] bg-slide-gold/30 relative mt-[-20px]">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-[8px] border-l-slide-gold/50 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-6 border border-slide-gold/30 rounded-xl bg-slide-gold/5 mt-6 animate-fade-in-up delay-500">
            <p className="text-2xl text-slide-gold font-display italic leading-[1.5]">
              "The facade becomes increasingly intelligent over time."
            </p>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);
