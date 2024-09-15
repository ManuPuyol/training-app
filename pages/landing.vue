<template>
  <div>
    <LandingHomeSection />
    <LandingFeaturesSection />
    <LandingPrincingSection />
    <LandingFAQSection />
    <LandingContactSection />
    <div class="fixed bottom-[65px] right-[35px] flex items-center space-x-6">
      <button
        type="button"
        class="text-white bg-custom-primary-gradient dark:bg-custom-secondary-gradient shadow-lg shadow-secondary-300/60 dark:shadow-lg dark:shadow-primary-500/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:shadow hover:shadow transition"
      >
        Join now
      </button>
      <button
        class="rounded-full bg-secondary-300 dark:bg-primary-300 text-white p-2 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "landing",
});
</script>