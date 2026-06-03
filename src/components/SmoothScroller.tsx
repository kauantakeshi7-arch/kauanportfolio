"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";

function AnchorScroller() {
  const lenis = useLenis();

  useEffect(() => {
    const handleHashClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (target && target.hash && target.hash.startsWith('#')) {
        e.preventDefault();
        lenis?.scrollTo(target.hash, { offset: -80 }); // -80px para descontar a Navbar
      }
    };

    document.addEventListener('click', handleHashClick);
    return () => document.removeEventListener('click', handleHashClick);
  }, [lenis]);

  return null;
}

export default function SmoothScroller({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      <AnchorScroller />
      {children}
    </ReactLenis>
  );
}
