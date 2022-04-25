import '../styles/main.css'
import {createApp, ref, toRefs, watch, onMounted, onUnmounted} from 'vue'
import App from './App.vue'

window.__VUE_OPTIONS_API__ = true
window.__VUE_PROD_DEVTOOLS__ = false

const app = createApp(App)

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
        title: 'Components',
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
          WindPlus
        </a>

        <button class="btn btn-default btn-icon btn-text sm:hidden" @click="toggle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform transition-all duration-300" :class="isOpen ? 'rotate-180' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div class="nav gap-0" v-if="isOpen">
        <a v-for="menu in menus" :key="menu.title" class="nav-item px-2 sm:px-4 font-semibold" :class="activeClass(menu.path, 'active', '')" :href="menu.path">
          {{ menu.title }}
        </a>

        <div class="dropdown dropdown-hover group">
          <button class="px-2 sm:px-4 nav-item font-semibold" data-bs-toggle="dropdown" aria-expanded="false" id="dLabel">
            Samples
          </button>
          <ul class="dropdown-menu dropdown-menu-end group-hover:block" aria-labelledby="dLabel">
            <li><a href="/dashboard/" class="dropdown-item">Dashboard (Light)</a></li>
            <li><a href="/dashboard-dark/" class="dropdown-item">Dashboard (Dark)</a></li>
          </ul>
        </div>

        <a class="nav-item font-semibold px-2 sm:px-4" href="https://github.com/gravitano/vite-tailwind-vanilla" target="_blank"
          rel="noopener">
          GitHub
          <i class="ri-external-link-line ml-2"></i>
        </a>
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
        title: 'List Group',
        path: '/list-group/'
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
      {
        title: 'Navigation Drawer',
        path: '/nav-drawer/'
      },
      {
        title: 'Input Group',
        path: '/input-group/'
      },
      {
        title: 'Tooltips',
        path: '/tooltips/'
      },
      {
        title: 'Toasts',
        path: '/toasts/'
      },
      {
        title: 'Popovers',
        path: '/popovers/'
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
          WindPlus
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
        <ul class="list-group list-dense list-hover list-group-sm list-inline list-tree ml-2">
          <li v-for="menu in menus" :key="menu.title">
            <a :href="menu.path" class="list-group-item" :class="activeClass(menu.path)">
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
    fluid: Boolean,
    menus: Array
  },
  setup(props) {
    const sidebar = ref(false)
    const activeHref = ref('')

    const scrollTo = menu => {
      document.querySelector(menu.href)?.scrollIntoView({
        behavior: 'smooth',
      })
      activeHref.value = menu.href
    }

    return {
      sidebar,
      scrollTo,
      activeHref,
    }
  },
  template: `
  <app-header @menu:click="sidebar = !sidebar"></app-header>

  <div class="flex flex-col sm:flex-row gap-6 mx-auto" :class="fluid ? '' : 'container py-4'">
    <app-sidebar v-model="sidebar" :hide="hideSidebar"></app-sidebar>

    <main class="w-full flex gap-4" :class="hideSidebar ? 'flex-col' : 'flex-col sm:flex-row px-4 sm:px-0'">
      <div class="order-2 sm:order-2" :class="hideSidebar ? '' : 'w-full sm:w-9/12'">
        <div :class="hideSidebar ? '' : 'container mx-auto'">
          <slot></slot>
        </div>
      </div>

      <div class="sm:h-screen sm:sticky sm:top-20 relative order-1 sm:order-2" :class="hideSidebar ? 'hidden' : 'w-full sm:w-3/12'">
        <template v-if="menus && menus.length">
          <button type="button" class="font-semibold sm:mb-2 mb-1 text-sm flex gap-2 text-gray-600"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
            On this page
          </button>
          <ul id="collapseExample" class="collapse show list-group list-dense list-tree list-inline list-group-sm list-hover ml-2.5">
            <li v-for="menu in menus" :key="menu.title">
              <a :href="menu.href" class="list-group-item" :class="activeHref === menu.href ? 'active' : ''" @click.prevent="scrollTo(menu)">
                {{ menu.title }}
              </a>
            </li>
          </ul>
        </template>
      </div>
    </main>
  </div>

  <app-footer></app-footer>
  `
})

app.mount('#app')