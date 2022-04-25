<script setup lang="ts">
import { ref } from 'vue';
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppSidebar from '../components/AppSidebar.vue';

const props = defineProps({
  hideSidebar: Boolean,
  fluid: Boolean,
  menus: Array,
});

const sidebar = ref(false);
const activeHref = ref('');

const scrollTo = (menu) => {
  document.querySelector(menu.href)?.scrollIntoView({
    behavior: 'smooth',
  });
  activeHref.value = menu.href;
};
</script>

<template>
  <app-header @menu:click="sidebar = !sidebar"></app-header>

  <div
    class="flex flex-col sm:flex-row gap-6 mx-auto"
    :class="fluid ? '' : 'container py-4'"
  >
    <app-sidebar v-model="sidebar" :hide="hideSidebar"></app-sidebar>

    <main
      class="w-full flex gap-4"
      :class="hideSidebar ? 'flex-col' : 'flex-col sm:flex-row px-4 sm:px-0'"
    >
      <div
        class="order-2 sm:order-2"
        :class="hideSidebar ? '' : 'w-full sm:w-9/12'"
      >
        <div :class="hideSidebar ? '' : 'container mx-auto prose'">
          <router-view />
        </div>
      </div>

      <div
        class="sm:h-screen sm:sticky sm:top-20 relative order-1 sm:order-2"
        :class="hideSidebar ? 'hidden' : 'w-full sm:w-3/12'"
      >
        <template v-if="menus && menus.length">
          <button
            type="button"
            class="font-semibold sm:mb-2 mb-1 text-sm flex gap-2 text-gray-600"
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
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
            On this page
          </button>
          <ul
            id="collapseExample"
            class="collapse show list-group list-dense list-tree list-inline list-group-sm list-hover ml-2.5"
          >
            <li v-for="menu in menus" :key="menu.title">
              <a
                :href="menu.href"
                class="list-group-item"
                :class="activeHref === menu.href ? 'active' : ''"
                @click.prevent="scrollTo(menu)"
              >
                {{ menu.title }}
              </a>
            </li>
          </ul>
        </template>
      </div>
    </main>
  </div>

  <app-footer></app-footer>
</template>

<style scoped></style>
