import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import Markdown from 'vite-plugin-md';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown({
      headEnabled: true, // <--
      // markdownItOptions: {
      //   html: true,
      //   linkify: true,
      //   typographer: true,
      // },
      markdownItSetup(md) {
        // add anchor links to your H[x] tags
        md.use(require('markdown-it-anchor'));
        // add code syntax highlighting with Prism
        md.use(require('markdown-it-prism'));
      },
    }),
    Pages({
      extensions: ['vue', 'md'],
    }),
    Layouts(),
    Components({
      /* options */
    }),
  ],
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, 'index.html'),
  //       alerts: resolve(__dirname, 'alerts/index.html'),
  //       cards: resolve(__dirname, 'cards/index.html'),
  //       buttons: resolve(__dirname, 'buttons/index.html'),
  //       forms: resolve(__dirname, 'forms/index.html'),
  //       'list-group': resolve(__dirname, 'list-group/index.html'),
  //       timelines: resolve(__dirname, 'timelines/index.html'),
  //       navs: resolve(__dirname, 'navs/index.html'),
  //       breadcrumb: resolve(__dirname, 'breadcrumb/index.html'),
  //       accordions: resolve(__dirname, 'accordions/index.html'),
  //       dropdowns: resolve(__dirname, 'dropdowns/index.html'),
  //       bagdes: resolve(__dirname, 'badges/index.html'),
  //       'button-group': resolve(__dirname, 'button-group/index.html'),
  //       modal: resolve(__dirname, 'modal/index.html'),
  //       navbar: resolve(__dirname, 'navbar/index.html'),
  //       table: resolve(__dirname, 'table/index.html'),
  //       'nav-drawer': resolve(__dirname, 'nav-drawer/index.html'),
  //       'input-group': resolve(__dirname, 'input-group/index.html'),
  //       dashboard: resolve(__dirname, 'dashboard/index.html'),
  //       'dashboard-dark': resolve(__dirname, 'dashboard-dark/index.html'),
  //       toasts: resolve(__dirname, 'toasts/index.html'),
  //       tooltips: resolve(__dirname, 'tooltips/index.html'),
  //       popovers: resolve(__dirname, 'popovers/index.html'),
  //     },
  //   },
  // },
});
