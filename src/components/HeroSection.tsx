"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const container = useRef<HTMLDivElement>(null);
  
  const subtitleWords = "Me chamo Kauan. Desenvolvo produtos digitais de alta performance onde código robusto e estética premium convergem.".split(" ");
  
  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".hero-title", {
      y: "120%",
      rotateZ: 3,
      opacity: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
      transformOrigin: "left top"
    })
    .fromTo(".hero-desc-word", {
      opacity: 0,
      y: 15,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.02,
      ease: "power2.out",
    }, "-=0.5")
    .from(".hero-cta", {
      scale: 0.9,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
    }, "-=0.3");
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 overflow-hidden"
    >
      {/* Background Glow Otimizado (Radial Gradient sem Blur) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none -z-10" style={{ background: 'radial-gradient(circle, rgba(132, 204, 22, 0.15) 0%, transparent 70%)' }} />
      
      <div className="max-w-4xl text-center space-y-6 md:space-y-8 z-10">
        <h1 className="text-[2.5rem] leading-[1.1] md:text-7xl font-bold tracking-tight font-syne text-white flex flex-col items-center">
          <span className="block overflow-hidden pb-1 md:pb-4">
            <span className="hero-title block origin-bottom-left">Marcas excelentes falham</span>
          </span>
          <span className="block overflow-hidden pb-1 md:pb-4">
            <span className="hero-title block origin-bottom-left">
              por interfaces <span className="bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-emerald-500 italic pr-2">comuns.</span>
            </span>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-300 font-medium font-space max-w-2xl mx-auto leading-relaxed flex flex-wrap justify-center gap-x-[0.25em]">
          {subtitleWords.map((word, index) => (
            <span key={index} className="hero-desc-word opacity-0">
              {word}
            </span>
          ))}
        </p>
        
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 md:pt-8">
          <a href="#projects" aria-label="Rolar para seção de Projetos" className="px-8 py-4 bg-lime-500 text-black font-semibold rounded-full hover:bg-lime-400 transition-colors flex items-center gap-2">
            Ver Projetos <ArrowDown className="w-5 h-5" aria-hidden="true" />
          </a>
          <a href="#contact" aria-label="Rolar para seção de Contato" className="px-8 py-4 bg-transparent border border-zinc-700 text-white font-semibold rounded-full hover:bg-zinc-800 transition-colors">
            Iniciar Projeto
          </a>
        </div>
      </div>
    </section>
  );
}
