<template>
  <div :class="{ 'dark': isDarkMode }">
     <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  </div>
   
</template>
<script setup>
import { ref } from 'vue'

const isDarkMode = ref(true); // Alterna este valor para cambiar el modo oscuro
</script>