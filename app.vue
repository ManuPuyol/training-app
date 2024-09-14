<template>
  <div :class="{ 'dark': darkmode.isDarkMode }">
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  </div>
</template>

<script setup>
import { useDarkMode } from '~/stores/useDarkMode'
const darkmode = useDarkMode();
</script>