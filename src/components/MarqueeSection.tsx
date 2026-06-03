"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MarqueeSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    
    // gsap infinite linear animation
    gsap.to(trackRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 15,
      repeat: -1,
    });
  }, []);

  return (
    <div ref={marqueeRef} className="py-12 bg-lime-500 overflow-hidden relative rotate-[-2deg] scale-105 z-20">
      <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] z-10 pointer-events-none"></div>
      <div ref={trackRef} className="flex whitespace-nowrap will-change-transform w-max">
        {/* Double the content to create a seamless loop */}
        <div className="flex shrink-0 items-center gap-8 md:gap-16 px-4 md:px-8">
          <span className="text-4xl md:text-5xl font-bold font-space text-black uppercase">Frontend Engineer</span>
          <span className="text-4xl font-space text-black/50">✦</span>
          <span className="text-4xl md:text-5xl font-bold font-space text-black uppercase">UI/UX Designer</span>
          <span className="text-4xl font-space text-black/50">✦</span>
          <span className="text-4xl md:text-5xl font-bold font-space text-black uppercase">Creative Developer</span>
          <span className="text-4xl font-space text-black/50">✦</span>
        </div>
        <div className="flex shrink-0 items-center gap-8 md:gap-16 px-4 md:px-8">
          <span className="text-4xl md:text-5xl font-bold font-space text-black uppercase">Frontend Engineer</span>
          <span className="text-4xl font-space text-black/50">✦</span>
          <span className="text-4xl md:text-5xl font-bold font-space text-black uppercase">UI/UX Designer</span>
          <span className="text-4xl font-space text-black/50">✦</span>
          <span className="text-4xl md:text-5xl font-bold font-space text-black uppercase">Creative Developer</span>
          <span className="text-4xl font-space text-black/50">✦</span>
        </div>
      </div>
    </div>
  );
}
