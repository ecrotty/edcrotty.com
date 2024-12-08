export interface Repository {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  language_color?: string | null;
  private: boolean;
  updated_at: string;
  topics: string[];
}

export interface GitHubGraphQLResponse {
  user: {
    pinnedItems: {
      nodes: Array<{
        name: string;
        description: string | null;
        url: string;
        stargazerCount: number;
        forkCount: number;
        primaryLanguage: {
          name: string;
          color: string;
        } | null;
        isPrivate: boolean;
        updatedAt: string;
        repositoryTopics: {
          nodes: Array<{
            topic: {
              name: string;
            };
          }>;
        };
      }>;
    };
  };
}
