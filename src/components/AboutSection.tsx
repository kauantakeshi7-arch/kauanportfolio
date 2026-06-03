"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const coreSkills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "UI/UX Design", "Figma", "GSAP"
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".about-item", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, { scope: sectionRef });

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="about-item text-4xl md:text-5xl font-bold font-space text-white">Engenharia guiada por <span className="text-lime-500 italic">design</span>.</h2>
          <p className="about-item text-zinc-400 text-lg leading-relaxed">
            Acredito que o código não deve apenas funcionar, mas deve proporcionar uma experiência inesquecível ao usuário. Como desenvolvedor Full-stack com forte inclinação para o Front-end, eu crio a ponte entre lógica robusta e interfaces premium.
          </p>
          <p className="about-item text-zinc-400 text-lg leading-relaxed">
            Trabalho desde a concepção do layout no Figma até o deploy final, garantindo que a performance nunca seja sacrificada pela estética.
          </p>
        </div>
        
        <div className="w-full md:w-1/2">
          <h3 className="about-item text-xl font-bold font-space text-white mb-6">Minha Stack Principal</h3>
          <div className="flex flex-wrap gap-3">
            {coreSkills.map((skill) => (
              <span key={skill} className="about-item px-5 py-2.5 bg-[#0a0a0a] border border-zinc-800 rounded-full text-zinc-300 font-mono text-sm hover:border-lime-500/50 hover:text-white transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
