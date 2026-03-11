import { SlideLayout } from "../SlideLayout";
import { Sun, Thermometer, Zap } from "lucide-react";

export const Slide03Facade = () => (
  <SlideLayout>
    <p className="text-slide-gold font-body text-xl uppercase tracking-[0.3em] mb-4 animate-fade-in">
      The Key Insight
    </p>
    <h2 className="font-display text-5xl leading-tight mb-16 animate-fade-in-up">
      The Facade as <span className="text-slide-gold">Interface</span>
    </h2>

    <div className="flex items-center gap-16">
      {/* Left: Facade diagram */}
      <div className="w-[500px] h-[500px] relative animate-scale-in delay-200">
        {/* Building outline */}
        <div className="absolute inset-[60px] border-2 border-slide-gray-400 rounded-lg">
          <div className="absolute -left-[60px] top-1/2 -translate-y-1/2 w-[60px] flex flex-col items-center gap-2">
            <div className="w-[2px] h-20 bg-gradient-to-b from-slide-gold to-transparent" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-slide-gray-300 text-lg">INTERIOR</span>
          </div>
        </div>
        {/* Facade line */}
        <div className="absolute left-[58px] top-[40px] bottom-[40px] w-[4px] bg-slide-gold rounded-full shadow-[0_0_20px_hsl(35,55%,50%,0.4)]" />
        <div className="absolute left-[30px] top-[20px] text-slide-gold text-sm font-semibold tracking-wider rotate-[-90deg] origin-bottom-left">
          FACADE
        </div>
        <div className="absolute -left-[20px] top-[60px] text-slide-gray-200 text-sm">EXTERIOR</div>
      </div>

      {/* Right: Energy flows */}
      <div className="flex-1 space-y-12">
        {[
          { icon: Sun, label: "Sunlight enters", desc: "Solar gains through the facade can overheat buildings in summer" },
          { icon: Thermometer, label: "Heat enters or escapes", desc: "The facade mediates between outdoor and indoor temperatures" },
          { icon: Zap, label: "Energy is gained or lost", desc: "Every square meter of facade is an opportunity for energy exchange" },
        ].map(({ icon: Icon, label, desc }, i) => (
          <div key={i} className={`flex items-start gap-6 animate-fade-in-up delay-${(i + 3) * 100}`}>
            <div className="w-16 h-16 rounded-xl bg-slide-gray-600 flex items-center justify-center shrink-0">
              <Icon size={32} className="text-slide-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">{label}</h3>
              <p className="text-lg text-slide-gray-200">{desc}</p>
            </div>
          </div>
        ))}

        <div className="mt-8 p-6 border border-slide-gold/30 rounded-xl bg-slide-gold/5 animate-fade-in-up delay-700">
          <p className="text-2xl text-slide-gold font-display italic">
            "What if the facade itself could become smart?"
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);
