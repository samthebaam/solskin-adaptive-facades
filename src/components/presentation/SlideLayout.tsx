import React from "react";

interface SlideLayoutProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const SlideLayout: React.FC<SlideLayoutProps> = ({ children, className = "", noPadding = false }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden ${noPadding ? "" : "p-[80px]"} ${className}`}>
      {children}
      <div className="absolute bottom-[30px] left-[80px] text-slide-gray-400 text-[14px] font-body">
        Zurich Soft Robotics GmbH © 2026
      </div>
    </div>
  );
};
