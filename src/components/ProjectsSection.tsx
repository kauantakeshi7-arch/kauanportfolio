"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// Tilt component wrapper for high performance
function ProjectCardTilt({ imageUrl }: { imageUrl?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current || !window.matchMedia("(pointer: fine)").matches) return;
    
    const card = cardRef.current;
    
    // Setup quickSetters for absolute performance (bypassing React)
    const setRotX = gsap.quickSetter(card, "rotateX", "deg");
    const setRotY = gsap.quickSetter(card, "rotateY", "deg");

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation (-10 to 10 degrees)
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      
      setRotX(rotateX);
      setRotY(rotateY);
    };

    const handleMouseLeave = () => {
      gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: "power3.out" });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div 
      className="w-full md:w-1/2 aspect-video bg-zinc-900 rounded-2xl border border-transparent transition-colors duration-500 group-hover:border-white/10 overflow-hidden relative shadow-2xl"
      style={{ perspective: "1000px" }}
    >
      <div ref={cardRef} className="w-full h-full will-change-transform transform-style-3d">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt="Mockup do projeto" 
            fill 
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-zinc-700 transition-transform duration-700 ease-out group-hover:scale-110 bg-gradient-to-br from-zinc-900 to-black">
            <span className="font-space tracking-widest uppercase text-sm">[ Imagem Indisponível ]</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.project-card');
    
    cards.forEach((card, i) => {
      gsap.from(card as HTMLElement, {
        scrollTrigger: {
          trigger: card as HTMLElement,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power3.out"
      });
    });
  }, { scope: sectionRef });

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-space text-white mb-4">Estudos de Caso</h2>
        <p className="text-zinc-400 text-lg max-w-2xl">
          Projetos selecionados onde resolvi problemas complexos de negócio através de engenharia e design focados no usuário.
        </p>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <div key={project.id} className={`project-card flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} group perspective-1000`}>
            
            {/* Imagem do Projeto com Efeito 3D Tilt Seguro */}
            <ProjectCardTilt imageUrl={project.image} />

            {/* Conteúdo do Projeto */}
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <span className="text-lime-500 font-mono text-sm tracking-wider uppercase">{project.category}</span>
                <h3 className="text-3xl font-bold font-space text-white mt-2">{project.title}</h3>
              </div>
              
              <p className="text-zinc-400 leading-relaxed text-lg">
                {project.description}
              </p>

              <div className="space-y-4">
                <div className="bg-[#111] p-4 rounded-xl border border-zinc-800/50">
                  <h4 className="text-white font-semibold mb-1">O Problema</h4>
                  <p className="text-zinc-400 text-sm">{project.problem}</p>
                </div>
                <div className="bg-[#111] p-4 rounded-xl border border-zinc-800/50">
                  <h4 className="text-white font-semibold mb-1">A Solução</h4>
                  <p className="text-zinc-400 text-sm">{project.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map(tech => (
                  <span key={tech.name} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-300 font-mono">
                    {tech.name}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                {project.liveUrl && (
                  <a href={project.liveUrl} aria-label={`Ver site ao vivo do projeto ${project.title}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors">
                    Ver Site Ao Vivo <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} aria-label={`Ver código no GitHub do projeto ${project.title}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white font-semibold rounded-full hover:bg-zinc-800 transition-colors border border-zinc-800">
                    <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg> Código
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
