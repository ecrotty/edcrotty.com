import type { Repository, GitHubGraphQLResponse } from '../types/github';
import { PINNED_REPOS_QUERY } from '../constants/github';

export async function fetchGitHubData() {
  const githubUsername = process.env.PUBLIC_GITHUB_USERNAME;
  const githubToken = process.env.GITHUB_TOKEN;
  let repos: Repository[] = [];
  let usesPinnedRepos = false;

  if (githubUsername) {
    try {
      if (githubToken) {
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${githubToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: PINNED_REPOS_QUERY,
            variables: { username: githubUsername }
          })
        });

        if (response.ok) {
          const data: GitHubGraphQLResponse = await response.json();
          if (data.data?.user?.pinnedItems?.nodes) {
            repos = data.data.user.pinnedItems.nodes.map(node => ({
              name: node.name,
              description: node.description,
              html_url: node.url,
              stargazers_count: node.stargazerCount,
              forks_count: node.forkCount,
              language: node.primaryLanguage?.name || null,
              language_color: node.primaryLanguage?.color || null,
              private: node.isPrivate,
              updated_at: node.updatedAt,
              topics: node.repositoryTopics.nodes.map(topic => topic.topic.name)
            }));
            usesPinnedRepos = true;
          }
        }
      }

      if (!usesPinnedRepos) {
        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`);
        if (response.ok) {
          const data = await response.json();
          repos = data
            .filter((repo: any) => !repo.fork && !repo.private)
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
        }
      }
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
    }
  }

  return { repos, usesPinnedRepos, githubUsername };
}
