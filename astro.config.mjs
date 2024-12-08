import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// Debug environment variables
console.log('Build-time environment check:');
console.log('Has PUBLIC_GITHUB_USERNAME:', !!process.env.PUBLIC_GITHUB_USERNAME);
console.log('NODE_ENV:', process.env.NODE_ENV);

export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://edcrotty.com',
  // Add environment variables at the root level
  env: {
    PUBLIC_GITHUB_USERNAME: process.env.PUBLIC_GITHUB_USERNAME,
  },
  server: {
    // Log environment variables in dev mode
    host: '0.0.0.0',
    port: 4321,
  },
});
