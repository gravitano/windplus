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
        timelines: resolve(__dirname, 'timelines/index.html'),
        navs: resolve(__dirname, 'navs/index.html'),
        breadcrumb: resolve(__dirname, 'breadcrumb/index.html'),
        accordions: resolve(__dirname, 'accordions/index.html'),
        dropdowns: resolve(__dirname, 'dropdowns/index.html'),
        bagdes: resolve(__dirname, 'badges/index.html'),
        'button-group': resolve(__dirname, 'button-group/index.html'),
        modal: resolve(__dirname, 'modal/index.html'),
        navbar: resolve(__dirname, 'navbar/index.html'),
        table: resolve(__dirname, 'table/index.html'),
        'nav-drawer': resolve(__dirname, 'nav-drawer/index.html'),
        'input-group': resolve(__dirname, 'input-group/index.html'),
        dashboard: resolve(__dirname, 'dashboard/index.html'),
        'dashboard-dark': resolve(__dirname, 'dashboard-dark/index.html'),
        toasts: resolve(__dirname, 'toasts/index.html'),
        tooltips: resolve(__dirname, 'tooltips/index.html'),
        popovers: resolve(__dirname, 'popovers/index.html'),
      },
    },
  },
});
