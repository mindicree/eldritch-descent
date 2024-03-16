/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss'

module.exports = {
  content: ["./templates/**/*.{html,js}", "./static/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        ".text-shadow": {
          "text-shadow": "10px 10px 10px black"
        }
      })
    })
  ],
}