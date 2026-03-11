import { SlideLayout } from "../SlideLayout";
import solskinLogo from "@/assets/slides/solskin-logo.png";

export const Slide14Closing = () => (
  <SlideLayout>
    <div className="flex h-full flex-col items-center px-8 pb-[110px] pt-2 text-center">
      <p className="mb-5 text-slide-gold font-body text-xl uppercase tracking-[0.3em] animate-fade-in">
        Our Vision
      </p>

      <h2 className="mb-10 max-w-[1360px] font-display text-[64px] leading-[1.05] animate-fade-in-up delay-100">
        Fundamentally change how buildings
        <br />
        <span className="text-slide-gold">interact with their environment</span>
      </h2>

      <div className="mb-10 grid w-full max-w-[1260px] grid-cols-3 gap-8 animate-fade-in-up delay-300">
        {[
          { label: "More Intelligent", desc: "Self-learning facades that adapt" },
          { label: "More Efficient", desc: "Up to 80% cooling energy reduction" },
          { label: "More Resilient", desc: "Ready for climate challenges" },
        ].map(({ label, desc }, i) => (
          <div
            key={i}
            className="flex min-h-[250px] flex-col items-center rounded-[28px] border border-white/5 bg-slide-gray-600/90 px-10 py-9"
          >
            <h3 className="mb-4 text-[32px] font-semibold leading-[1.2] text-slide-gold">{label}</h3>
            <p className="max-w-[230px] text-[22px] leading-[1.5] text-slide-gray-200">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-auto flex flex-col items-center animate-fade-in delay-500">
        <img src={solskinLogo} alt="Solskin" className="mx-auto mb-6 h-[46px]" />
        <p className="mb-3 font-display text-[54px] leading-[1.08] text-slide-gray-100">
          Buildings truly ready for the future.
        </p>
        <p className="text-[30px] leading-normal text-slide-gray-300">
          Thank you.
        </p>
        <div className="mt-6 flex items-center gap-5 text-[22px] text-slide-gray-400 animate-fade-in delay-700">
          <span>solskin.swiss</span>
          <span>•</span>
          <span>Zurich Soft Robotics GmbH</span>
        </div>
      </div>
    </div>
  </SlideLayout>
);
