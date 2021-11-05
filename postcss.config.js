module.exports = {
  parser: require('postcss-scss'),
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    require('tailwindcss/nesting'),
  ]
}
