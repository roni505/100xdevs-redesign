"use client";

import { useRef, useState } from "react";

const OpenSourceHero = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(
    null,
  );
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!overlayRef.current) return;
    const bounds = overlayRef.current.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  const maskStyle = mousePos
    ? {
        maskImage: `radial-gradient(circle 160px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)`,
        WebkitMaskImage: `radial-gradient(circle 160px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,1) 100%)`,
      }
    : {};

  return (
    <div className="mb-16 flex h-[calc(100vh-12rem)] w-full items-center justify-center px-5 text-white lg:px-0">
      <div
        className="group relative h-[calc(100vh-12rem)] w-full bg-[url(/heroBgImg.svg)] bg-cover bg-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="absolute bottom-0 h-1/6 w-full bg-gradient-to-t from-black/60 to-transparent"></div>
        <div
          ref={overlayRef}
          className="absolute inset-0 z-0 bg-black/90 transition-opacity duration-500"
          style={maskStyle}
        ></div>
        <div className="relative z-10 flex h-[calc(100vh-12rem)] flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(0,0,0,300),_transparent_70%)]">
          <h1 className="text-center text-4xl leading-tight font-medium sm:text-5xl md:text-6xl lg:text-7xl">
            Built Together
          </h1>
          {/* <p className="mt-8 w-full text-center text-lg md:w-[30rem]">
            See how learners like you broke into tech, landed jobs, and built
            projects after taking our courses.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default OpenSourceHero;
