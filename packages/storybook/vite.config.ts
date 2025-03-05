import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    svelte({
      extensions: ['.svelte', '.svg'],
      preprocess: vitePreprocess(),
      compilerOptions: {
        customElement: true,
      },
    }),
    tailwindcss(),
  ],
});
