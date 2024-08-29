<template>
  <div :class="{ 'dark': darkmode.isDarkMode }">
  <NuxtLayout :name="layoutName">
    <NuxtPage />
  </NuxtLayout>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useDarkMode } from '~/stores/useDarkMode'
const route = useRoute()
const darkmode = useDarkMode();

const layoutName = computed(() => {
  if (route.path === '/login' || route.path === '/register' || route.path === '/landing') {
    return 'landing'
  }
})

</script>