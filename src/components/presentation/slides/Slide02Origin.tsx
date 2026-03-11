import { SlideLayout } from "../SlideLayout";
import heroBuilding from "@/assets/slides/hero-building.jpg";

export const Slide02Origin = () => (
  <SlideLayout noPadding>
    <div className="relative w-full h-full">
      <img src={heroBuilding} alt="Modern building" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-slide-bg via-slide-bg/70 to-slide-bg/30" />
      
      <div className="absolute inset-0 flex flex-col justify-end p-[80px]">
        <p className="text-slide-gold font-body text-xl uppercase tracking-[0.3em] mb-6 animate-fade-in">
          The Origin Story
        </p>
        <h2 className="font-display text-6xl leading-tight mb-12 animate-fade-in-up">
          What will the buildings<br />
          of tomorrow look like?
        </h2>
        
        <div className="flex gap-12 animate-fade-in-up delay-300">
          {["Smarter", "More Sustainable", "More Energy Efficient"].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-slide-gold" />
              <span className="text-2xl text-slide-gray-100">{item}</span>
            </div>
          ))}
        </div>
        
        <p className="text-2xl text-slide-gray-200 mt-10 max-w-[900px] animate-fade-in-up delay-500">
          Very quickly it became clear that <span className="text-slide-gold font-semibold">smart means adaptive</span>. 
          A smart building adapts to the climate, the sun, and the needs of the people inside.
        </p>
      </div>
    </div>
  </SlideLayout>
);
