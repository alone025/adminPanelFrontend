/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'popins': ["Poppins",  'sans-serif'],
      "inter": ["Inter", "sans-serif"],
      "azosans": ['AzonSans', "sans-serif"],
      "azosansLight": ['AzonSans-light', "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}

