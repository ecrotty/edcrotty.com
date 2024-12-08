import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TimelineCard from './TimelineCard';
import ExperienceFilter from './ExperienceFilter';
import { experiences } from '../../data/experience';
import type { ExperienceType } from '../../types/experience';

const Timeline: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ExperienceType>('all');

  const filteredExperiences = experiences.filter(experience => {
    if (activeFilter === 'all') return true;
    return experience.technologies.some(tech => 
      tech.toLowerCase().includes(activeFilter.toLowerCase())
    );
  });

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Journey</h2>
        
        <ExperienceFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-accent/20" />
          
          {filteredExperiences.map((experience, index) => (
            <TimelineCard
              key={`${experience.company}-${experience.period}`}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;