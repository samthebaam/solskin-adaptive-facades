import { SlideLayout } from "../SlideLayout";
import applicationsDiagram from "@/assets/slides/applications-diagram.jpg";
import unitDiagram from "@/assets/slides/unit-diagram.jpg";

export const Slide13Flexibility = () => (
  <SlideLayout>
    <p className="text-slide-gold font-body text-xl uppercase tracking-[0.3em] mb-4 animate-fade-in">
      Architectural Flexibility
    </p>
    <h2 className="font-display text-5xl leading-tight mb-10 animate-fade-in-up">
      Unlimited <span className="text-slide-gold">Possibilities</span>
    </h2>

    <div className="flex gap-12">
      <div className="flex-1 space-y-8 animate-fade-in-up delay-200">
        <p className="text-2xl text-slide-gray-100 leading-relaxed">
          Thanks to its modular design, Solskin can be applied to virtually any facade geometry and building type.
        </p>

        <div className="grid grid-cols-2 gap-4">
          {[
            "Office Buildings",
            "Industrial Buildings", 
            "Residential Buildings",
            "Public Buildings",
            "Pergolas & Canopies",
            "Skylights",
            "Balcony Balustrades",
            "Green Facades",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-slide-gray-600 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-slide-gold shrink-0" />
              <span className="text-lg text-slide-gray-100">{item}</span>
            </div>
          ))}
        </div>

        <div className="p-5 border border-slide-gold/30 rounded-xl bg-slide-gold/5">
          <p className="text-xl text-slide-gold font-display italic">
            Including visualizations of how an HSG building could look with Solskin.
          </p>
        </div>
      </div>

      <div className="w-[700px] space-y-4 animate-scale-in delay-300">
        <img src={applicationsDiagram} alt="Application types" className="w-full rounded-xl" />
        <img src={unitDiagram} alt="Modular unit" className="w-full h-[220px] object-contain rounded-xl bg-slide-gray-700 p-4" />
      </div>
    </div>
  </SlideLayout>
);
