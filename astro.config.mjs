import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import qwikdev from "@qwikdev/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://Hao2203.github.io',
  integrations: [qwikdev(),tailwind()],
});