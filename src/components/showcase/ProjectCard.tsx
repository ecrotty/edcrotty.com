import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
    >
      <div className="relative aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          {project.metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-accent text-xl font-bold">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm bg-accent/10 text-accent rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center py-2 rounded bg-accent hover:bg-accent/90 transition-colors"
          >
            View Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 rounded bg-white/10 hover:bg-white/20 transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;