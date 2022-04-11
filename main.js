import './styles/main.css'
import {createApp, ref, toRefs, watch, onMounted, onUnmounted} from 'vue'

window.__VUE_OPTIONS_API__ = true
window.__VUE_PROD_DEVTOOLS__ = false

const app = createApp({
  data: () => ({
    showSidebar: false
  })
})

const activeClass = (path, classes = 'active', inactiveClass = 'inactive') => {
  const currentPath = window.location.pathname
  return currentPath === path ? classes : inactiveClass
}

const useMenu = (props, emit) => {
  const {modelValue} = toRefs(props)
  const isOpen = ref(modelValue.value)

  const toggle = () => {
    isOpen.value = !isOpen.value
  }

  watch(isOpen, val => {
    emit('update:modelValue', val)
  })

  watch(modelValue, val => {
    isOpen.value = val
  })

  const handleResize = () => {
    isOpen.value = window.innerWidth > 600
  }

  onMounted(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return {modelValue, isOpen, toggle}
}

app.component('AppHeader', {
  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ['menu:click', 'update:modelValue'],
  setup(props, {emit}) {
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

    const openSidebar = () => emit('menu:click')

    return {
      menus,
      activeClass,
      openSidebar,
      ...useMenu(props, emit)
    }
  },
  template: `
  <header class="w-full bg-white border-b py-3 px-4 sticky top-0 z-10">
    <div class="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between items-center container mx-auto">
      <div class="flex gap-2 justify-between items-center w-full">
        <button class="btn btn-default btn-icon btn-text sm:hidden" @click="openSidebar">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
        
        <a href="/" class="font-bold text-blue-500 text-lg">
          TailwindStrap
        </a>

        <button class="btn btn-default btn-icon btn-text sm:hidden" @click="toggle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform transition-all duration-300" :class="isOpen ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div class="space-x-0 flex" v-if="isOpen">
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
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    hide: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
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
      {
        title: 'Timelines',
        path: '/timelines/'
      },
      {
        title: 'Navs',
        path: '/navs/'
      },
      {
        title: 'Breadcrumb',
        path: '/breadcrumb/'
      },
      {
        title: 'Accordion',
        path: '/accordions/'
      },
      {
        title: 'Dropdowns',
        path: '/dropdowns/'
      },
      {
        title: 'Badges',
        path: '/badges/'
      },
      {
        title: 'Button Group',
        path: '/button-group/'
      },
      {
        title: 'Modal',
        path: '/modal/'
      },
      {
        title: 'Navbar',
        path: '/navbar/'
      },
      {
        title: 'Table',
        path: '/table/'
      },
    ])

    menus.value.sort((a, b) => {
      if ( a.title < b.title ){
        return -1;
      }
      if ( a.title > b.title ){
        return 1;
      }
      return 0;
    })

    return {
      menus,
      activeClass,
      ...useMenu(props, emit)
    }
  },
  template: `
    <aside
      :class="hide ? 'hidden' : isOpen ? '' : '-translate-x-full'"
      class="
        z-20 shadow-lg sm:shadow-none bg-white h-screen sm:top-20 w-full sm:w-3/12
        top-0 left-0 fixed sm:sticky 
        transform transition-transform duration-300
      ">
      <div class="flex sm:hidden items-center justify-between py-3 border-b mb-4 px-4">
        <a class="text-primary-500 text-xl font-semibold text-center">
          TailwindStrap
        </a>
        <button class="btn btn-default btn-icon btn-text" @click="toggle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="px-4 sm:px-0">
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
      </div>
    </aside>
  `
})

app.component('AppFooter', {
  template: `
    <footer class="container mx-auto text-sm text-gray-500 py-3 flex justify-center border-t">
      Copyright &copy; 2022-Present &middot;&nbsp; <a href="https://github.com/gravitano">Warsono</a>
    </footer>
    `
})

app.component('app-layout', {
  props: {
    hideSidebar: Boolean,
    fluid: Boolean
  },
  setup(props) {
    const sidebar = ref(false)

    return {
      sidebar,
    }
  },
  template: `
  <app-header @menu:click="sidebar = !sidebar"></app-header>

  <div class="flex flex-col sm:flex-row gap-6 mx-auto" :class="fluid ? '' : 'container py-4'">
    <app-sidebar v-model="sidebar" :hide="hideSidebar"></app-sidebar>

    <main class="w-full" :class="hideSidebar ? '' : 'px-4 sm:px-0'">
      <slot></slot>
    </main>
  </div>

  <app-footer></app-footer>
  `
})

app.mount('#app')