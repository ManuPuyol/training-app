<template>
  <div
    class="flex flex-col lg:flex-row min-h-screen bg-background-300 dark:bg-dark-background-400"
  >
    <div
      v-if="sidebarVisible"
      class="fixed inset-0 bg-black/50 z-1000"
      @click="toggleSidebar"
    ></div>
    <!-- Sidebar -->
    <aside
      :class="sidebarClass"
      class="w-64 bg-gray-800 text-white p-4 fixed top-0 left-0 h-screen lg:relative lg:h-auto transition-transform transform -translate-x-full lg:translate-x-0 z-1000"
    >
      <button
        @click="toggleSidebar"
        class="lg:hidden absolute top-4 right-4 text-white"
      >
        <!-- Icono de la "X" para cerrar -->
        <svg
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      <h2 class="text-2xl font-bold mb-4 dark:text-primary-300">Sidebar</h2>
      <nav>
        <ul>
          <li>
            <a href="#" class="block py-2 flex items-center"
              ><HomeIcon class="h-6 w-6 mr-2" /> Enlace 1</a
            >
          </li>
          <li>
            <a href="#" class="block py-2 flex items-center"
              ><BellIcon class="h-6 w-6 mr-2" /> Enlace 2</a
            >
          </li>
          <li>
            <a href="#" class="block py-2 flex items-center"
              ><CogIcon class="h-6 w-6 mr-2" /> Enlace 3</a
            >
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main content area -->
    <div class="flex-1 flex flex-col items-center pr-6 pl-6">
      <div class="w-full max-w-2xl md:max-w-screen-2xl mx-auto relative">
        <!-- Header -->
        <header
          class=" p-4 dark:text-white w-full max-w-2xl md:max-w-screen-2xl sticky top-0 transition-all duration-300 z-50 backdrop-blur-lg"
        >
          <div class="flex items-center justify-between">
            <!-- Left side: Toggle and Search -->
            <div class="flex items-center space-x-4">
              <!-- Toggle Sidebar Button -->
              <button
                @click="toggleSidebar"
                class="lg:hidden text-gray-600 dark:text-white"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>

              <!-- Search Button with Text -->
              <div class="flex items-center space-x-2">
                <button class="text-gray-600 dark:text-white">
                  <SearchIcon class="h-6 w-6" />
                </button>
                <span class="hidden lg:inline text-gray-600 dark:text-white"
                  >Search</span
                >
              </div>
            </div>

            <!-- Right side: Icons -->
            <div class="flex items-center space-x-4">
              <!-- Dark/Light Mode Toggle -->
              <button class="text-gray-600 dark:text-white">
                <SunIcon class="h-6 w-6" />
              </button>

              <!-- Alerts Icon -->
              <button class="text-gray-600 dark:text-white">
                <BellIcon class="h-6 w-6" />
              </button>

              <!-- Translation Icon -->
              <button class="text-gray-600 dark:text-white">
                <GlobeAltIcon class="h-6 w-6" />
              </button>

              <!-- Random Icon -->
              <button class="text-gray-600 dark:text-white">
                <CogIcon class="h-6 w-6" />
              </button>
            </div>
          </div>
        </header>

        <!-- Main content -->
        <main class="flex-1 p-4 dark:text-white w-full">
          <NuxtPage />
        </main>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import {
  HomeIcon,
  SearchIcon,
  SunIcon,
  BellIcon,
  GlobeAltIcon,
  CogIcon,
} from "@heroicons/vue/outline";

const scrolled = ref(false); // Estado para verificar si se ha hecho scroll
const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};
const sidebarVisible = ref(false); // Estado para manejar la visibilidad del sidebar
// Toggle para mostrar/ocultar el sidebar
const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value;
};
const sidebarClass = computed(() => {
  return {
    "translate-x-0": sidebarVisible.value,
    "-translate-x-full": !sidebarVisible.value,
  };
});
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>
/* Animación del sidebar */
aside {
  transition: transform 0.3s ease;
}
</style>