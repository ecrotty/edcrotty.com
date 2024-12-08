export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

export type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack';