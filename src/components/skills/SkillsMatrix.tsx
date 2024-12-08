import React from 'react';
import { motion } from 'framer-motion';
import SkillGroup from './SkillGroup';
import { skillGroups } from '../../data/skills';

const SkillsMatrix: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <SkillGroup key={group.category} group={group} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsMatrix;