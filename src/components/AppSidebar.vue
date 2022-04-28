<script setup lang="ts">
import { ref } from 'vue';
import { activeClass, useMenu } from '../composables';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  hide: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const menus = ref([
  {
    text: 'Getting Started',
    children: [
      {
        title: 'About',
        path: '/about/',
      },
      {
        title: 'Installation',
        path: '/installation/',
      },
    ],
  },
  {
    text: 'Components',
    children: [
      {
        title: 'Alerts',
        path: '/alerts/',
      },
      {
        title: 'Buttons',
        path: '/buttons/',
      },
      {
        title: 'Cards',
        path: '/cards/',
      },
      {
        title: 'Forms',
        path: '/forms/',
      },
      {
        title: 'List Group',
        path: '/list-group/',
      },
      {
        title: 'Timelines',
        path: '/timelines/',
      },
      {
        title: 'Navs',
        path: '/navs/',
      },
      {
        title: 'Breadcrumb',
        path: '/breadcrumb/',
      },
      {
        title: 'Accordion',
        path: '/accordions/',
      },
      {
        title: 'Dropdowns',
        path: '/dropdowns/',
      },
      {
        title: 'Badges',
        path: '/badges/',
      },
      {
        title: 'Button Group',
        path: '/button-group/',
      },
      {
        title: 'Modal',
        path: '/modal/',
      },
      {
        title: 'Navbar',
        path: '/navbar/',
      },
      {
        title: 'Table',
        path: '/table/',
      },
      {
        title: 'Navigation Drawer',
        path: '/nav-drawer/',
      },
      {
        title: 'Input Group',
        path: '/input-group/',
      },
      {
        title: 'Tooltips',
        path: '/tooltips/',
      },
      {
        title: 'Toasts',
        path: '/toasts/',
      },
      {
        title: 'Popovers',
        path: '/popovers/',
      },
    ],
  },
]);

menus.value.sort((a, b) => {
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
});

const { isOpen } = useMenu(props, emit);
</script>

<template>
  <aside
    :class="hide ? 'hidden' : isOpen ? '' : '-translate-x-full'"
    class="z-20 shadow-lg sm:shadow-none bg-white h-screen sm:top-20 w-full sm:w-3/12 top-0 left-0 fixed sm:sticky transform transition-transform duration-300"
  >
    <div
      class="flex sm:hidden items-center justify-between py-3 border-b mb-4 px-4"
    >
      <a class="text-primary-500 text-xl font-semibold text-center">
        WindPlus
      </a>
      <button class="btn btn-default btn-icon btn-text" @click="toggle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <div class="px-4 sm:px-0">
      <div v-for="menu in menus" :key="menu.text" class="mb-5">
        <button class="list-header text-xs uppercase mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 hidden"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          {{ menu.text }}
        </button>
        <ul
          class="list-group list-dense list-hover list-group-sm list-inline list-tree"
        >
          <li v-for="child in menu.children" :key="child.title">
            <router-link
              :to="child.path"
              class="list-group-item"
              :class="activeClass(child.path)"
            >
              {{ child.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<style scoped></style>
