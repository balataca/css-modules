const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      './**/*.js',
      './**/*.jsx'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        yellow: {
          ...defaultTheme.colors.yellow,
          'clutchprep': '#FFC933'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
