interface Project {
  title: string;
  description: string;
  repoName: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
}

const getGithubUrl = (repoName: string) => {
  const username = import.meta.env.PUBLIC_GITHUB_USERNAME;
  if (!username) {
    throw new Error('PUBLIC_GITHUB_USERNAME environment variable is not set');
  }
  return `https://github.com/${username}/${repoName}`;
};

const getLiveUrl = (subdomain: string) => {
  const domain = import.meta.env.PUBLIC_SITE_DOMAIN;
  if (!domain) {
    throw new Error('PUBLIC_SITE_DOMAIN environment variable is not set');
  }
  return `https://${subdomain}.${domain}`;
};

export const projects: Project[] = [
  {
    title: "Authentication Service",
    description: "A secure authentication service built with AWS Cognito and Lambda",
    repoName: "auth-service",
    image: "/projects/auth-service.png",
    technologies: ["Terraform", "AWS", "Python", "CloudFormation"]
  },
  {
    title: "Cloud Automation",
    description: "Infrastructure as Code templates and automation scripts",
    repoName: "cloud-automation",
    image: "/projects/cloud-automation.png",
    technologies: ["React", "TypeScript", "Storybook", "Jest"]
  },
  {
    title: "React Component Library",
    description: "A collection of reusable React components",
    repoName: "react-components",
    image: "/projects/react-components.png",
    technologies: ["React", "TypeScript", "Storybook", "Jest"],
    liveUrl: getLiveUrl('components')
  }
];

// Add githubUrl to each project
export const projectsWithUrls = projects.map(project => ({
  ...project,
  githubUrl: getGithubUrl(project.repoName)
}));
