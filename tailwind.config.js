/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '104': '33rem', // Valor intermedio entre 96 y 112
      }
    },
  },
  plugins: [],
}

