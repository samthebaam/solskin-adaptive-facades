import { SlideLayout } from "../SlideLayout";
import actuatorCloseup from "@/assets/slides/actuator-closeup.jpg";
import solskinPanels from "@/assets/slides/solskin-panels.jpg";
import { Sun, Zap, Thermometer } from "lucide-react";

export const Slide07Solskin = () => (
  <SlideLayout>
    <p className="text-slide-gold font-body text-xl uppercase tracking-[0.3em] mb-4 animate-fade-in">
      The Product
    </p>
    <h2 className="font-display text-5xl leading-tight mb-10 animate-fade-in-up">
      From Actuator to <span className="text-slide-gold">Solskin</span>
    </h2>

    <div className="flex gap-10">
      {/* Images */}
      <div className="flex gap-4 animate-scale-in delay-200">
        <div className="w-[340px] rounded-xl overflow-hidden relative">
          <img src={actuatorCloseup} alt="Soft robotic actuator close-up" className="w-full h-[400px] object-cover" />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slide-bg/90 to-transparent p-4">
            <p className="text-sm text-slide-gold font-semibold">Soft robotic actuator</p>
          </div>
        </div>
        <div className="w-[340px] rounded-xl overflow-hidden relative">
          <img src={solskinPanels} alt="Solskin diagrid panels" className="w-full h-[400px] object-cover" />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slide-bg/90 to-transparent p-4">
            <p className="text-sm text-slide-gold font-semibold">Solskin diagrid facade</p>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="flex-1 space-y-6 animate-fade-in-up delay-400">
        <p className="text-xl text-slide-gray-100 leading-[1.6]">
          Photovoltaic panels in a <span className="text-slide-gold font-semibold">diagrid structure</span>, mounted in front of glazed building surfaces.
        </p>

        <div className="space-y-5">
          {[
            { icon: Sun, title: "Dynamic Shading", desc: "Control sunlight entering the building" },
            { icon: Zap, title: "Renewable Energy", desc: "PV panels generate clean electricity" },
            { icon: Thermometer, title: "Climate Control", desc: "Regulate indoor temperature adaptively" },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="flex items-start gap-4 p-5 bg-slide-gray-600 rounded-xl">
              <Icon size={28} className="text-slide-gold shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-semibold leading-normal">{title}</h4>
                <p className="text-lg text-slide-gray-200 leading-normal mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xl text-slide-gold font-display italic leading-relaxed">
          The building actively responds to environmental conditions.
        </p>
      </div>
    </div>
  </SlideLayout>
);
