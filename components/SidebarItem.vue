<template>
  <li>
    <NuxtLink
      :to="to"
      :class="[
        'flex items-center p-2 rounded-md transition-colors',
        active
          ? 'text-gray-100 dark:bg-custom-secondary-gradient bg-custom-primary-gradient'
          : 'hover:bg-gray-200 hover:text-gray-600 hover:dark:bg-dark-background-100 hover:dark:text-gray-200',
      ]"
    >
      <component :is="icon" class="h-6 w-6 mr-2" />
      {{ text }}
    </NuxtLink>
  </li>
</template>
  
  <script setup>
const props = defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
  icon: {
    type: Function,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  active: Boolean,
});
</script>