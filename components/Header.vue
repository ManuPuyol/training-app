<template>
  <header
    class="shadow py-5 dark:text-white w-full max-w-2xl md:max-w-screen-2xl sticky top-0 transition-all duration-300 z-50 backdrop-blur-lg rounded-md"
    :class="headerClasses"
  >
    <div class="flex items-center justify-between">
      <!-- Left side: Toggle and Search -->
      <div class="flex items-center space-x-4">
        <!-- Toggle Sidebar Button -->
        <button
          @click="toggleSidebar"
          v-if="isSmallScreen"
          class="text-gray-600 dark:text-white"
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

        <!-- Profile Icon -->
        <button class="relative">
          <template v-if="profileImage">
            <img
              :src="profileImage"
              alt="Profile Image"
              class="h-8 w-8 rounded-full object-cover"
            />
          </template>
          <template v-else>
            <svg
              class="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 12c2.7 0 5.4 1.4 6.7 3.6.1.2.1.4.1.6 0 .6-.4 1-1 1H6.3c-.6 0-1-.4-1-1 0-.2 0-.4.1-.6C6.6 13.4 9.3 12 12 12z"
              ></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </template>
        </button>
      </div>
    </div>
  </header>
</template>
  
  
  <script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import {
  SearchIcon,
  SunIcon,
  BellIcon,
  GlobeAltIcon,
  CogIcon,
} from "@heroicons/vue/outline";

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};
const profileImage = ref("https://robohash.org/login?set=set2");

const isSmallScreen = ref(false);
const headerClasses = computed(() => {
  return {
    "pr-4 pl-4": scrolled.value,
  };
});
const handleResize = () => {
  if (typeof window !== "undefined") {
    isSmallScreen.value = window.innerWidth < 1024;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
});

const props = defineProps({
  toggleSidebar: Function,
});
</script>
  
  <style scoped>
/* Optional: Additional custom styles */
</style>
  