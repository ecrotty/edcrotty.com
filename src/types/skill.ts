export interface Skill {
  name: string;
  level: number; // 0-100
  category: SkillCategory;
}

export type SkillCategory = 'languages' | 'frameworks' | 'tools' | 'soft-skills';

export interface SkillGroup {
  category: SkillCategory;
  skills: Skill[];
}