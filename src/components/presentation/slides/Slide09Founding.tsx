import { SlideLayout } from "../SlideLayout";
import { Rocket } from "lucide-react";

export const Slide09Founding = () => (
  <SlideLayout>
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="w-24 h-24 rounded-full bg-slide-gold/10 border-2 border-slide-gold flex items-center justify-center mb-10 animate-scale-in">
        <Rocket size={48} className="text-slide-gold" />
      </div>

      <p className="text-slide-gold font-body text-xl uppercase tracking-[0.3em] mb-6 animate-fade-in delay-200">
        From Lab to Market
      </p>
      <h2 className="font-display text-5xl leading-tight mb-8 animate-fade-in-up delay-300">
        Founding <span className="text-slide-gold">Zurich Soft Robotics</span>
      </h2>

      <p className="text-2xl text-slide-gray-100 max-w-[900px] leading-relaxed mb-12 animate-fade-in-up delay-400">
        After the Nature Energy publication, architects, developers, and building owners started reaching out. 
        There was a clear demand for bringing this technology from the laboratory into real buildings.
      </p>

      <div className="text-6xl font-display text-slide-gold animate-scale-in delay-500">
        2021
      </div>
      <p className="text-2xl text-slide-gray-200 mt-4 animate-fade-in delay-600">
        Company founded in Zurich, Switzerland
      </p>
    </div>
  </SlideLayout>
);
