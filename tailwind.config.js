/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      fontpp: ["Poppins", 'sans-serif']
    },
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui'),],
}