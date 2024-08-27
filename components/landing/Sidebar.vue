<!-- components/Sidebar.vue -->
<template>
  <div 
    class="fixed inset-0 bg-gray-900 bg-opacity-50 lg:hidden z-1000 "
    v-if="sidebarOpen"
    @click="closeSidebar"
  >
    <aside 
      class="fixed left-0 top-0 bottom-0 w-64 bg-gray-800 text-white p-4 transform transition-transform duration-300 "
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
      @click.stop
    >
      <button 
        class="absolute top-4 right-4 text-white"
        @click="closeSidebar"
        aria-label="Close sidebar"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <nav class="mt-8 space-y-4">
        <a href="#" class="block py-2 px-4 hover:bg-gray-700">Home</a>
        <a href="#" class="block py-2 px-4 hover:bg-gray-700">About</a>
        <a href="#" class="block py-2 px-4 hover:bg-gray-700">Contact</a>
      </nav>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import {  defineEmits } from 'vue'

const props = defineProps({
  sidebarOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['closeSidebar'])

const closeSidebar = () => {
  emit('closeSidebar')
}
</script>
