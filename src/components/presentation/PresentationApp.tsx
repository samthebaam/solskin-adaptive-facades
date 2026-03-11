import React, { useState, useEffect, useCallback } from "react";
import { ScaledSlide } from "./ScaledSlide";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";

// Import all slides
import { Slide01Title } from "./slides/Slide01Title";
import { Slide02Origin } from "./slides/Slide02Origin";
import { Slide03Facade } from "./slides/Slide03Facade";
import { Slide04Intro } from "./slides/Slide04Intro";
import { Slide05Research } from "./slides/Slide05Research";
import { Slide06Actuator } from "./slides/Slide06Actuator";
import { Slide07Solskin } from "./slides/Slide07Solskin";
import { Slide08Validation } from "./slides/Slide08Validation";
import { Slide09Founding } from "./slides/Slide09Founding";
import { Slide10RealBuildings } from "./slides/Slide10RealBuildings";
import { Slide11Keller } from "./slides/Slide11Keller";
import { Slide12Installation } from "./slides/Slide12Installation";
import { Slide12AI } from "./slides/Slide12AI";
import { Slide13Flexibility } from "./slides/Slide13Flexibility";
import { Slide15Competitive } from "./slides/Slide15Competitive";
import { Slide16HSG } from "./slides/Slide16HSG";
import { Slide14Closing } from "./slides/Slide14Closing";

const slides = [
  Slide01Title,
  Slide02Origin,
  Slide03Facade,
  Slide04Intro,
  Slide05Research,
  Slide06Actuator,
  Slide07Solskin,
  Slide08Validation,
  Slide09Founding,
  Slide10RealBuildings,
  Slide11Keller,
  Slide12Installation,
  Slide12AI,
  Slide13Flexibility,
  Slide15Competitive,
  Slide16HSG,
  Slide14Closing,
];

const PresentationApp: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const hideTimer = React.useRef<ReturnType<typeof setTimeout>>();

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const goPrev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "f" || e.key === "F5") {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === "Escape") {
        // handled by browser for fullscreen
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("keydown", handleKey);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [goNext, goPrev, toggleFullscreen]);

  // Auto-hide controls
  useEffect(() => {
    const handleMouseMove = () => {
      setShowControls(true);
      if (hideTimer.current) clearTimeout(hideTimer.current);
      hideTimer.current = setTimeout(() => setShowControls(false), 3000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="w-screen h-screen bg-background overflow-hidden relative select-none">
      <ScaledSlide key={currentSlide}>
        <CurrentSlideComponent />
      </ScaledSlide>

      {/* Navigation controls */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-secondary/80 backdrop-blur-sm rounded-full px-4 py-2 transition-opacity duration-500 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={goPrev}
          disabled={currentSlide === 0}
          className="p-1 rounded-full hover:bg-muted disabled:opacity-30 transition-colors text-foreground"
        >
          <ChevronLeft size={20} />
        </button>

        <span className="text-sm font-body text-muted-foreground min-w-[60px] text-center">
          {currentSlide + 1} / {slides.length}
        </span>

        <button
          onClick={goNext}
          disabled={currentSlide === slides.length - 1}
          className="p-1 rounded-full hover:bg-muted disabled:opacity-30 transition-colors text-foreground"
        >
          <ChevronRight size={20} />
        </button>

        <div className="w-px h-5 bg-border" />

        <button
          onClick={toggleFullscreen}
          className="p-1 rounded-full hover:bg-muted transition-colors text-foreground"
        >
          {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
        </button>
      </div>

      {/* Progress bar */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-secondary transition-opacity duration-500 ${showControls ? "opacity-100" : "opacity-0"}`}>
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* Click zones for navigation */}
      <div className="absolute inset-y-0 left-0 w-1/5 cursor-pointer z-10" onClick={goPrev} />
      <div className="absolute inset-y-0 right-0 w-1/5 cursor-pointer z-10" onClick={goNext} />
    </div>
  );
};

export default PresentationApp;
