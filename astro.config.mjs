// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import netlify from '@astrojs/netlify';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://fasealterna.netlify.app",
  vite: {
    plugins: [tailwindcss()],
  },

  adapter: netlify(),
  integrations: [react(), icon()],
});