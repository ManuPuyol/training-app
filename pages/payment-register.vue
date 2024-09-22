<template>
  <div
    class="min-h-screen flex items-center justify-center dark:bg-landing-gradient-dark bg-landing-gradient"
  >
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-6xl">
      <!-- Icono -->
      <div class="flex justify-center items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p class="text-xl font-semibold text-gray-700 dark:text-gray-300">
          FreeStrike
        </p>
      </div>

      <!-- Título y subtítulo -->
      <p class="text-gray-700 mb-10 text-center">
        Register now as
        <strong class="text-secondary-300">TRAINER</strong> account 🚀
      </p>

      <!-- Steps Navigation -->
      <div class="flex justify-between items-center mb-10">
        <!-- Step 1 -->
        <div @click="goToStep(1)" class="flex-1 text-center cursor-pointer">
          <div
            :class="{
              'bg-secondary-300': currentStep >= 1,
              'bg-gray-300': currentStep !== 1,
            }"
            class="w-10 h-10 mx-auto rounded-full text-white flex items-center justify-center"
          >
            1
          </div>
          <p
            class="mt-2 text-sm font-medium"
            :class="{
              'text-secondary-300': currentStep >= 1,
              'text-gray-600': currentStep !== 1,
            }"
          >
            Personal Info
          </p>
        </div>
        <div
          :class="{
            'border-secondary-300': currentStep >= 2,
            'border-gray-300': currentStep < 2,
          }"
          class="flex-auto border-t-2 transition duration-500 ease-in-out"
        ></div>
        <!-- Step 2 -->
        <div @click="goToStep(2)" class="flex-1 text-center cursor-pointer">
          <div
            :class="{
              'bg-secondary-300': currentStep >= 2,
              'bg-gray-300': currentStep !== 2,
            }"
            class="w-10 h-10 mx-auto rounded-full text-white flex items-center justify-center"
          >
            2
          </div>
          <p
            class="mt-2 text-sm font-medium"
            :class="{
              'text-secondary-300': currentStep >= 2,
              'text-gray-600': currentStep < 2,
            }"
          >
            Payment
          </p>
        </div>
        <div
          :class="{
            'border-secondary-300': currentStep >= 3,
            'border-gray-300': currentStep < 3,
          }"
          class="flex-auto border-t-2 transition duration-500 ease-in-out"
        ></div>
        <!-- Step 3 -->
        <div @click="goToStep(3)" class="flex-1 text-center cursor-pointer">
          <div
            :class="{
              'bg-secondary-300': currentStep === 3,
              'bg-gray-300': currentStep !== 3,
            }"
            class="w-10 h-10 mx-auto rounded-full text-white flex items-center justify-center"
          >
            3
          </div>
          <p
            class="mt-2 text-sm font-medium"
            :class="{
              'text-secondary-300': currentStep >= 3,
              'text-gray-600': currentStep < 3,
            }"
          >
            Confirmation
          </p>
        </div>
      </div>

      <!-- Formulario -->
      <form @submit.prevent="nextStep">
        <div v-if="currentStep === 1">
          <RegisterPersonalInfo />
        </div>

        <div v-if="currentStep === 2">
          <!-- Checkout Step -->
          <div class="relative mb-6">
            <RegisterPayment></RegisterPayment>
          </div>
        </div>

        <div v-if="currentStep === 3">
          <!-- Confirmation Step -->
          <div class="relative mb-6">
            <p class="text-gray-700">Confirmation step content goes here.</p>
            <!-- Add fields for confirmation step here -->
          </div>
        </div>

        <!-- Botón de siguiente paso -->
        <button
          v-if="currentStep !== 3"
          type="submit"
          class="mb-4 flex w-full items-center justify-center dark:bg-primary-300 bg-secondary-300 text-white font-semibold py-2 px-4 rounded-lg hover:bg-secondary-400 hover:dark:bg-primary-500"
        >
          {{ currentStep === 2 ? "Pay" : "Next step ->" }}
        </button>

        <!-- Crear cuenta -->
        <p
          v-if="currentStep === 3"
          class="text-center text-sm text-gray-500 mb-6"
        >
          Already have an account?
          <a
            href="#"
            class="text-secondary-300 dark:text-primary-300 hover:text-secondary-500 dark:hover:text-primary-500 font-medium"
            >Sign in</a
          >
        </p>

        <!-- Divider -->
        <div class="flex items-center justify-center mb-4">
          <hr class="w-full border-gray-300" />
          <span class="px-2 text-gray-500">or</span>
          <hr class="w-full border-gray-300" />
        </div>

        <!-- Login con redes sociales -->
        <div class="flex justify-center space-x-4">
          <!-- Icono de Google -->
          <button
            type="button"
            class="p-2 border border-gray-300 rounded-full hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M21.35 11.1h-9.2v2.8h5.45c-.23 1.31-.96 2.41-1.99 3.14v2.6h3.2c1.89-1.74 2.96-4.3 2.96-7.14 0-.53-.05-1.05-.14-1.56z"
                fill="#4285F4"
              />
              <path
                d="M12.15 21c2.7 0 4.95-.9 6.6-2.4l-3.2-2.6c-.9.6-2.01.96-3.41.96-2.62 0-4.83-1.76-5.62-4.13H3.2v2.6C4.85 18.5 8.21 21 12.15 21z"
                fill="#34A853"
              />
              <path
                d="M6.53 12.83c-.2-.6-.3-1.24-.3-1.83 0-.64.11-1.27.3-1.83v-2.6H3.2C2.43 8.06 2 9 2 10s.43 1.94 1.2 2.77l3.33-2.6z"
                fill="#FBBC05"
              />
              <path
                d="M12.15 5.4c1.49 0 2.82.52 3.88 1.55l2.83-2.83C16.81 2.94 14.56 2 12.15 2 8.21 2 4.85 4.5 3.2 7.4l3.33 2.6c.79-2.36 3-4.13 5.62-4.13z"
                fill="#EA4335"
              />
            </svg>
          </button>

          <button
            type="button"
            class="p-2 border border-gray-300 rounded-full hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.16 3.93 9.42 9 9.93V14.2h-2v-2.2h2v-1.7c0-1.93 1.57-3.5 3.5-3.5h2v2.2h-2c-.83 0-1.5.67-1.5 1.5v1.7h3.5v2.2h-3.5v7.73c5.07-.51 9-4.77 9-9.93z"
                fill="#4267B2"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

  <script setup>
definePageMeta({
  layout: false,
});
import { ref } from "vue";

const currentStep = ref(1);

const goToStep = (step) => {
  if (step >= 1 && step <= 3) {
    currentStep.value = step;
  }
};

const nextStep = () => {
  if (currentStep.value < 3) {
    currentStep.value++;
  }
};
</script>