import React from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '../../types/skill';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
        <span className="text-sm text-accent">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="h-full bg-accent rounded-full"
        />
      </div>
    </div>
  );
};

export default SkillBar;