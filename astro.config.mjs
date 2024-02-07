import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
    buildOptions: {
    // Include all files from the src directory
      include: ['src/**/*.astro'],
  },
  site: 'https://cjrdz.github.io',
  base: '/astrolandingPage',
});