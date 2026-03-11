import { SlideLayout } from "../SlideLayout";
import { BookOpen, Building, Award } from "lucide-react";

export const Slide08Validation = () => (
  <SlideLayout>
    <p className="text-slide-gold font-body text-xl uppercase tracking-[0.3em] mb-4 animate-fade-in">
      Scientific Validation
    </p>
    <h2 className="font-display text-5xl leading-tight mb-16 animate-fade-in-up">
      Published in <span className="text-slide-gold">Nature Energy</span>
    </h2>

    <div className="flex flex-col items-center">
      {/* Timeline */}
      <div className="flex items-center gap-0 w-full max-w-[1400px] mb-16 animate-fade-in-up delay-200">
        {[
          { year: "2014", event: "Research begins at ETH Zurich" },
          { year: "2017", event: "Large-scale demonstrator at EMPA Dübendorf" },
          { year: "2019", event: "Published in Nature Energy" },
          { year: "2021", event: "Zurich Soft Robotics founded" },
        ].map(({ year, event }, i) => (
          <div key={i} className="flex-1 relative">
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 rounded-full bg-slide-gold z-10" />
              <div className="text-2xl font-bold text-slide-gold mt-4">{year}</div>
              <p className="text-lg text-slide-gray-200 text-center mt-3 px-4 leading-relaxed">{event}</p>
            </div>
            {i < 3 && (
              <div className="absolute top-[10px] left-[calc(50%+10px)] right-[-50%] h-[2px] bg-slide-gray-400" />
            )}
          </div>
        ))}
      </div>

      {/* Key results */}
      <div className="flex gap-8 w-full max-w-[1400px] animate-fade-in-up delay-400">
        {[
          { icon: BookOpen, title: "8 Years of Research", desc: "Extensive testing and development of the adaptive facade system" },
          { icon: Building, title: "EMPA Demonstrator", desc: "Full-scale demonstrator built at EMPA research facility in Dübendorf" },
          { icon: Award, title: "Nature Energy Publication", desc: "Demonstrated significant improvements in building energy performance and occupant comfort" },
        ].map(({ icon: Icon, title, desc }, i) => (
          <div key={i} className="flex-1 p-8 bg-slide-gray-600 rounded-2xl">
            <Icon size={40} className="text-slide-gold mb-4" />
            <h3 className="text-2xl font-semibold mb-3 leading-normal">{title}</h3>
            <p className="text-xl text-slide-gray-200 leading-[1.6]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);
