import './styles/main.css'
import {createApp, ref} from 'vue'

window.__VUE_OPTIONS_API__ = true
window.__VUE_PROD_DEVTOOLS__ = false

const app = createApp({})

app.component('AppHeader', {
  template: `
  <header class="w-full bg-white border-b py-3 px-4 sticky top-0 z-10">
    <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between items-center container mx-auto">
      <a href="/" class="font-bold text-blue-500 text-lg">
        Tailwind Components
      </a>

      <div class="space-x-0">
        <a class="btn btn-text btn-primary" href="/">Home</a>
        <a class="btn btn-text btn-default" href="/docs/">Docs</a>
        <a class="btn btn-text btn-default" href="https://github.com/gravitano/vite-tailwind-vanilla" target="_blank"
          rel="noopener">GitHub</a>
      </div>
    </div>
  </header>
  `
})

app.component('AppSidebar', {
  setup() {
    const menus = ref([
      {
        title: 'Alerts',
        path: '/alerts/'
      },
      {
        title: 'Buttons',
        path: '/buttons/'
      },
      {
        title: 'Cards',
        path: '/cards/'
      },
      {
        title: 'Forms',
        path: '/forms/'
      },
      {
        title: 'Lists',
        path: '/lists/'
      },
    ])
    const currentPath = window.location.pathname
    const activeClass = path => ({
      active: currentPath === path
    })
    return {currentPath, activeClass, menus}
  },
  template: `
    <aside class="h-screen sticky top-20 w-full sm:w-3/12">
      <button class="list-header text-xs uppercase mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        Components
      </button>
      <ul class="list list-dense list-hover list-sm list-inline list-tree ml-2">
        <li v-for="menu in menus" :key="menu.title">
          <a :href="menu.path" class="list-item" :class="activeClass(menu.path)">
            {{ menu.title }}
          </a>
        </li>
      </ul>
    </aside>
  `
})

app.component('AppFooter', {
  template: `
    <footer class="container mx-auto text-sm text-gray-500 py-2">
      Copyright &copy; 2022-Present &middot; <a href="https://github.com/gravitano">Warsono</a>
    </footer>
    `
})

app.mount('#app')