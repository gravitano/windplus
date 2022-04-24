const plugin = require('tailwindcss/plugin')

export default plugin(function({ addComponents }) {
  addComponents({
    '.btn': {
      padding: '.5rem 1rem',
      borderRadius: '.25rem',
      fontWeight: '600',
    },
  })
})