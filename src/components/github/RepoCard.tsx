import React from 'react';
import { motion } from 'framer-motion';
import type { Repository } from '../../types/github';

interface RepoCardProps {
  repo: Repository;
  index: number;
}

const RepoCard: React.FC<RepoCardProps> = ({ repo, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/5 rounded-lg p-4 sm:p-6 hover:bg-white/10 transition-all h-full w-full"
    >
      <div className="flex items-center gap-3 mb-4">
        <svg 
          className="w-6 h-6 text-accent flex-shrink-0" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
        <h3 className="text-lg sm:text-xl font-bold truncate flex-1">{repo.name}</h3>
      </div>
      <p className="text-gray-300 mb-4 text-sm sm:text-base line-clamp-2">{repo.description || 'No description available'}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {repo.language && (
          <span 
            className="px-2 py-1 text-xs sm:text-sm rounded-full flex items-center gap-1 flex-shrink-0"
            style={{
              backgroundColor: repo.language_color ? `${repo.language_color}20` : 'rgba(255,255,255,0.1)',
              color: repo.language_color || 'rgba(255,255,255,0.9)'
            }}
          >
            <span 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: repo.language_color || 'rgba(255,255,255,0.9)' }}
            />
            {repo.language}
          </span>
        )}
        {repo.topics && repo.topics.slice(0, 3).map((topic) => (
          <span
            key={topic}
            className="px-2 py-1 text-xs sm:text-sm bg-accent/10 text-accent rounded-full flex-shrink-0"
          >
            {topic}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-xs sm:text-sm text-gray-300">{repo.stargazers_count}</span>
        </div>
        <div className="flex items-center gap-1">
          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 21a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zm-3.25-1.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zm-3-12.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM2.5 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zM18.25 6.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM15 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0z" clipRule="evenodd"/>
          </svg>
          <span className="text-xs sm:text-sm text-gray-300">{repo.forks_count}</span>
        </div>
      </div>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full text-center py-2 bg-accent hover:bg-accent/90 transition-colors rounded-lg text-sm sm:text-base"
      >
        View Repository
      </a>
    </motion.div>
  );
};

export default RepoCard;
