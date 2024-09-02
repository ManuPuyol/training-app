<template>
  <div
    id="home-section"
    class="flex flex-col items-center justify-start text-center pt-20"
  >
    <div class="max-w-xl">
      <h1
        class="text-4xl font-bold mb-4 dark:text-primary-300 text-secondary-300 leading-tight"
      >
        Transform your body and mind with our Personal Training App
      </h1>
      <p
        class="text-md mb-6 text-gray-900 dark:text-gray-200 font-medium max-w-md mx-auto"
      >
        Discover the power of a routine tailored to you. Improve your health,
        increase your energy, and achieve your goals with workouts designed by
        experts.
      </p>
      <button
        @click="handleClick"
        class="dark:bg-primary-300 bg-secondary-300 text-white font-semibold py-2 px-6 rounded-lg hover:bg-secondary-400 hover:dark:bg-primary-500 mb-8 text-xl"
      >
        Get Started Free
      </button>
    </div>
    <!-- Imagen a pantalla completa -->
    <img
      src="@/assets/images/landing.png"
      alt="Imagen de prueba"
      class="w-2/4 h-auto max-w-screen-lg mx-auto"
    />
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {},
  },
};
</script>
