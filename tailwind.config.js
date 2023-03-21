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
      pDark: '#180D37',
      pLight: '#f2f4f7',
      pPink: '#EF3770',
      pDarkPink: '#D41F57',
      pWhite: '#FFFFFF',
      pLightGray: '#b6b6b6',
      pBackground:'#ebeaf1',
      pDarkGray: '#807896',
      pSun: '#FEB840',
      pPurple: '#C124EB',
      pRed: '#FE3D51',
      pBlue: '#5DB2E1',
      pGreen: '#16C470',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
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
