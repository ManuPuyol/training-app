<template>
  <div
    class="dark:bg-landing-gradient"
    style="height: 1000px"
  >
    <LandingSidebar :sidebarOpen="sidebarOpen" @closeSidebar="closeSidebar" />

    <LandingHeader @toggleSidebar="toggleSidebar" />

    <main class="flex-1 dark:text-white w-full">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineEmits } from "vue";
const emit = defineEmits(["toggleSidebar"]);

const sidebarOpen = ref(false);

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const closeSidebar = () => {
  sidebarOpen.value = false;
};
</script>


