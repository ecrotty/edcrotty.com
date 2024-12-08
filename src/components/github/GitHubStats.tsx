import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import RepoCard from './RepoCard';
import type { Repository } from '../../types/github';

interface GitHubStatsProps {
  username: string;
  initialRepos: Repository[];
}

const GitHubStats: React.FC<GitHubStatsProps> = ({ username, initialRepos }) => {
  const [repos, setRepos] = useState<Repository[]>(initialRepos);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      if (!username) {
        setError('GitHub username not configured');
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        const filteredRepos = data
          .filter((repo: any) => !repo.fork)
          .slice(0, 6)
          .map((repo: any) => ({
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            language: repo.language,
            language_color: null,
            private: repo.private,
            updated_at: repo.updated_at,
            topics: repo.topics || []
          }));

        setRepos(filteredRepos);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
      } finally {
        setLoading(false);
      }
    };

    // Only fetch if we don't have initial repos
    if (initialRepos.length === 0) {
      fetchRepos();
    }
  }, [username, initialRepos]);

  if (!username) {
    return (
      <section className="py-20 bg-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured GitHub Projects</h2>
          <div className="text-center text-red-400">
            GitHub integration is not properly configured. Please check the environment variables in your Netlify dashboard.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white/5 w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4 w-full"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Featured GitHub Projects</h2>
        
        {loading && (
          <div className="text-center text-gray-300">
            Loading repositories...
          </div>
        )}

        {error && (
          <div className="text-center text-red-400">
            {error}. Please check the environment variables in your Netlify dashboard.
          </div>
        )}

        {!loading && !error && repos.length === 0 && (
          <div className="text-center text-gray-300">
            No repositories found.
          </div>
        )}

        {!loading && !error && repos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {repos.map((repo, index) => (
              <div 
                key={repo.name} 
                className={`w-full ${
                  index === repos.length - 1 && repos.length % 2 !== 0
                    ? 'md:col-span-2'
                    : ''
                }`}
              >
                <RepoCard repo={repo} index={index} />
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 transition-colors rounded-full text-white font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View All Repositories
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default GitHubStats;
