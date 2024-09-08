<template>
  <!-- Sección de Features -->
  <section id="features-section" class="bg-white dark:bg-primary-400 py-12">
    <div class="w-[90%] lg:w-[75%] xl:w-[60%] mx-auto">
      <div class="text-center">
        <h2
          class="text-base text-lg font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide"
        >
          What
          <span class="text-secondary-300 dark:text-primary-300"
            >FreeStrike</span
          >
          offers
        </h2>
        <p
          class="mt-2 text-xl leading-8 font-bold text-gray-700 dark:text-gray-300 sm:text-3xl"
        >
          Personalized training to achieve your goals
        </p>
        <p
          class="mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400 mx-auto"
        >
          Discover the features that will make your training more effective and
          fun.
        </p>
      </div>

      <!-- Features -->
      <div class="mt-8">
        <div class="flex flex-wrap justify-center -mx-4">
          <!-- Feature 1 -->
          <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div
              class="p-6 max-w-sm mx-auto flex flex-col items-center text-center"
            >
              <div
                class="flex items-center justify-center h-20 w-20 rounded-full border-2 border-secondary-300 dark:border-primary-300"
              >
                <!-- Icono de Recordatorios Personalizados -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-secondary-300 dark:text-primary-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0018.5 14.5V11a6.5 6.5 0 10-13 0v3.5c0 .415-.162.815-.45 1.095L4 17h11zM7 8h10m-5 4v6"
                  />
                </svg>
              </div>
              <h3
                class="mt-8 text-lg font-medium text-gray-700 dark:text-gray-300"
              >
                Personalized Reminders
              </h3>
              <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
                Receive daily reminders so you don't miss any training sessions.
              </p>
            </div>
          </div>

          <!-- Feature 2 -->
          <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div
              class="p-6 max-w-sm mx-auto flex flex-col items-center text-center"
            >
              <div
                class="flex items-center justify-center h-20 w-20 rounded-full border-2 border-secondary-300 dark:border-primary-300"
              >
                <!-- Icono de Seguimiento de Progreso -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-secondary-300 dark:text-primary-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 17l-1-1-1 1v-4l-2-2V9a2 2 0 112 2h2a2 2 0 110-4 2 2 0 112 2v2l-2 2v4l-1-1-1 1z"
                  />
                </svg>
              </div>
              <h3
                class="mt-8 text-lg font-medium text-gray-700 dark:text-gray-300"
              >
                Progress Tracking
              </h3>
              <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
                Monitor your progress with detailed statistics and graphs.
              </p>
            </div>
          </div>

          <!-- Feature 3 -->
          <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div
              class="p-6 max-w-sm mx-auto flex flex-col items-center text-center"
            >
              <div
                class="flex items-center justify-center h-20 w-20 rounded-full border-2 border-secondary-300 dark:border-primary-300"
              >
                <!-- Icono de Entrenamientos Personalizados -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-secondary-300 dark:text-primary-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 015.656-5.656M9 19v2a2 2 0 11-4 0v-2a2 2 0 10-4 0v2a6 6 0 0012 0v-2a2 2 0 00-4 0zm14-7a9 9 0 10-18 0v3.5l-2 2.5h20l-2-2.5V12z"
                  />
                </svg>
              </div>
              <h3
                class="mt-8 text-lg font-medium text-gray-700 dark:text-gray-300"
              >
                Personalized Training
              </h3>
              <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
                Design exercise routines adapted to your needs and objectives
              </p>
            </div>
          </div>

          <!-- Feature 4 -->
          <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div
              class="p-6 max-w-sm mx-auto flex flex-col items-center text-center"
            >
              <div
                class="flex items-center justify-center h-20 w-20 rounded-full border-2 border-secondary-300 dark:border-primary-300"
              >
                <!-- Icono de Comunicación en Tiempo Real -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-secondary-300 dark:text-primary-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M5 18h14M4 6h16"
                  />
                </svg>
              </div>
              <h3
                class="mt-8 text-lg font-medium text-gray-700 dark:text-gray-300"
              >
                Real Time Communication
              </h3>
              <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
                Connect with coaches and teammates in real time.
              </p>
            </div>
          </div>

          <!-- Feature 5 -->
          <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div
              class="p-6 max-w-sm mx-auto flex flex-col items-center text-center"
            >
              <div
                class="flex items-center justify-center h-20 w-20 rounded-full border-2 border-secondary-300 dark:border-primary-300"
              >
                <!-- Icono de Entrenamientos en Video -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-secondary-300 dark:text-primary-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 10l4.553-4.553c.628-.628.247-1.707-.707-1.707H5c-.828 0-1.5.672-1.5 1.5V15c0 .828.672 1.5 1.5 1.5h13.846c.954 0 1.335-1.079.707-1.707L15 10zm-2 5v6"
                  />
                </svg>
              </div>
              <h3
                class="mt-8 text-lg font-medium text-gray-700 dark:text-gray-300"
              >
                Video Trainings
              </h3>
              <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
                Access a vast library of video training.
              </p>
            </div>
          </div>

          <!-- Feature 6 -->
          <div class="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
            <div
              class="p-6 max-w-sm mx-auto flex flex-col items-center text-center"
            >
              <div
                class="flex items-center justify-center h-20 w-20 rounded-full border-2 border-secondary-300 dark:border-primary-300"
              >
                <!-- Icono de Planificación de Nutrición -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8 text-secondary-300 dark:text-primary-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 4l4 4m0 0l-4 4m4-4H7m-4 0h2M5 6h.01M5 10h.01M5 14h.01M5 18h.01"
                  />
                </svg>
              </div>
              <h3
                class="mt-8 text-lg font-medium text-gray-700 dark:text-gray-300"
              >
                Nutrition Planning
              </h3>
              <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
                Plan your daily meals with our nutrition tool.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

  
  <script>
export default {
  name: "FeaturesSection",
};
</script>
  
  <style scoped>
/* You can add additional styles here if needed */
</style>
  