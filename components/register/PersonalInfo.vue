<template>
  <div>
    <!-- Personal Info Step -->
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
    <div class="relative mb-6">
      <input
        type="password"
        id="password"
        class="border block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg bg-transparent border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-300 focus:outline-none focus:ring-0 focus:border-secondary-300 peer"
        placeholder=" "
      />
      <label
        for="password"
        class="absolute text-sm text-gray-500 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-primary-400 px-2 peer-focus:px-2 peer-focus:text-secondary-300 peer-focus:dark:text-primary-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >Password</label
      >
    </div>
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center">
        <input
          id="remember-me"
          type="checkbox"
          class="h-4 w-4 text-secondary-300 accent-secondary-300 dark:accent-primary-300 rounded"
        />
        <label for="remember-me" class="ml-2 block text-sm text-gray-700"
          >I agree to
          <a
            href="#"
            class="font-medium text-secondary-300 dark:text-primary-300 hover:text-secondary-500 dark:hover:text-primary-500"
            >privacy policy & terms</a
          ></label
        >
      </div>
    </div>
  </div>
</template>