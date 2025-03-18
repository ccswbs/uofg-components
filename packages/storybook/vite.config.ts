import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// @ts-ignore
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svg from 'vite-plugin-svgo';
export default defineConfig({
  plugins: [
    react(),
    svelte({
      preprocess: vitePreprocess(),
      compilerOptions: {
        customElement: true,
      },
    }),
    tailwindcss(),
    svg(),
  ],
});
