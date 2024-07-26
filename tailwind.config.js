/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm-max': { 'max': '639px' },
        'md-max': { 'max': '767px' },
        'lg-max': { 'max': '1023px' },
      }
    },
  },
  plugins: [],
}

