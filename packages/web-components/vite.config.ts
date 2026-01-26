import { svelte } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import svg from 'vite-plugin-svgo';

// Define __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const entries: Record<string, string> = {
  'uofg-web-components': path.resolve(__dirname, 'src/main.ts'),
};

const componentsDir = path.resolve(__dirname, 'src/components');

if (fs.existsSync(componentsDir)) {
  fs.readdirSync(componentsDir, { withFileTypes: true, recursive: true }).forEach(file => {
    // Note: This logic assumes flattened structure or unique names.
    // If you have deeply nested components, you might need more robust naming logic.
    if (file.isFile() && file.name.startsWith('uofg-') && file.name.endsWith('.svelte')) {
      const name = path.basename(file.name, '.svelte');
      // Ensure file.path is used correctly (Node 20+)
      const fullPath = path.join(file.path || file.parentPath, file.name);
      entries[name] = fullPath;
    }
  });
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), tailwindcss() as any, svg()],
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
