<script setup lang="ts">
import { ref } from 'vue';

const selected = ref('Preview');
const tabs = ['Preview', 'Code'];
</script>

<template>
  <div class="card card-bordered mb-5" id="default">
    <div class="nav nav-tabs-alt nav-sm border-b">
      <button
        v-for="tab in tabs"
        :key="tab"
        type="button"
        :class="['nav-item', selected === tab ? 'active' : '']"
        @click="selected = tab"
      >
        {{ tab }}
      </button>
    </div>
    <div class="px-4 py-3 bg-gray-100" v-if="selected === 'Preview'">
      <slot name="preview" />
    </div>
    <!-- code-block -->
    <div class="" v-if="selected === 'Code'">
      <slot name="code" />
    </div>
    <!-- ./code-block -->
  </div>
</template>
