import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import * as fs from 'fs';
import * as path from 'path';
import { defineConfig } from 'vite';
import svg from 'vite-plugin-svgo';

const entries = {
  'uofg-web-components': path.resolve(__dirname, 'src/main.ts'),
};

fs.readdirSync(path.resolve(__dirname, 'src', 'components'), { withFileTypes: true, recursive: true }).forEach(file => {
  if (file.isFile() && file.name.startsWith('uofg-') && file.name.endsWith('.svelte')) {
    // @ts-ignore
    entries[path.basename(file.name, '.svelte')] = path.join(file.path, file.name);
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), tailwindcss(), svg()],
  build: {
    outDir: 'dist/uofg-web-components',
    lib: {
      entry: entries,
      name: 'UofGWebComponents',
      formats: ['es'],
      fileName: (format, name) => (format === 'es' ? `${name}.esm.js` : `${name}.${format}.js`),
      cssFileName: 'uofg-web-components',
    },
    minify: process.env.NODE_ENV === 'production' ? 'esbuild' : false,
    sourcemap: process.env.NODE_ENV !== 'production',
    emptyOutDir: true,
  },
});
