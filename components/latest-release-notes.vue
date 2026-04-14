<template>
  <div v-if="isLoading">Loading release notes...</div>
  <div v-else-if="isError">Error fetching release notes.</div>
  <div v-else>
    <h1 class="text-2xl font-bold">Latest Release Notes</h1>
    <div v-html="marked(releaseNotes)"></div>
  </div>
</template>

<script lang="ts" setup>
import { marked } from 'marked';
const isLoading = ref(true);
const releaseNotes = ref('');
const isError = ref(false);

fetch('https://api.github.com/repos/iDescriptor/iDescriptor/releases/latest')
  .then((response) => response.json())
  .then((data) => {
    console.log('Latest release:', data);
    if (!data || !data.body || typeof data.body !== 'string') {
      throw new Error('Invalid release data');
    }
    releaseNotes.value = data.body;
  })
  .finally(() => {
    isLoading.value = false;
  })
  .catch((error) => {
    console.error('Error fetching latest release:', error);
    isError.value = true;
  });
</script>
