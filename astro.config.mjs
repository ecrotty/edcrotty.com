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
  output: 'static',
  // Ensure environment variables are available
  vite: {
    define: {
      'process.env.PUBLIC_GITHUB_USERNAME': JSON.stringify(process.env.PUBLIC_GITHUB_USERNAME),
    },
    ssr: {
      noExternal: ['@astrojs/*']
    }
  }
});
