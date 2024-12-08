import React from 'react';
import type { ExperienceType } from '../../types/experience';

interface ExperienceFilterProps {
  activeFilter: ExperienceType;
  onFilterChange: (filter: ExperienceType) => void;
}

const filters: { label: string; value: ExperienceType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Leadership', value: 'leadership' },
  { label: 'Infrastructure', value: 'infrastructure' },
  { label: 'Cloud', value: 'cloud' }
];

const ExperienceFilter: React.FC<ExperienceFilterProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {filters.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            activeFilter === value
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

export default ExperienceFilter;