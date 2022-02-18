const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Roboto', 'sans-serif']
      },
      colors: {
        primary: colors.blue,
        secondary: colors.green,
        'primary-compliment': colors.cyan,
        'secondary-compliment': colors.lime
      }
    },
  },
  plugins: [],
}
