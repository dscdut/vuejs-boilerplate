/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vue': '#42b883',
        'vue-shade': '#2E805B',
      }
    },
  },
  plugins: [],
}