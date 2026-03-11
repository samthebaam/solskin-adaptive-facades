import { SlideLayout } from "../SlideLayout";
import kellerDiamant from "@/assets/slides/keller-diamant.png";
import kellerNight from "@/assets/slides/keller-night.jpg";
import { Clock, Layers, Maximize2 } from "lucide-react";

export const Slide11Keller = () => (
  <SlideLayout noPadding>
    <div className="flex w-full h-full">
      {/* Left: Images */}
      <div className="w-[55%] relative animate-fade-in">
        <img src={kellerDiamant} alt="KELLER Diamant" className="w-full h-[60%] object-cover" />
        <img src={kellerNight} alt="KELLER Diamant night" className="w-full h-[40%] object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slide-bg/50" />
      </div>

      {/* Right: Info */}
      <div className="w-[45%] p-[80px] flex flex-col justify-center">
        <p className="text-slide-gold font-body text-xl uppercase tracking-[0.3em] mb-4 animate-fade-in">
          Flagship Project
        </p>
        <h2 className="font-display text-5xl leading-tight mb-8 animate-fade-in-up delay-100">
          KELLER <span className="text-slide-gold">Diamant</span>
        </h2>
        <p className="text-xl text-slide-gray-200 mb-8 leading-relaxed animate-fade-in-up delay-200">
          Office and industrial building in Winterthur, Switzerland — our largest and most ambitious installation.
        </p>

        <div className="space-y-6 animate-fade-in-up delay-300">
          {[
            { icon: Maximize2, value: "~1,300 m²", label: "Installation area" },
            { icon: Clock, value: "~40 min", label: "Per unit installation" },
            { icon: Layers, value: "Modular", label: "Prefabricated units" },
          ].map(({ icon: Icon, value, label }, i) => (
            <div key={i} className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-slide-gray-600 flex items-center justify-center shrink-0">
                <Icon size={28} className="text-slide-gold" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slide-gold">{value}</p>
                <p className="text-lg text-slide-gray-300">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-5 border border-slide-gold/30 rounded-xl bg-slide-gold/5 animate-fade-in delay-500">
          <p className="text-lg text-slide-gray-100">
            Scalable for buildings of any size through modular prefabrication.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);
