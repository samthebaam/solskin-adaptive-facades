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

    <div className="grid grid-cols-[900px,1fr] gap-12 items-start">
      <div className="grid grid-cols-2 gap-7 animate-scale-in delay-200">
        {[
          {
            img: actuatorCloseup,
            alt: "Soft robotic actuator close-up",
            title: "Soft robotic actuator",
          },
          {
            img: solskinPanels,
            alt: "Solskin diagrid facade",
            title: "Solskin diagrid facade",
          },
        ].map(({ img, alt, title }) => (
          <div key={title} className="space-y-3">
            <p className="text-base font-semibold tracking-[0.06em] text-slide-gold">{title}</p>
            <div className="overflow-hidden rounded-[28px] border border-white/5 shadow-[0_30px_70px_rgba(0,0,0,0.28)]">
              <img src={img} alt={alt} className="h-[520px] w-full object-cover" />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-5 pt-1 animate-fade-in-up delay-400">
        <p className="max-w-[560px] text-xl text-slide-gray-100 leading-[1.55]">
          Photovoltaic panels in a <span className="text-slide-gold font-semibold">diagrid structure</span>, mounted in front of glazed building surfaces.
        </p>

        <div className="space-y-4">
          {[
            { icon: Sun, title: "Dynamic Shading", desc: "Control sunlight entering the building" },
            { icon: Zap, title: "Renewable Energy", desc: "PV panels generate clean electricity" },
            { icon: Thermometer, title: "Climate Control", desc: "Regulate indoor temperature adaptively" },
          ].map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="flex items-start gap-4 rounded-2xl bg-slide-gray-600/95 p-5">
              <Icon size={30} className="text-slide-gold shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-semibold leading-normal">{title}</h4>
                <p className="text-lg text-slide-gray-200 leading-normal mt-1">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="pt-1 text-xl text-slide-gold font-display italic leading-relaxed">
          The building actively responds to environmental conditions.
        </p>
      </div>
    </div>
  </SlideLayout>
);
