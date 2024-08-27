<!-- components/Header.vue -->
<template>
  <header class="text-gray-600 dark:text-gray-300 font-semibold dark:bg-primary-400 rounded-b-md text-white py-4 transition-all duration-300 z-50 px-7 flex items-center w-[90%] lg:w-[75%] xl:w-[60%] mx-auto sticky top-0">
    <!-- Toggle Button (visible on small screens) -->
    <button 
      class="block lg:hidden mr-4"
      @click="toggleSidebar"
      aria-label="Toggle sidebar"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>


    <!-- App Title -->
    <div class="text-lg font-bold">FreeStrike</div>

    <!-- Navigation Links (hidden on small screens) -->
    <nav class="hidden lg:flex space-x-8 ml-8 ">
      <nuxt-link to="/" class="hover:text-gray-300 dark:hover:text-primary-300 hover:text-secondary-400">Home</nuxt-link>
      <nuxt-link to="/about" class="hover:text-gray-300 dark:hover:text-primary-300">About</nuxt-link>
      <nuxt-link to="/contact" class="hover:text-gray-300 dark:hover:text-primary-300">Contact</nuxt-link>
    </nav>

    <!-- Space between nav and icons -->
    <div class="flex-grow"></div>

    <!-- Icon Buttons -->
    <div class="flex space-x-4">
      <!-- Icon Button 1 -->
      <button class="text-gray-600 dark:text-gray-300" @click="toggleDarkMode">
          <SunIcon class="h-6 w-6" />
      </button>
      <!-- Icon Button 2 -->
      <button aria-label="Button 2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m7-7v14"></path>
        </svg>
      </button>
    </div>
  </header>
</template>

<script setup>
import { defineEmits } from 'vue'
import {
  SearchIcon,
  SunIcon,
  BellIcon,
  GlobeAltIcon,
  CogIcon,
} from "@heroicons/vue/outline";
const emit = defineEmits(['toggleSidebar'])
const toggleDarkMode = () => {
  emit('toggle-dark-mode')
}
const toggleSidebar = () => {
  emit('toggleSidebar')
}
</script>
