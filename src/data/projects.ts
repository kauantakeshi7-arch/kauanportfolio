import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "clinica-geminus",
    title: "Clínica Geminus",
    category: "Landing Page & Institucional",
    description: "Site institucional responsivo para a Clínica Geminus. Focado em conversão de pacientes via WhatsApp, apresentando o corpo clínico e as especialidades médicas.",
    problem: "A clínica não possuía presença digital sólida, dificultando o agendamento de consultas por novos pacientes que buscam no Google.",
    solution: "Desenvolvimento de uma Landing Page otimizada para velocidade e mobile-first, com navegação intuitiva e chamadas para ação (CTAs) claras direcionando para o atendimento.",
    technologies: [
      { name: "HTML5" },
      { name: "CSS3 Vanilla" },
      { name: "JavaScript" },
      { name: "Mobile First" }
    ],
    image: "/mockups/clinica-real.png",
    githubUrl: "https://github.com/kauantakeshi7-arch/primeiroprojeto",
    liveUrl: "https://kauantakeshi7-arch.github.io/primeiroprojeto/"
  },
  {
    id: "ai-pc-builder",
    title: "AI PC Builder (V5)",
    category: "Inteligência Artificial & Engenharia",
    description: "Plataforma avançada que atua como Arquiteto de Hardware Explicável (XAI). Aplica regras matemáticas determinísticas e IA para gerar setups de PC imunes a gargalos e incompatibilidades.",
    problem: "A escolha de peças para PC é um processo propício a erros (sockets errados, gargalo de GPU/CPU). Modelos generativos tradicionais costumam alucinar peças incompatíveis.",
    solution: "Criação de um motor híbrido: A IA (Gemini) extrai a intenção via NLP, e um Motor Determinístico de Hardware valida a matemática. Inclui Web Scraping em tempo real (Server-Sent Events) e Benchmark Dinâmico de FPS.",
    technologies: [
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Express.js" },
      { name: "Gemini AI" },
      { name: "SSE Streams" }
    ],
    image: "/mockups/ai-pc-builder.png",
    githubUrl: "https://github.com/kauantakeshi7-arch/projeto2prototipo",
    liveUrl: "https://projeto2prototipo.vercel.app"
  }
];
