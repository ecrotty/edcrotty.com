import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://edcrotty.com',
  output: 'static',
  vite: {
    define: {
      'process.env.PUBLIC_GITHUB_USERNAME': JSON.stringify(process.env.PUBLIC_GITHUB_USERNAME),
    },
    ssr: {
      noExternal: ['@astrojs/*']
    }
  }
});
