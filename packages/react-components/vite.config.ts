import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import fg from 'fast-glob';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: [resolve(__dirname, './src/index.ts'), ...fg.sync(resolve(__dirname, './src/components/**/*.{ts,tsx}'))],
      name: 'react-components',
      fileName: (format, entryName) => (format == 'es' ? `${entryName}.js` : `${entryName}.${format}.js`),
      cssFileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/react-fontawesome',
        'tailwindcss',
        'tailwind-merge',
        'tailwind-variants',
        '@headlessui/react',
        '@headlessui/tailwindcss',
        'react-animate-height',
      ],
    },
    minify: process.env.NODE_ENV === 'production' ? 'esbuild' : false,
    sourcemap: process.env.NODE_ENV !== 'production',
    emptyOutDir: true,
  },
  plugins: [react(), dts({ tsconfigPath: './tsconfig.app.json', insertTypesEntry: true }), tailwindcss()],
});
