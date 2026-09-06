// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://timber-baumpflege.de',
  trailingSlash: 'always',
  redirects: {
    '/kiel/': '/schleswig-holstein/',
    '/luebeck/': '/schleswig-holstein/',
  },
  vite: { plugins: [tailwindcss()] },
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' }
  }
});
