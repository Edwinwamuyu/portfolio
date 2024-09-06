/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css.js}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#232526',
        'grey': '#6c6c6c',
        'bluey': '#CACACA',
      },
    },
  },
  plugins: [],
}

