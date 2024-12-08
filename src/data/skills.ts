import type { SkillGroup } from '../types/skill';

export const skillGroups: SkillGroup[] = [
  {
    category: 'languages',
    skills: [
      { name: 'KQL', level: 80, category: 'languages' },
      { name: 'PowerShell', level: 80, category: 'languages' },
      { name: 'Python', level: 80, category: 'languages' },
      { name: 'Terraform', level: 80, category: 'languages' }
    ]
  },
  {
    category: 'frameworks',
    skills: [
      { name: 'ITIL/ITSM', level: 95, category: 'frameworks' },
      { name: 'Agile', level: 90, category: 'frameworks' },
      { name: 'DevOps', level: 90, category: 'frameworks' },
      { name: 'Zero Trust', level: 90, category: 'frameworks' }
    ]
  },
  {
    category: 'tools',
    skills: [
      { name: 'Linux', level: 95, category: 'tools' },
      { name: 'VMware', level: 90, category: 'tools' },
      { name: 'AI', level: 85, category: 'tools' },
      { name: 'Azure', level: 85, category: 'tools' },
      { name: 'Windows Server', level: 85, category: 'tools' }
    ]
  },
  {
    category: 'soft-skills',
    skills: [
      { name: 'Team Mentoring', level: 95, category: 'soft-skills' },
      { name: 'Infrastructure Design', level: 90, category: 'soft-skills' },
      { name: 'Leadership', level: 90, category: 'soft-skills' },
      { name: 'Problem Solving', level: 90, category: 'soft-skills' },
      { name: 'Vendor Management', level: 90, category: 'soft-skills' }
    ]
  }
];
