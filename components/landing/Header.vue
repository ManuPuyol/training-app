<!-- components/Header.vue -->
<template>
  <header
    class="text-gray-900 dark:text-gray-100 font-semibold dark:bg-primary-400 bg-white rounded-b-md py-4 transition-all duration-300 z-50 px-7 flex items-center w-[90%] lg:w-[75%] xl:w-[60%] mx-auto sticky top-0"
    :class="headerClasses"
  >
    <!-- Toggle Button (visible on small screens) -->
    <button
      class="block lg:hidden mr-4"
      @click="toggleSidebar"
      aria-label="Toggle sidebar"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        ></path>
      </svg>
    </button>

    <!-- App Title -->
    <p class="text-xl">FreeStrike</p>

    <!-- Navigation Links (hidden on small screens) -->
    <nav class="hidden lg:flex space-x-8 ml-8">
      <nuxt-link
        to="/"
        class="dark:hover:text-primary-300 hover:text-secondary-300"
        >Home</nuxt-link
      >
      <nuxt-link
        to="/features"
        class="dark:hover:text-primary-300 hover:text-secondary-300"
        >Features</nuxt-link
      >
      <nuxt-link
        to="/faq"
        class="dark:hover:text-primary-300 hover:text-secondary-300"
        >FAQ</nuxt-link
      >
      <nuxt-link
        to="/contact"
        class="dark:hover:text-primary-300 hover:text-secondary-300"
        >Contact</nuxt-link
      >
    </nav>

    <!-- Space between nav and icons -->
    <div class="flex-grow"></div>

    <!-- Icon Buttons -->
    <div class="flex space-x-4">
      <!-- Icon Button 1 -->
      <button
        class="text-gray-600 dark:text-gray-300 hover:text-secondary-300 hover:dark:text-primary-300 bg-transparent rounded-full p-2 hover:bg-gray-100 hover:dark:bg-gray-300"
        @click="darkmode.toggleDarkMode"
      >
        <SunIcon class="h-6 w-6" v-if="darkmode.isDarkMode" />
        <MoonIcon class="h-6 w-6" v-else />
      </button>
      <!-- Icon Button 2 -->
      <button
        class="flex items-center justify-center dark:bg-primary-300 bg-secondary-300 text-white font-semibold py-2 px-4 rounded-lg hover:bg-secondary-400 hover:dark:bg-primary-500"
      >
        Sign in
        <ArrowNarrowRightIcon class="h-5 w-5 ml-2" />
      </button>
    </div>
  </header>
</template>

<script setup>
import { defineEmits } from "vue";
import { useDarkMode } from "~/stores/useDarkMode";

import {
  SearchIcon,
  SunIcon,
  MoonIcon,
  BellIcon,
  GlobeAltIcon,
  CogIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/vue/outline";
const emit = defineEmits(["toggleSidebar"]);
const darkmode = useDarkMode();
const toggleSidebar = () => {
  emit("toggleSidebar");
};
const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

const headerClasses = computed(() => {
  return {
    "shadow-lg": scrolled.value,
  };
});
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
