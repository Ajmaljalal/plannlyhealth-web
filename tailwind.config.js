const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: "transparent",
      pDark: '#180D37',
      pPink: '#EF3770',
      pDarkPink: '#D41F57',
      pWhite: '#FFFFFF',
      pLightGray: '#EBEAF1',
      pDarkGray: '#807896',
      pSun: '#FEB840',
      pPurple: '#C124EB',
      pRed: '#C124EB',
      pBlue: '#C124EB',
      pGreen: '#C124EB',
    },
    extend: {
      fontFamily: {
        primary: ['var(--lato-font)', ...fontFamily.sans],

      },
      h1: {
        fontSize: '38px',
        lineHeight: '46px',
        fontWeight: '900',
      },
      h2: {
        fontSize: '24px',
        lineHeight: '28px',
        fontWeight: '700',
      },
      h3: {
        fontSize: '18px',
        lineHeight: '24px',
        fontWeight: '900',
      },
      h4: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '700',
      },
      h5: {
        fontSize: '14px',
        lineHeight: '24px',
        fontWeight: '700',
      },
      h6: {
        fontSize: '12px',
        lineHeight: '14px',
        fontWeight: '700',
      },
      p: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '500',
      },
      '.caption': {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: '500',
      },
      '.small-caption': {
        fontSize: '12px',
        lineHeight: '14px',
        fontWeight: '700',
      },
  

    },
    plugins: [],
  }
}
