// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://fasealterna.es",
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: netlify(),
  integrations: [icon(), sitemap()],
  env: {
    schema: {
      CONCERTS_API_ENDPOINT: envField.string({ context: "server", access: "secret" })
    }
  }
});