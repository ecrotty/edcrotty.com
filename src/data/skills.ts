import type { SkillGroup } from '../types/skill';

export const skillGroups: SkillGroup[] = [
  {
    category: 'languages',
    skills: [
      { name: 'Python', level: 75, category: 'languages' },
      { name: 'PowerShell', level: 75, category: 'languages' },
      { name: 'Bash', level: 75, category: 'languages' },
      { name: 'KQL', level: 75, category: 'languages' }
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
      { name: 'Azure', level: 85, category: 'tools' },
      { name: 'VMware', level: 90, category: 'tools' },
      { name: 'Windows Server', level: 85, category: 'tools' },
      { name: 'Linux', level: 95, category: 'tools' },
      { name: 'AI', level: 85, category: 'tools' }
    ]
  },
  {
    category: 'soft-skills',
    skills: [
      { name: 'Leadership', level: 90, category: 'soft-skills' },
      { name: 'Infrastructure Design', level: 90, category: 'soft-skills' },
      { name: 'Problem Solving', level: 90, category: 'soft-skills' },
      { name: 'Team Mentoring', level: 95, category: 'soft-skills' },
      { name: 'Vendor Management', level: 85, category: 'soft-skills' }
    ]
  }
];
