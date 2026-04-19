import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.thebsideofeverything.com',
  integrations: [react(), sitemap()],
  vite: {
    ssr: {
      noExternal: ['@vercel/analytics'],
    },
  },
});
