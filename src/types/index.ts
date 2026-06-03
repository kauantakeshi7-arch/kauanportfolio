export interface Technology {
  name: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  technologies: Technology[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}
