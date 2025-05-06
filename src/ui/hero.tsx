"use client";

import { useRef, useState } from "react";
import Button from "./button";
import DevTrust from "./dev-trust";

const Hero = () => {
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
    <div className="flex h-[calc(100vh-3rem)] w-full items-center justify-center pt-28 text-white">
      <div
        className="group relative h-[calc(100vh-3rem)] w-full bg-[url(/heroBgImg.svg)] bg-cover bg-center"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={overlayRef}
          className="absolute inset-0 z-0 bg-black/93 transition-opacity duration-500"
          style={maskStyle}
        ></div>

        <div className="relative z-10 flex h-[calc(100vh-3rem)] flex-col items-center justify-center bg-[radial-gradient(circle_at_center,_rgba(0,0,0,300),_transparent_70%)]">
          <div className="w-2xl">
            <h1 className="text-center text-7xl leading-tight font-medium">
              100xDevs, because 10x ain't enough!
            </h1>
          </div>
          <div className="mt-14 flex gap-3">
            <Button varient="primary">View Courses</Button>
            <Button varient="secondary">View Notes</Button>
          </div>
          <div>
            <DevTrust />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
