const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        'mobile': '480px',
        'tablet': '768px',
        'desktop': '992px'
      },
      backgroundColor: {
        basic: 'hsl(185, 41%, 84%)'
      },
      colors: {
        'cal-grey-50': 'hsl(189, 47%, 97%)',
        'cal-grey-200': 'hsl(185, 41%, 84%)',
        'cal-grey-400': 'hsl(184, 14%, 56%)',
        'cal-grey-500': 'hsl(186, 14%, 43%)',
        'cal-green-200': 'hsl(166, 64, 79)',
        'cal-green-400': 'hsl(172, 67%, 45%)',
        'cal-green-900': 'hsl(183, 100%, 15%)'
      },
      fontFamily: {
        spacemono: [
          'Space Mono',
          ...defaultTheme.fontFamily.sans
        ],
      },
    }
  },
  plugins: [],
}
