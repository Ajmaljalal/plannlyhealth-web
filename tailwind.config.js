const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: '#5F369D',
      primaryDark: '#290568',
      grey: '#f2f4f7',
      lightgrey: '#EDEDF0',
      darkgrey: '#5D5574',
      background: '#FFFFFF',
      dark: '#160523',
      green: '#42C76F',
      lightgreen: '#E0F4E7',
      red: '#F03771',
      lightred: '#FDE7EE',
      ligthpink: '#EF3770',
      pink: '#D41F57',
      white: '#FFFFFF',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '900',
    },
    extend: {
      fontFamily: {
        primary: ['var(--lato-font)', ...fontFamily.sans],
      },
    },
    plugins: [],
  }
}
