"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/[0.05]">
      {/* Background layer to prevent filter from breaking fixed children */}
      <div className="absolute inset-0 bg-[#050505]/70 backdrop-blur-xl -z-10" />
      
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" aria-label="Ir para a página inicial" className="text-xl font-bold font-space text-white tracking-tighter relative z-50">
          Kauan<span className="text-lime-500">Takeshi</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#about" aria-label="Ir para seção Sobre Mim" className="hover:text-lime-500 transition-colors">Sobre</a>
          <a href="#projects" aria-label="Ir para seção de Projetos" className="hover:text-lime-500 transition-colors">Projetos</a>
          <a href="#contact" aria-label="Ir para seção de Contato" className="px-5 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors">
            Vamos Conversar
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white relative z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#050505] flex flex-col items-center justify-center gap-8 z-40">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-space text-white hover:text-lime-500">Sobre</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-space text-white hover:text-lime-500">Projetos</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-space text-lime-500">Contato</a>
        </div>
      )}
    </nav>
  );
}
