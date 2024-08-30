<!-- components/Sidebar.vue -->
<template>
  <div
    class="fixed inset-0 bg-gray-900 bg-opacity-50 lg:hidden z-1000 transition-transform transform lg:translate-x-0"
    v-if="sidebarOpen"
    @click="closeSidebar"
  >
    <aside
      class="bg-background-200 dark:bg-dark-background-300 w-64 text-gray-600 dark:text-gray-300 p-4 h-screen lg:h-auto"
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
      @click.stop
    >
      <button
        class="absolute top-4 right-4"
        @click="closeSidebar"
        aria-label="Close sidebar"
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
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      <nav class="mt-8 space-y-3">
        <a
          href="#home"
          :class="[
            'flex items-center p-2 pl-3 rounded-md transition-colors',
            activeLink === '#home'
              ? 'text-gray-100 dark:bg-custom-secondary-gradient bg-custom-primary-gradient'
              : 'hover:bg-gray-200 hover:text-gray-600 hover:dark:bg-dark-background-100 hover:dark:text-gray-200',
          ]"
          @click="setActive('#home')"
          >Home</a
        >
        <a
          href="#about"
          :class="[
            'flex items-center p-2 pl-3 rounded-md transition-colors',
            activeLink === '#about'
              ? 'text-gray-100 dark:bg-custom-secondary-gradient bg-custom-primary-gradient'
              : 'hover:bg-gray-200 hover:text-gray-600 hover:dark:bg-dark-background-100 hover:dark:text-gray-200',
          ]"
          @click="setActive('#about')"
          >About</a
        >
        <a
          href="#contact"
          :class="[
            'flex items-center p-2 pl-3 rounded-md transition-colors',
            activeLink === '#contact'
              ? 'text-gray-100 dark:bg-custom-secondary-gradient bg-custom-primary-gradient'
              : 'hover:bg-gray-200 hover:text-gray-600 hover:dark:bg-dark-background-100 hover:dark:text-gray-200',
          ]"
          @click="setActive('#contact')"
          >Contact</a
        >
      </nav>
    </aside>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const props = defineProps({
  sidebarOpen: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["closeSidebar"]);

const closeSidebar = () => {
  emit("closeSidebar");
};
const activeLink = ref("#home");

const setActive = (link) => {
  activeLink.value = link;
};
</script>
