import '../styles/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createHead } from '@vueuse/head'; // <--

import 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
// import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/themes/prism-tomorrow.css';
import Docs from './components/Docs.vue';

const app = createApp(App);

app.component('Docs', Docs);

app.use(router);

const head = createHead(); // <--
app.use(head); // <--

app.mount('#app');
