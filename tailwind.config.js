/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      "primary": "#E7FCDC",
      "secondary": "#547046",
      "tertiary": "#649B46"
    },
  },
  plugins: [],
}