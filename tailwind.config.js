const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      brand_voilet: '#5F369D',
      brand_blue_voilet: '#441E82',
      brand_dark_blue: '#290568',
      brand_grey_voilet: '#8476B1',
      brand_voilet_light: '#AC9DDB',
      brand_voilet_lighter: '#C8B8F8',
      brand_voilet_hue: '#F1EEFA',
      brand_pink_dark: '#D98BA7',
      brand_pink: '#F6A6C2',
      brand_pink_light: '#EBCFE4',
      basic_black: '#160523',
      basic_grey_1: '#5D5574',
      basic_grey_2: '#817989',
      basic_grey_3: '#A9A4B7',
      basic_grey_4: '#EDEDF0',
      basic_grey_5: '#FAFAFC',
      basic_grey_10: '#E9E9EE',
      basic_light: '#FEFDFD',
      basic_white: '#FFFFFF',
      system_error: '#FE3E51',
      system_success: '#42C76F',
      secondary_btn_hover: '#DEDEDE',
      primary_btn_hover: ''
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