import { SlideLayout } from "../SlideLayout";
import solskinLogo from "@/assets/slides/solskin-logo.png";

export const Slide04Intro = () => (
  <SlideLayout>
    <div className="flex flex-col items-center justify-center h-full text-center">
      <img src={solskinLogo} alt="Solskin" className="h-[60px] mb-10 animate-fade-in" />
      
      <div className="animate-fade-in-up delay-200">
        <p className="text-slide-gold text-xl uppercase tracking-[0.3em] mb-8">Introduction</p>
        <h2 className="font-display text-5xl mb-6">Samuel Bernet</h2>
        <p className="text-2xl text-slide-gray-200 mb-12">Head of Production — Zurich Soft Robotics</p>
      </div>

      <div className="max-w-[800px] animate-fade-in-up delay-400">
        <p className="text-2xl text-slide-gray-100 leading-relaxed font-display italic">
          "Our vision is to show how the buildings of the future<br />
          can already be built today."
        </p>
      </div>

      <div className="flex gap-6 mt-16 animate-fade-in delay-600">
        {["ETH Zürich Spin-off", "Founded 2021", "Based in Zurich"].map((item, i) => (
          <div key={i} className="px-6 py-3 border border-slide-gray-400 rounded-full text-slide-gray-200 text-lg">
            {item}
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);
