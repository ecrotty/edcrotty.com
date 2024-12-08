import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Octokit } from 'octokit';
import RepoCard from './RepoCard';
import type { Repository } from '../../types/github';

const GitHubStats: React.FC = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const octokit = new Octokit();
        const response = await octokit.request('GET /users/ecrotty/repos', {
          username: 'ecrotty',
          sort: 'updated',
          per_page: 2,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        });

        const filteredRepos = response.data
          .filter((repo: Repository) => !repo.fork)
          .slice(0, 2);

        setRepos(filteredRepos);
      } catch (err) {
        setError('Failed to fetch repositories');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="py-20 px-4 bg-white/5">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Featured GitHub Projects</h2>
        
        {loading && (
          <div className="text-center text-gray-300">
            Loading repositories...
          </div>
        )}

        {error && (
          <div className="text-center text-red-400">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.map((repo, index) => (
              <RepoCard key={repo.name} repo={repo} index={index} />
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <a
            href="https://github.com/ecrotty"
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