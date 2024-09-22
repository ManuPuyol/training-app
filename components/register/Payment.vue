<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full px-4">
    <!-- Columna Izquierda - Datos de Tarjeta -->
    <div>
      <!-- Iconos de métodos de pago -->
      <div class="flex justify-start space-x-4 mb-6 text-gray-600">
        <!-- Icono de Mastercard -->
        <img
          src="/assets/logos/mastercard.svg"
          alt="Mastercard"
          class="w-12 h-8"
        />
        <!-- Icono de Visa -->
        <img src="/assets/logos/visa.svg" alt="Visa" class="w-12 h-8" />
      </div>

      <form @submit.prevent="submitPayment" class="space-y-4">
        <!-- Título de Datos de Facturación -->
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Billing Information</h3>

        <!-- Datos de Facturación -->
        <div class="relative mb-6">
          <input
            type="text"
            id="billing-name"
            class="border block px-2.5 bg-transparent pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-300 focus:outline-none focus:ring-0 focus:border-secondary-300 peer"
            placeholder=" "
          />
          <label
            for="billing-name"
            class="absolute text-sm text-gray-500 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-primary-400 px-2 peer-focus:px-2 peer-focus:text-secondary-300 peer-focus:dark:text-primary-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >Billing Name</label
          >
        </div>

        <div class="relative mb-6">
          <input
            type="text"
            id="billing-address"
            class="border block px-2.5 bg-transparent pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-300 focus:outline-none focus:ring-0 focus:border-secondary-300 peer"
            placeholder=" "
          />
          <label
            for="billing-address"
            class="absolute text-sm text-gray-500 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-primary-400 px-2 peer-focus:px-2 peer-focus:text-secondary-300 peer-focus:dark:text-primary-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >Billing Address</label
          >
        </div>

        <!-- Título de Datos de la Tarjeta -->
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Payment Information</h3>

        <!-- Datos de la Tarjeta -->
        <div class="relative mb-6">
          <input
            type="text"
            id="cardholder-name"
            class="border block px-2.5 bg-transparent pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-300 focus:outline-none focus:ring-0 focus:border-secondary-300 peer"
            placeholder=" "
          />
          <label
            for="cardholder-name"
            class="absolute text-sm text-gray-500 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-primary-400 px-2 peer-focus:px-2 peer-focus:text-secondary-300 peer-focus:dark:text-primary-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >Cardholder Name</label
          >
        </div>

        <div class="relative mb-6">
          <input
            type="text"
            id="card-number"
            class="border block px-2.5 bg-transparent pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-300 focus:outline-none focus:ring-0 focus:border-secondary-300 peer"
            placeholder=" "
          />
          <label
            for="card-number"
            class="absolute text-sm text-gray-500 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-primary-400 px-2 peer-focus:px-2 peer-focus:text-secondary-300 peer-focus:dark:text-primary-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >Card Number</label
          >
        </div>

        <div class="flex space-x-4">
          <div class="flex-1">
            <div class="relative">
              <input
                type="text"
                id="expiry-date"
                class="border block px-2.5 bg-transparent pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-300 focus:outline-none focus:ring-0 focus:border-secondary-300 peer"
                placeholder=" "
              />
              <label
                for="expiry-date"
                class="absolute text-sm text-gray-500 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-primary-400 px-2 peer-focus:px-2 peer-focus:text-secondary-300 peer-focus:dark:text-primary-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >MM/YY</label
              >
            </div>
          </div>
          <div class="flex-1">
            <div class="relative">
              <input
                type="text"
                id="cvv"
                class="border block px-2.5 bg-transparent pb-2.5 pt-4 w-full text-sm text-gray-900 rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary-300 focus:outline-none focus:ring-0 focus:border-secondary-300 peer"
                placeholder=" "
              />
              <label
                for="cvv"
                class="absolute text-sm text-gray-500 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-primary-400 px-2 peer-focus:px-2 peer-focus:text-secondary-300 peer-focus:dark:text-primary-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >CVV</label
              >
            </div>
          </div>
        </div>
      </form>
    </div>

    <!-- Columna Derecha - Resumen de la compra -->
    <div class="bg-background-100 rounded-lg p-4">
      <h2 class="text-xl font-bold mb-4 text-gray-700">Order Summary</h2>

      <!-- Item comprado -->
      <div
        class="bg-white border-2 border-secondary-300 rounded-lg p-4 mb-6 flex items-center space-x-4"
      >
        <!-- Cuadrado para la imagen -->
        <div class="w-16 h-16 bg-secondary-300 rounded-lg"></div>
        <!-- Nombre y precio del item -->
        <div>
          <p class="font-semibold text-gray-700">TRAINER PLAN</p>
          <p ><span class="text-xl text-gray-700 font-semibold">$30</span><span class="text-gray-500 text-sm">/month</span></p>
        </div>
      </div>

      <!-- Información adicional -->
      <div class="space-y-4">
        <div class="flex justify-between">
          <span class="text-gray-500">Delivery Time</span>
          <span>22/09/2024</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-500">Invoice</span>
          <span>000-1234-CARD-001</span>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <span class="text-gray-500">Discount</span>
          <span>10%</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-500">Subtotal</span>
          <span>$9,99</span>
        </div>
      </div>

      <hr class="my-4" />

      <div class="flex justify-between font-bold text-lg">
        <span class="text-gray-500">Total</span>
        <span class="text-gray-700">$19,99</span>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { reactive } from "vue";

const form = reactive({
  cardName: "",
  cardNumber: "",
  expiration: "",
  cvv: "",
});

const submitPayment = () => {
  console.log("Processing payment...", form);
};
</script>
  
  <style scoped>
/* Estilos adicionales si son necesarios */
</style>
  