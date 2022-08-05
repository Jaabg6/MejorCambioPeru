/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: {
    applyComplexClasses: true,
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark' : '#1b191a',
        'dark-light' : '#413c3e',
        'red-light' : '#e63e48',
        'red-medium' : "#b33038",
        'red-dark' : '#7a191f',
      },

    },
  },
  backgroundColors: {
  },
  screens: {
    
  },
  plugins: [],
}