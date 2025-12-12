<template>
  <div class="flex flex-col">
    <div class="flex flex-col items-center justify-center gap-2">
      <h1 class="text-3xl font-bold">iDescriptor</h1>
      <span
        >A free, open-source, and cross-platform iDevice management tool
      </span>
    </div>
    <Img
      aspectRatio="529/389"
      maxWidth="1058px"
      src="https://github.com/iDescriptor/iDescriptor/blob/main/resources/repo/crossplatform.png?raw=true"
    />

    <div class="flex flex-wrap justify-center gap-2 mt-4 w-[95vw]">
      <a href="https://github.com/iDescriptor/iDescriptor/blob/main/LICENSE">
        <img
          alt="GitHub"
          src="https://img.shields.io/github/license/iDescriptor/iDescriptor"
        />
      </a>
      <a href="https://github.com/iDescriptor/iDescriptor/issues">
        <img
          src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"
          alt="CodeFactor"
        />
      </a>
      <a
        href="https://github.com/iDescriptor/iDescriptor/actions/workflows/build.yml"
        rel="nofollow"
      >
        <img
          src="https://img.shields.io/github/actions/workflow/status/iDescriptor/iDescriptor/build-linux.yml?branch=main&logo=Github"
          alt="Build"
        />
      </a>
      <a href="https://github.com/iDescriptor/iDescriptor/tags" rel="nofollow">
        <img
          alt="GitHub tag (latest SemVer pre-release)"
          src="https://img.shields.io/github/v/tag/iDescriptor/iDescriptor?include_prereleases&label=version"
        />
      </a>
      <img
        alt="Platform"
        src="https://img.shields.io/badge/Platform-Windows%20%7C%20macOS%20%7C%20Linux-blue.svg"
      />
      <img
        alt="Language"
        src="https://img.shields.io/badge/C++-20-hotpink.svg"
      />
      <img alt="Qt" src="https://img.shields.io/badge/Qt-6-brightgreen.svg" />
      <a href="https://github.com/iDescriptor/iDescriptor/releases">
        <img
          src="https://img.shields.io/badge/AppImage-available-brightgreen"
          alt="AppImage"
        />
      </a>
      <a href="https://aur.archlinux.org/packages/idescriptor-git">
        <img
          src="https://img.shields.io/badge/Arch_AUR-available-brightgreen"
          alt="AppImage"
        />
      </a>
    </div>

    <div class="flex justify-center mt-6">
      <a
        href="https://github.com/iDescriptor/iDescriptor/releases/latest"
        class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(82_82_82)] max-w-fit"
      >
        Get iDescriptor
      </a>
    </div>
    <div class="mt-[30rem]">//TODO</div>
  </div>
</template>
<style></style>

<script setup lang="ts">
import Img from '~/components/img.vue';

useHead({
  title: 'iDescriptor',
  meta: [
    {
      name: 'description',
      content:
        'A free, open-source, and cross-platform iDevice management tool',
    },
  ],
});
</script>
