import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// Ensure environment variables are available
const githubUsername = process.env.PUBLIC_GITHUB_USERNAME;
if (!githubUsername) {
  console.warn('Warning: PUBLIC_GITHUB_USERNAME environment variable is not set');
}

export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://edcrotty.com',
  vite: {
    // Ensure environment variables are properly passed to the client
    define: {
      'import.meta.env.PUBLIC_GITHUB_USERNAME': JSON.stringify(process.env.PUBLIC_GITHUB_USERNAME),
      'import.meta.env.PUBLIC_SITE_DOMAIN': JSON.stringify(process.env.PUBLIC_SITE_DOMAIN),
    },
  },
});
