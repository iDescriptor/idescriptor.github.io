<template>
  <div class="max-w-lg p-8 mx-auto rounded-xl">
    <h1 class="mb-8 text-center">iDescriptor Wireless Gallery Import</h1>

    <div class="p-5 my-5 rounded-lg">
      <h3 class="font-bold">Instructions:</h3>
      <ol class="list-decimal list-inside">
        <li>Copy the server address below</li>
        <li>
          Click on run shortcut if you have not installed the shortcut or click
          on open shortcut if you have already installed it
        </li>
        <li>
          Run the shortcut it will import whatever you selected from the App
        </li>
      </ol>
    </div>
    <div
      v-if="isError"
      class="p-4 my-5 font-mono text-red-500 bg-gray-100 rounded-lg"
    >
      Error: Missing URL parameters. Please scan the QR code from the app again.
    </div>
    <button
      class="inline-block px-6 py-3 m-2 text-base text-white no-underline transition-colors duration-200 bg-blue-500 border-none rounded-lg cursor-pointer hover:bg-blue-700"
      @click="copyAddress"
    >
      {{ isCopied ? 'Copied!' : 'Copy Server Address' }}
    </button>

    <div class="">
      <a
        href="https://www.icloud.com/shortcuts/19ad1427410e49b98117afe91607081b"
        class="inline-block px-6 py-3 m-2 text-base text-white no-underline transition-colors duration-200 bg-green-500 border-none rounded-lg cursor-pointer hover:bg-green-600"
        >Open Shortcut</a
      >
      <a
        href="shortcuts://run-shortcut?name=Import%20Testing"
        class="inline-block px-6 py-3 m-2 text-base text-white no-underline transition-colors duration-200 bg-green-500 border-none rounded-lg cursor-pointer hover:bg-green-600"
        >Run Shortcut</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import copy from 'copy-to-clipboard';
import { ref } from 'vue';
const isCopied = ref<boolean>(false);
const isError = ref<boolean>(false);

function copyAddress() {
  const u = new URL(window.location.href);
  const local = u.searchParams.get('local');
  const port = u.searchParams.get('port');
  const jsonFile = u.searchParams.get('file');

  if (!local || !port || !jsonFile) {
    isError.value = true;
    return;
  }

  const address = `http://${local}:${port}/${jsonFile}`;

  copy(address);
}
</script>
