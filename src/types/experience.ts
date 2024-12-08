export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  achievements: string[];
  logo?: string;
}

export type ExperienceType = 'all' | 'infrastructure' | 'cloud' | 'leadership';