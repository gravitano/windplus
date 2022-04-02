import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        alerts: resolve(__dirname, 'alerts/index.html'),
        cards: resolve(__dirname, 'cards/index.html'),
        buttons: resolve(__dirname, 'buttons/index.html'),
        forms: resolve(__dirname, 'forms/index.html'),
        lists: resolve(__dirname, 'lists/index.html'),
      },
    },
  },
});