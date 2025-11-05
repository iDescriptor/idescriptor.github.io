<template>
  <div class="container">
    <h1>iDescriptor Wireless Gallery Import</h1>

    <div class="instructions">
      <h3>Instructions:</h3>
      <ol>
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
    <div v-if="isError" class="server-info" style="color: red">
      Error: Missing URL parameters. Please scan the QR code from the app again.
    </div>
    <button class="button" @click="copyAddress">
      {{ isCopied ? 'Copied!' : 'Copy Server Address' }}
    </button>

    <!-- href="https://www.icloud.com/shortcuts/19ad1427410e49b98117afe91607081b" -->
    <div style="text-align: center">
      <a
        href="shortcuts://run-shortcut?name=Import%20to%20Photos"
        class="button secondary"
        >Run the Shortcut</a
      >
      <a
        href="https://www.icloud.com/shortcuts/04eca80e57194866864340363c6ec899"
        class="button secondary"
        >Import and Run the Shortcut</a
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
  console.log('Copying address:', address);

  copy(address);

  isCopied.value = true;
  setTimeout(() => {
    isCopied.value = false;
  }, 2000);
}
</script>

<style scoped>
.container {
  border-radius: 12px;
  padding: 30px;
  max-width: 500px;
}
h1 {
  text-align: center;
  margin-bottom: 30px;
}
.server-info {
  background: #f6f6f6;
  padding: 15px;
  border-radius: 8px;
  margin: 20px 0;
  font-family: monospace;
}
.button {
  display: inline-block;
  background: #007aff;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  margin: 10px 5px;
  cursor: pointer;
  font-size: 16px;
  color: white;
  transition: background-color 0.2s;
}
.button:hover {
  background: #0056cc;
}
.button.secondary {
  background: #34c759;
}
.button.secondary:hover {
  background: #28a745;
}
.instructions {
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}
a {
  color: white;
}
</style>
