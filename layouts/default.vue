<template>
  <div
    class="flex flex-col lg:flex-row min-h-screen bg-background-200 dark:bg-dark-background-300"
  >
    <!--Overlay-->
    <div
      v-if="sidebarVisible"
      class="fixed inset-0 bg-black/50 z-1000"
      @click="toggleSidebar"
    ></div>

    <!-- Sidebar -->
    <Sidebar :sidebarVisible="sidebarVisible" :toggleSidebar="toggleSidebar" />
    <!-- Main content area -->
    <div class="flex-1 lg:ml-64 pl-6 pr-6">
      <div class="w-full max-w-2xl md:max-w-screen-2xl mx-auto relative">
        <!-- Header -->
        <Header :toggleSidebar="toggleSidebar" />

        <!-- Main content -->
        <main class="flex-1 dark:text-white w-full">
          <NuxtPage />
        </main>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";
import Sidebar from "../components/Sidebar.vue";
import Header from "../components/Header.vue";

const sidebarVisible = ref(false);

const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value;
};
</script>
