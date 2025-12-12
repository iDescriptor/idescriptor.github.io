<template>
  <div class="flex items-center justify-center">
    <div
      v-show="loading"
      class="animate-pulse w-full"
      :style="{ maxWidth: maxWidth, aspectRatio: aspectRatio }"
    >
      <div class="bg-gray-200 rounded-lg w-full h-full" />
    </div>
    <img
      v-show="!loading"
      :src="src"
      @load="handleLoad"
      class="w-full h-auto"
      :style="{ maxWidth: maxWidth }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  src: string;
  aspectRatio: string;
  maxWidth: string;
}>();

const loading = ref(true);

const handleLoad = () => {
  loading.value = false;
};
</script>
