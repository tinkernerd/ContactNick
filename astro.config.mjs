// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon()],
  env: {
    schema: {
      PUBLIC_FORMSPREE_ENDPOINT: envField.string({ context: "client", access: "public" }),      }
  },
});