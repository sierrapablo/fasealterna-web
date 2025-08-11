// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  prefetch: true,
  site: 'https://fasealterna.es',
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: node({ mode: 'standalone' }),
  integrations: [icon(), sitemap()],
  env: {
    schema: {
      CONCERTS_API_ENDPOINT: envField.string({ context: 'server', access: 'secret' }),
    },
  },
});
