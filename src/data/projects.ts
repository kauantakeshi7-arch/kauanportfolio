import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "clinica-geminus",
    title: "Clínica Geminus",
    category: "Landing Page & Institutional",
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
  // Mais projetos podem ser adicionados aqui no futuro facilmente!
];
