// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import sitemap from '@astrojs/sitemap';
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://fasealterna.es",
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: cloudflare(),
  integrations: [icon(), sitemap()],
  env: {
    schema: {
      CONCERTS_API_ENDPOINT: envField.string({ context: "server", access: "secret" })
    }
  }
});