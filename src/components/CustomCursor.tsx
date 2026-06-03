"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer devices (desktops)
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsDesktop(true);
    }

    if (!isDesktop || !cursorRef.current) return;

    const cursor = cursorRef.current;
    
    // Use quickSetter for extreme performance bypassing React state
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const handleMouseLeave = () => gsap.to(cursor, { opacity: 0, duration: 0.3 });
    const handleMouseEnter = () => gsap.to(cursor, { opacity: 1, duration: 0.3 });

    const handleLinkHover = () => gsap.to(cursor, { scale: 2.5, backgroundColor: "rgba(132, 204, 22, 0.2)", border: "1px solid rgba(132, 204, 22, 0.8)", duration: 0.3 });
    const handleLinkLeave = () => gsap.to(cursor, { scale: 1, backgroundColor: "rgba(255, 255, 255, 1)", border: "0px solid transparent", duration: 0.3 });

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    // Attach hover effects to links and buttons
    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleLinkHover);
      el.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkHover);
        el.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-exclusion"
      style={{ opacity: 0 }}
    />
  );
}
