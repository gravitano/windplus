import './styles/main.css'
import {createApp, ref} from 'vue'

window.__VUE_OPTIONS_API__ = true
window.__VUE_PROD_DEVTOOLS__ = false

const app = createApp({})

const activeClass = (path, classes = 'active', inactiveClass = 'inactive') => {
  const currentPath = window.location.pathname
  console.log({currentPath})
  return currentPath === path ? classes : inactiveClass
}

app.component('AppHeader', {
  setup() {
    const menus = ref([
      {
        title: 'Home',
        path: '/'
      },
      {
        title: 'Docs',
        path: '/alerts/'
      },
    ])
    return {activeClass, menus}
  },
  template: `
  <header class="w-full bg-white border-b py-3 px-4 sticky top-0 z-10">
    <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between items-center container mx-auto">
      <a href="/" class="font-bold text-blue-500 text-lg">
        Tailwind Components
      </a>

      <div class="space-x-0">
        <a v-for="menu in menus" :key="menu.title" class="btn btn-text" :class="activeClass(menu.path, 'btn-primary', 'btn-default')" :href="menu.path">
          {{ menu.title }}
        </a>
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
    return {activeClass, menus}
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
    <footer class="container mx-auto text-sm text-gray-500 py-3 flex justify-center border-t">
      Copyright &copy; 2022-Present &middot; <a href="https://github.com/gravitano">Warsono</a>
    </footer>
    `
})

app.component('app-layout', {
  props: {
    hideSidebar: Boolean,
    fluid: Boolean
  },
  template: `
  <app-header></app-header>

  <div class="flex gap-6 mx-auto" :class="fluid ? '' : 'container py-4'">
    <app-sidebar v-if="!hideSidebar"></app-sidebar>

    <main class="w-full">
      <slot></slot>
    </main>
  </div>

  <app-footer></app-footer>
  `
})

app.mount('#app')