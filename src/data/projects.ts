import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: "Enterprise Authentication Service",
    description: "Secure, scalable authentication system serving multiple enterprise applications",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Docker"],
    githubUrl: "https://github.com/ecrotty/auth-service",
    image: "/projects/auth-service.png",
    metrics: [
      { label: "Users", value: "100K+" },
      { label: "Uptime", value: "99.99%" },
      { label: "Response Time", value: "<100ms" }
    ]
  },
  {
    title: "Cloud Infrastructure Automation",
    description: "Infrastructure as Code solution for AWS cloud resources",
    technologies: ["Terraform", "AWS", "Python", "CloudFormation"],
    githubUrl: "https://github.com/ecrotty/cloud-automation",
    image: "/projects/cloud-automation.png",
    metrics: [
      { label: "Resources", value: "500+" },
      { label: "Cost Savings", value: "40%" },
      { label: "Deployment Time", value: "-60%" }
    ]
  },
  {
    title: "React Component Library",
    description: "Reusable UI component library with modern design system",
    technologies: ["React", "TypeScript", "Storybook", "Jest"],
    githubUrl: "https://github.com/ecrotty/react-components",
    liveUrl: "https://components.edcrotty.com",
    image: "/projects/component-library.png",
    metrics: [
      { label: "Components", value: "50+" },
      { label: "Test Coverage", value: "95%" },
      { label: "Bundle Size", value: "12KB" }
    ]
  }
];