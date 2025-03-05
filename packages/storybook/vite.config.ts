import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';

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
