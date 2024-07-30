<template>
    <li>
      <NuxtLink
        :to="to"
        class="flex items-center p-2 rounded-md transition-colors hover:bg-gray-700 hover:text-gray-200"
      >
        <component :is="icon" class="h-6 w-6 mr-2" />
        {{ text }}
      </NuxtLink>
    </li>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  const props = defineProps({
    to: {
      type: [String, Object],
      required: true
    },
    icon: {
      type: Function,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  })
  </script>