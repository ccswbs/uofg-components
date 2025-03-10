import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess({
    script: true,
  }),
  extensions: ['.svelte', '.svg', '.svx'],
  compilerOptions: {
    customElement: true,
  },
};
