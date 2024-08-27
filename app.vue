<template>
  <div :class="{ 'dark': isDarkMode }">
  <NuxtLayout :name="layoutName">
    <NuxtPage />
  </NuxtLayout>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const isDarkMode = ref(true); // Alterna este valor para cambiar el modo oscuro
const layoutName = computed(() => {
  if (route.path === '/login' || route.path === '/register' || route.path === '/landing') {
    return 'landing' // Layout específico para login
  }
})

</script>