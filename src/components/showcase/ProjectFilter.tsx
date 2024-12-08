import React from 'react';
import type { ProjectCategory } from '../../types/project';

interface ProjectFilterProps {
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
}

const categories: { label: string; value: ProjectCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
  { label: 'Full Stack', value: 'fullstack' },
];

const ProjectFilter: React.FC<ProjectFilterProps> = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onCategoryChange(value)}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            activeCategory === value
              ? 'bg-accent text-white'
              : 'bg-white/5 text-gray-300 hover:bg-white/10'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;