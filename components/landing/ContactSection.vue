<template>
  <section
    id="contact-section"
    class="bg-gray-100 dark:bg-dark-background-100 py-12"
  >
    <div class="w-[90%] lg:w-[75%] xl:w-[60%] mx-auto">
      <div class="text-center">
        <h2
          class="text-base text-lg font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide"
        >
          Contact us
        </h2>
        <p
          class="mt-2 text-xl leading-8 font-bold text-gray-700 dark:text-gray-300 sm:text-3xl"
        >
          We're just a message away
        </p>
        <p
          class="mt-4 max-w-2xl text-md text-gray-500 dark:text-gray-400 mx-auto"
        >
          Feel free to reach out to our team via email or live chat. We're happy
          to assist you!"
        </p>
      </div>
      <div
        class="max-w-3xl mx-auto mt-12 p-6 bg-white dark:bg-primary-400 rounded-lg shadow border dark:border-gray-500"
      >
        <h2
          class="text-base text-lg font-semibold text-gray-700 dark:text-gray-300 tracking-wide mb-8"
        >
          Contact us
        </h2>
        <form>
          <!-- Username input -->
          <div class="relative mb-6">
            <input
              type="text"
              id="username"
              class="border block px-2.5 bg-transparent pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-300 focus:outline-none focus:ring-0 focus:border-secondary-300 peer"
              placeholder=" "
            />
            <label
              for="username"
              class="absolute text-sm text-gray-500 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-primary-400 px-2 peer-focus:px-2 peer-focus:text-secondary-300 peer-focus:dark:text-primary-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >Username</label
            >
          </div>

          <!-- Email input -->
          <div class="relative mb-6">
            <input
              type="email"
              id="email"
              class="border block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg bg-transparent border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-300 focus:outline-none focus:ring-0 focus:border-secondary-300 peer"
              placeholder=" "
            />
            <label
              for="email"
              class="absolute text-sm text-gray-500 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-primary-400 px-2 peer-focus:px-2 peer-focus:text-secondary-300 peer-focus:dark:text-primary-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >Email</label
            >
          </div>

          <!-- Message input -->
          <div class="relative mb-6">
            <textarea
              id="message"
              rows="4"
              class="border block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg bg-transparent border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-300 focus:outline-none focus:ring-0 focus:border-secondary-300 peer"
              placeholder=" "
            ></textarea>
            <label
              for="message"
              class="absolute text-sm text-gray-500 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-primary-400 px-2 peer-focus:px-2 peer-focus:text-secondary-300 peer-focus:dark:text-primary-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Message
            </label>
          </div>

          <!-- Submit button -->
          <button
            type="submit"
            class="flex w-full items-center justify-center dark:bg-primary-300 bg-secondary-300 text-white font-semibold py-2 px-4 rounded-lg hover:bg-secondary-400 hover:dark:bg-primary-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>