import React from 'react';
import { motion } from 'framer-motion';
import SkillBar from './SkillBar';
import type { SkillGroup as ISkillGroup } from '../../types/skill';

interface SkillGroupProps {
  group: ISkillGroup;
}

const categoryTitles = {
  languages: 'Programming Languages',
  frameworks: 'Frameworks & Libraries',
  tools: 'Tools & Technologies',
  'soft-skills': 'Professional Skills'
};

const SkillGroup: React.FC<SkillGroupProps> = ({ group }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/5 rounded-lg p-6"
    >
      <h3 className="text-xl font-bold mb-4">{categoryTitles[group.category]}</h3>
      <div>
        {group.skills.map((skill, index) => (
          <SkillBar key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillGroup;