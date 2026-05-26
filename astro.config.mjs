// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.versatilesoc.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    assets: 'assets',
  },
  integrations: [
    sitemap(),
    icon({
      iconDir: 'src/icons',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
