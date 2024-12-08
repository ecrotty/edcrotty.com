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
      'process.env.PUBLIC_SITE_DESCRIPTION': JSON.stringify(process.env.PUBLIC_SITE_DESCRIPTION),
      'process.env.PUBLIC_SITE_DOMAIN': JSON.stringify(process.env.PUBLIC_SITE_DOMAIN),
      'process.env.PUBLIC_SITE_URL': JSON.stringify(process.env.PUBLIC_SITE_URL),
    },
    ssr: {
      noExternal: ['@astrojs/*']
    }
  }
});
