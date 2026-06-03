export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/50 bg-[#050505] py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-400 text-sm">
          © {currentYear} Kauan Takeshi. Todos os direitos reservados.
        </p>
        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="https://github.com/kauantakeshi7-arch" aria-label="Visitar GitHub de Kauan Takeshi" target="_blank" rel="noreferrer" className="hover:text-lime-500 transition-colors">
            GitHub
          </a>
          <a href="#" aria-label="Visitar LinkedIn de Kauan Takeshi" className="hover:text-lime-500 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
