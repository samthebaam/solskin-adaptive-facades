import { SlideLayout } from "../SlideLayout";
import { BookOpen, Building, Award } from "lucide-react";

export const Slide08Validation = () => (
  <SlideLayout>
    <p className="text-slide-gold font-body text-xl uppercase tracking-[0.3em] mb-4 animate-fade-in">
      Scientific Validation
    </p>
    <h2 className="font-display text-5xl leading-tight mb-12 animate-fade-in-up">
      Published in <span className="text-slide-gold">Nature Energy</span>
    </h2>

    <div className="flex flex-col items-center">
      <div className="flex items-center gap-0 w-full max-w-[1500px] mb-12 animate-fade-in-up delay-200">
        {[
          { year: "2014", event: "ETH Zurich research begins" },
          { year: "2017", event: "Full-scale demonstrator at EMPA" },
          { year: "2019", event: "Nature Energy publication" },
          { year: "2021", event: "Zurich Soft Robotics founded" },
        ].map(({ year, event }, i) => (
          <div key={i} className="flex-1 relative">
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 rounded-full bg-slide-gold z-10" />
              <div className="mt-4 text-2xl font-bold text-slide-gold">{year}</div>
              <p className="mt-3 max-w-[260px] px-4 text-center text-xl text-slide-gray-200 leading-[1.45]">{event}</p>
            </div>
            {i < 3 && (
              <div className="absolute top-[10px] left-[calc(50%+10px)] right-[-50%] h-[2px] bg-slide-gray-400" />
            )}
          </div>
        ))}
      </div>

      <div className="grid w-full max-w-[1500px] grid-cols-3 gap-6 animate-fade-in-up delay-400">
        {[
          { icon: BookOpen, title: "8 Years of Research", desc: "From first ETH studies to company launch" },
          { icon: Building, title: "EMPA Demonstrator", desc: "Full-scale validation in Dübendorf" },
          { icon: Award, title: "Nature Energy", desc: "Peer-reviewed proof of energy and comfort gains" },
        ].map(({ icon: Icon, title, desc }, i) => (
          <div key={i} className="min-h-[260px] rounded-[28px] bg-slide-gray-600 px-8 py-7">
            <Icon size={38} className="text-slide-gold mb-4" />
            <h3 className="mb-3 text-2xl font-semibold leading-normal">{title}</h3>
            <p className="text-xl text-slide-gray-200 leading-[1.55]">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);
