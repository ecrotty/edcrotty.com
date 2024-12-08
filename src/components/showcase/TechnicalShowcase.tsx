import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import { projects } from '../../data/projects';
import type { ProjectCategory } from '../../types/project';

const TechnicalShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.technologies.some(tech => 
      tech.toLowerCase().includes(activeCategory)
    )
  );

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Projects</h2>
        
        <ProjectFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechnicalShowcase;