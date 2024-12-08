import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// Debug environment variables
console.log('Build-time environment variables:');
console.log('PUBLIC_GITHUB_USERNAME:', process.env.PUBLIC_GITHUB_USERNAME);
console.log('NODE_ENV:', process.env.NODE_ENV);

export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://edcrotty.com',
  vite: {
    // Ensure environment variables are properly passed to the client
    define: {
      'import.meta.env.PUBLIC_GITHUB_USERNAME': JSON.stringify(process.env.PUBLIC_GITHUB_USERNAME),
    },
    // Add build-time logging
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // Log any build warnings
          console.log('Build warning:', warning);
          warn(warning);
        }
      }
    }
  },
});
