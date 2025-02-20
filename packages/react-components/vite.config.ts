import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'react-components',
      fileName: format => (format == 'es' ? 'index.js' : `index.${format}.js`),
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
      ],
    },
    minify: process.env.NODE_ENV === 'production' ? 'esbuild' : false,
    sourcemap: process.env.NODE_ENV !== 'production',
    emptyOutDir: true,
  },
  plugins: [react(), dts({ rollupTypes: true, tsconfigPath: './tsconfig.app.json' }), tailwindcss()],
});
