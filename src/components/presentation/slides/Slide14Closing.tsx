import { SlideLayout } from "../SlideLayout";
import solskinLogo from "@/assets/slides/solskin-logo.png";

export const Slide14Closing = () => (
  <SlideLayout>
    <div className="flex flex-col items-center justify-center h-full text-center">
      <p className="text-slide-gold font-body text-xl uppercase tracking-[0.3em] mb-8 animate-fade-in">
        Our Vision
      </p>
      
      <h2 className="font-display text-5xl leading-tight mb-12 max-w-[1100px] animate-fade-in-up delay-100">
        Fundamentally change how buildings<br />
        <span className="text-slide-gold">interact with their environment</span>
      </h2>

      <div className="flex gap-8 mb-16 animate-fade-in-up delay-300">
        {[
          { label: "More Intelligent", desc: "Self-learning facades that adapt" },
          { label: "More Efficient", desc: "Up to 80% cooling energy reduction" },
          { label: "More Resilient", desc: "Ready for climate challenges" },
        ].map(({ label, desc }, i) => (
          <div key={i} className="w-[300px] p-8 bg-slide-gray-600 rounded-2xl">
            <h3 className="text-2xl font-semibold text-slide-gold mb-3">{label}</h3>
            <p className="text-lg text-slide-gray-200">{desc}</p>
          </div>
        ))}
      </div>

      <div className="animate-fade-in delay-500">
        <img src={solskinLogo} alt="Solskin" className="h-[50px] mb-6 mx-auto" />
        <p className="text-3xl font-display text-slide-gray-100 mb-2">
          Buildings truly ready for the future.
        </p>
        <p className="text-xl text-slide-gray-300">
          Thank you.
        </p>
      </div>

      <div className="flex gap-8 mt-10 text-slide-gray-400 text-lg animate-fade-in delay-700">
        <span>solskin.swiss</span>
        <span>•</span>
        <span>Zurich Soft Robotics GmbH</span>
      </div>
    </div>
  </SlideLayout>
);
