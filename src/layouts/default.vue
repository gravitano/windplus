<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';
import AppSidebar from '../components/AppSidebar.vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  menus: Array,
});

const sidebar = ref(false);
const activeHref = ref('');
const route = useRoute();

watch(
  route,
  (val) => {
    sidebar.value = false;
  },
  { deep: true }
);

const scrollTo = (menu) => {
  document.querySelector(menu.href)?.scrollIntoView({
    behavior: 'smooth',
  });
  activeHref.value = menu.href;
};

const isHomePage = computed(() => route.name === 'index');
</script>

<template>
  <app-header @menu:click="sidebar = !sidebar"></app-header>

  <div
    class="flex flex-col sm:flex-row gap-6 mx-auto"
    :class="isHomePage ? '' : 'container py-4'"
  >
    <app-sidebar v-model="sidebar" :hide="isHomePage"></app-sidebar>

    <main
      class="w-full flex gap-4"
      :class="isHomePage ? 'flex-col' : 'flex-col sm:flex-row px-4 sm:px-0'"
    >
      <div
        class="order-2 sm:order-2"
        :class="isHomePage ? '' : 'w-full sm:w-9/12'"
      >
        <div :class="isHomePage ? '' : 'container mx-auto prose'">
          <router-view />
        </div>
      </div>

      <div
        class="sm:h-screen sm:sticky sm:top-20 relative order-1 sm:order-2"
        :class="isHomePage ? 'hidden' : 'w-full sm:w-3/12'"
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

<style>
:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  @apply text-sm my-0 rounded-t-none !important;
}

.code-block {
  @apply px-4 py-2 bg-gray-100 border-t;
}
</style>
