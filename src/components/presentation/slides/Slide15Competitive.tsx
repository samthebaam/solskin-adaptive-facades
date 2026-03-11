import { SlideLayout } from "../SlideLayout";
import { CheckCircle, XCircle, Minus } from "lucide-react";

export const Slide15Competitive = () => (
  <SlideLayout>
    <p className="text-slide-gold font-body text-xl uppercase tracking-[0.3em] mb-4 animate-fade-in">
      Market Position
    </p>
    <h2 className="font-display text-5xl leading-tight mb-12 animate-fade-in-up">
      Why <span className="text-slide-gold">Solskin</span>?
    </h2>

    <div className="animate-fade-in-up delay-200">
      <div className="rounded-2xl overflow-hidden border border-slide-gray-500">
        {/* Header */}
        <div className="grid grid-cols-5 bg-slide-gray-600 p-6">
          <div className="text-xl font-semibold text-slide-gray-200">Feature</div>
          <div className="text-xl font-semibold text-slide-gold text-center">Solskin</div>
          <div className="text-xl font-semibold text-slide-gray-200 text-center">Motorized Blinds</div>
          <div className="text-xl font-semibold text-slide-gray-200 text-center">Static PV Facade</div>
          <div className="text-xl font-semibold text-slide-gray-200 text-center">Fixed Shading</div>
        </div>

        {/* Rows */}
        {[
          { feature: "Dynamic shading", solskin: true, blinds: true, pv: false, fixed: false },
          { feature: "Energy generation", solskin: true, blinds: false, pv: true, fixed: false },
          { feature: "No mechanical wear", solskin: true, blinds: false, pv: true, fixed: true },
          { feature: "Adaptive AI control", solskin: true, blinds: "partial", pv: false, fixed: false },
          { feature: "Modular & scalable", solskin: true, blinds: "partial", pv: "partial", fixed: true },
          { feature: "Occupant comfort", solskin: true, blinds: "partial", pv: false, fixed: "partial" },
        ].map(({ feature, solskin, blinds, pv, fixed }, i) => {
          const renderIcon = (val: boolean | string) => {
            if (val === true) return <CheckCircle size={24} className="text-green-400" />;
            if (val === "partial") return <Minus size={24} className="text-slide-gray-300" />;
            return <XCircle size={24} className="text-slide-gray-500" />;
          };
          return (
            <div key={i} className={`grid grid-cols-5 p-5 ${i % 2 === 0 ? "bg-slide-gray-700" : "bg-slide-gray-600/50"}`}>
              <div className="text-xl text-slide-gray-100 leading-normal">{feature}</div>
              <div className="flex justify-center">{renderIcon(solskin)}</div>
              <div className="flex justify-center">{renderIcon(blinds)}</div>
              <div className="flex justify-center">{renderIcon(pv)}</div>
              <div className="flex justify-center">{renderIcon(fixed)}</div>
            </div>
          );
        })}
      </div>

      <p className="text-xl text-slide-gold font-display italic mt-8 text-center animate-fade-in delay-400">
        Solskin is the only system combining dynamic shading, energy generation, and intelligent control — without mechanical wear.
      </p>
    </div>
  </SlideLayout>
);
