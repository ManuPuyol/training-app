import { defineStore } from 'pinia'

export const useDarkMode = defineStore('darkmode', {
    state: () => ({
      darkmode: false,
    }),
    actions: {
      setDarkMode(value: boolean) {
        this.darkmode = value
      },
      // Alterna el modo oscuro
        toggleDarkMode() {
        this.darkmode = !this.darkmode
      },
    },
    getters: {
        isDarkMode: (state) => state.darkmode,
    },
    
  })
