<script setup lang="ts">
import { ref } from 'vue';
import { activeClass, useMenu } from '../composables';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['menu:click', 'update:modelValue']);

const menus = ref([
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Components',
    path: '/alerts/',
  },
]);

const openSidebar = () => emit('menu:click');

const { isOpen, toggle } = useMenu(props, emit);
</script>

<template>
  <header class="w-full bg-white border-b py-3 px-4 sticky top-0 z-10">
    <div
      class="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between items-center container mx-auto"
    >
      <div class="flex gap-2 justify-between items-center w-full">
        <button
          class="btn btn-default btn-icon btn-text sm:hidden"
          @click="openSidebar"
        >
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
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>

        <router-link to="/" class="font-bold text-blue-500 text-lg">
          WindPlus
        </router-link>

        <button
          class="btn btn-default btn-icon btn-text sm:hidden"
          @click="toggle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 transform transition-all duration-300"
            :class="isOpen ? 'rotate-180' : ''"
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
        </button>
      </div>

      <div class="nav gap-0" v-if="isOpen">
        <router-link
          v-for="menu in menus"
          :key="menu.title"
          class="nav-item px-2 sm:px-4 font-semibold"
          :class="activeClass(menu.path, 'active', '')"
          :to="menu.path"
        >
          {{ menu.title }}
        </router-link>

        <div class="dropdown dropdown-hover group">
          <button
            class="px-2 sm:px-4 nav-item font-semibold"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="dLabel"
          >
            Samples
          </button>
          <ul
            class="dropdown-menu dropdown-menu-end group-hover:block"
            aria-labelledby="dLabel"
          >
            <li>
              <router-link to="/dashboard/" class="dropdown-item"
                >Dashboard (Light)</router-link
              >
            </li>
            <li>
              <router-link to="/dashboard-dark/" class="dropdown-item"
                >Dashboard (Dark)</router-link
              >
            </li>
          </ul>
        </div>

        <a
          class="nav-item font-semibold px-2 sm:px-4"
          href="https://github.com/gravitano/vite-tailwind-vanilla"
          target="_blank"
          rel="noopener"
        >
          GitHub
          <i class="ri-external-link-line ml-2"></i>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
