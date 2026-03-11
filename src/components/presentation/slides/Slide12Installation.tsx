import { SlideLayout } from "../SlideLayout";
import installation1 from "@/assets/slides/installation-1.jpg";
import installation2 from "@/assets/slides/installation-2.jpg";
import { Clock, Wrench, ShieldCheck } from "lucide-react";

export const Slide12Installation = () => (
  <SlideLayout>
    <p className="text-slide-gold font-body text-xl uppercase tracking-[0.3em] mb-4 animate-fade-in">
      On-Site Installation
    </p>
    <h2 className="font-display text-5xl leading-tight mb-10 animate-fade-in-up">
      Modular <span className="text-slide-gold">Installation</span>
    </h2>

    <div className="flex gap-12">
      {/* Images */}
      <div className="flex-1 space-y-4 animate-scale-in delay-200">
        <div className="rounded-2xl overflow-hidden">
          <img src={installation1} alt="Facade installation in progress" className="w-full h-[320px] object-cover" />
        </div>
        <div className="rounded-2xl overflow-hidden">
          <img src={installation2} alt="Prefabricated unit being lifted" className="w-full h-[280px] object-cover" />
        </div>
      </div>

      {/* Info */}
      <div className="w-[550px] flex flex-col justify-center space-y-8 animate-fade-in-up delay-300">
        <p className="text-2xl text-slide-gray-100 leading-[1.6]">
          Each Solskin unit is <span className="text-slide-gold font-semibold">prefabricated off-site</span> and delivered ready to install. 
          This minimizes on-site complexity and ensures consistent quality.
        </p>

        <div className="space-y-6">
          {[
            { icon: Clock, value: "~40 min", label: "Installation time per unit" },
            { icon: Wrench, value: "Prefabricated", label: "Factory-assembled modules" },
            { icon: ShieldCheck, value: "Plug & Play", label: "Minimal on-site labour" },
          ].map(({ icon: Icon, value, label }, i) => (
            <div key={i} className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-xl bg-slide-gray-600 flex items-center justify-center shrink-0">
                <Icon size={28} className="text-slide-gold" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slide-gold leading-normal">{value}</p>
                <p className="text-lg text-slide-gray-300 leading-normal">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-5 border border-slide-gold/30 rounded-xl bg-slide-gold/5">
          <p className="text-xl text-slide-gold font-display italic leading-relaxed">
            Scalable installation process for buildings of any size.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);
