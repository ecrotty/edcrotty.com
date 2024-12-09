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
