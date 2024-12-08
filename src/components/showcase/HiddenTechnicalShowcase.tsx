import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../../types/project';

// This component is hidden from view and search engines
// It will be enabled when ready to showcase technical projects
const HiddenTechnicalShowcase: React.FC = () => {
  // Placeholder projects - will be replaced with actual data
  const placeholderProjects: Project[] = [
    {
      title: "Enterprise Infrastructure Project",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      technologies: ["Azure", "Terraform", "Python"],
      githubUrl: "#",
      image: "/projects/placeholder.png",
      metrics: [
        { label: "Uptime", value: "99.9%" },
        { label: "Cost Reduction", value: "40%" }
      ]
    },
    {
      title: "Cloud Migration Solution",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
      technologies: ["AWS", "Docker", "Kubernetes"],
      githubUrl: "#",
      image: "/projects/placeholder.png",
      metrics: [
        { label: "Migration Time", value: "-50%" },
        { label: "Performance", value: "+75%" }
      ]
    }
  ];

  return (
    <div className="hidden" aria-hidden="true">
      {/* Hidden from view but preserved in DOM */}
      <meta name="robots" content="noindex, nofollow" />
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderProjects.map((project, index) => (
              <div 
                key={index}
                className="bg-white/5 rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-sm bg-accent/10 text-accent rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-accent text-xl font-bold">{metric.value}</div>
                        <div className="text-sm text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HiddenTechnicalShowcase;