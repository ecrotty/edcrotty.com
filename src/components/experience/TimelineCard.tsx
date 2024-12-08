import React from 'react';
import { motion } from 'framer-motion';
import type { Experience } from '../../types/experience';

interface TimelineCardProps {
  experience: Experience;
  index: number;
}

const TimelineCard: React.FC<TimelineCardProps> = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/5 rounded-lg p-6 backdrop-blur-sm relative mb-8"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-white/10 p-2 flex items-center justify-center">
          <div className="text-2xl font-bold text-accent">
            {experience.company.charAt(0)}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-accent">{experience.role}</h3>
          <p className="text-gray-300 mb-2">{experience.company}</p>
          <p className="text-sm text-gray-400 mb-4">{experience.period}</p>
          
          <div className="mb-4">
            <ul className="list-disc list-inside space-y-2">
              {experience.description.map((item, i) => (
                <li key={i} className="text-gray-300">{item}</li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Achievements:</h4>
            <ul className="list-disc list-inside space-y-2">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="text-gray-300">{achievement}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <span 
                key={i}
                className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineCard;