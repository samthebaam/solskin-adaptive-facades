import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize, Minimize } from "lucide-react";
import { ScaledSlide } from "./ScaledSlide";

interface PresentationPlayerProps {
  slides: React.ComponentType[];
}

const PresentationPlayer: React.FC<PresentationPlayerProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const hideTimer = React.useRef<ReturnType<typeof setTimeout>>();

  const goNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

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
    setCurrentSlide(0);
  }, [slides]);

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
    <div className="relative h-screen w-screen select-none overflow-hidden bg-background">
      <ScaledSlide key={currentSlide}>
        <CurrentSlideComponent />
      </ScaledSlide>

      <div
        className={`absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-full bg-secondary/80 px-4 py-2 backdrop-blur-sm transition-opacity duration-500 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={goPrev}
          disabled={currentSlide === 0}
          className="rounded-full p-1 text-foreground transition-colors hover:bg-muted disabled:opacity-30"
        >
          <ChevronLeft size={20} />
        </button>

        <span className="min-w-[60px] text-center text-sm font-body text-muted-foreground">
          {currentSlide + 1} / {slides.length}
        </span>

        <button
          onClick={goNext}
          disabled={currentSlide === slides.length - 1}
          className="rounded-full p-1 text-foreground transition-colors hover:bg-muted disabled:opacity-30"
        >
          <ChevronRight size={20} />
        </button>

        <div className="h-5 w-px bg-border" />

        <button
          onClick={toggleFullscreen}
          className="rounded-full p-1 text-foreground transition-colors hover:bg-muted"
        >
          {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
        </button>
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 h-1 bg-secondary transition-opacity duration-500 ${
          showControls ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>

      <div className="absolute inset-y-0 left-0 z-10 w-1/5 cursor-pointer" onClick={goPrev} />
      <div className="absolute inset-y-0 right-0 z-10 w-1/5 cursor-pointer" onClick={goNext} />
    </div>
  );
};

export default PresentationPlayer;
