/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background_light': "url('src/assets/background-light.svg')",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

