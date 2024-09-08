/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Usa la clase 'dark' para activar el modo oscuro
  content: [
    './components/**/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*.{vue,js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#EAE0FF',  // Tonalidades para Primary
          100: '#D0B9FF',
          200: '#B28FFF',
          300: '#8C57FF', // Color principal
          400: '#312D4B',
          500: '#5A1DD2',
          600: '#4D1A9D',
          700: '#3D1471',
          800: '#2E0E48',
          900: '#1F072A',
        },
        secondary: {
          50: '#FFEBEB',  // Tonalidades para Secondary
          100: '#FFCECE',
          200: '#FF9D9D',
          300: '#FF4C51', // Color principal
          400: '#E03B42',
          500: '#C12D34',
          600: '#A7242A',
          700: '#891D1F',
          800: '#6C1616',
          900: '#4F0F0F',
        },
        accent: {
          50: '#E5F9E8',  // Tonalidades para Accent
          100: '#C4F2D2',
          200: '#A0E3B9',
          300: '#22A95E', // Color principal
          400: '#1F8C4E',
          500: '#1B6F3E',
          600: '#175C30',
          700: '#124925',
          800: '#0D361A',
          900: '#08261A',
        },
        background: {
          50: '#FFFFFF',  // Tonalidades para Background
          100: '#F7F9FB',
          200: '#F0F2F8',
          300: '#F4F5FA', // Color principal
          400: '#E2E4F1',
          500: '#C4C8E0',
          600: '#A0A4C1',
          700: '#7C7D9F',
          800: '#595B6D',
          900: '#383B45',
        },
        yellow: {
          50: '#FFEB66',  // Tonalidades para Dark Primary
          100: '#FFDA4D',
          200: '#FFC533',
          300: '#FFB400', // Color principal
          400: '#DDA700',
          500: '#AA8E00',
          600: '#8F7400',
          700: '#6B5C00',
          800: '#4B3D00',
          900: '#2E1F00',
        },
        dark: {
          background: {
            50: '#3F3A57',  // Tonalidades para Dark Background
            100: '#2F2A4D',
            200: '#24204D',
            300: '#28243D', // Color principal
            400: '#1F1A2D',
            500: '#1A1621',
            600: '#16121A',
            700: '#12101A',
            800: '#0E0A12',
            900: '#0B060D',
          },
        },
      },
      zIndex: {
        '100': '100', // Personaliza este valor según sea necesario
        '200': '200', // Otro valor personalizado si es necesario
        '1000': '1000' // Un valor muy alto para pruebas
      },
      backgroundImage: {
        'custom-secondary-gradient': 'linear-gradient(-72.47deg, #6A2CFF 22.16%, #8C57FF 76.47%)',
        'custom-primary-gradient': 'linear-gradient(-72.47deg, #FF4C51 22.16%, #E03B42 76.47%)',
        'landing-gradient-dark': 'radial-gradient(circle,rgba(97, 78, 159, 1) 0%,rgba(49, 45, 75, 1) 100%)',
        'landing-gradient': 'radial-gradient(circle, rgba(255,207,208,1) 0%, rgba(240,242,248,0.9836309523809523) 57%)'

      },
    },
  },
  plugins: [],
}
