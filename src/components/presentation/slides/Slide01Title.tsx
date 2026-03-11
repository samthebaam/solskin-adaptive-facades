import { SlideLayout } from "../SlideLayout";
import solskinLogo from "@/assets/slides/solskin-logo.png";
import heroInterior from "@/assets/slides/hero-interior.jpg";

export const Slide01Title = () => (
  <SlideLayout noPadding>
    <div className="flex w-full h-full">
      {/* Left side */}
      <div className="w-[55%] h-full flex flex-col justify-between p-[80px]">
        <div>
          <img src={solskinLogo} alt="Solskin" className="h-[50px] mb-4" />
          <p className="text-slide-gold font-display italic text-[22px]">
            Smart Energy, Sustainable Comfort,<br />
            Architecting an inspiring Future
          </p>
        </div>

        <div className="animate-fade-in-up">
          <h1 className="font-display text-6xl leading-tight mb-6">
            Buildings of<br />
            <span className="text-slide-gold">Tomorrow</span>
          </h1>
          <p className="text-slide-gray-200 text-xl font-body">
            March, 2026
          </p>
          <div className="mt-4">
            <p className="text-xl font-semibold">Samuel Bernet</p>
            <p className="text-slide-gray-300 text-lg">Head of Production</p>
          </div>
        </div>

        <div className="flex items-center gap-8 opacity-50">
          <span className="text-[14px] text-slide-gray-300">Spin-off ETH Zürich</span>
          <span className="text-[14px] text-slide-gray-300">COP28 Climate Innovator</span>
          <span className="text-[14px] text-slide-gray-300">Watt d'Or 2023</span>
        </div>
      </div>

      {/* Right side - image */}
      <div className="w-[45%] h-full relative">
        <img
          src={heroInterior}
          alt="Solskin facade interior view"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slide-bg via-transparent to-transparent" />
      </div>
    </div>
  </SlideLayout>
);
