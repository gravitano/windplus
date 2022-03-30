const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.pink,
        info: colors.sky,
        warning: colors.amber,
        error: colors.red,
        success: colors.emerald,
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
