const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
      width: {
        '600': '600px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
