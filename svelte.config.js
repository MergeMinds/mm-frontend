import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $lib: './src/lib',
      $services: './src/services',
      $api: './src/services/api',
      $models: './src/services/models',
      $components: './src/lib/components',
      $modules: './src/lib/modules',
      $ui: './src/lib/components/ui',
    },
  },
  preprocess: vitePreprocess(),
};
export default config;
