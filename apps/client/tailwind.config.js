const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      base: {
        white: '#ffffff',
        black: '#000000',
      },
      brand: {
        25: '#F5F8FF',
        50: '#EFF4FF',
        100: '#D1E0FF',
        200: '#B2CCFF',
        300: '#84ADFF',
        400: '#528BFF',
        500: '#2970FF',
        600: '#155EEF',
        700: '#004EEB',
        800: '#0040C1',
        900: '#00359E',
      },
    },
    fontSize: {
      heading: {
        h5: '24',
      },
      body: {
        regular: '16',
        semibold: '16',
      },
    },
    fontFamily: {
      primary: ['IranSans', 'sans-serif'],
    },
    extend: {
      colors: {
        gray: {
          25: '#FCFCFD',
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
        },
      },
    },
  },
  plugins: [],
};
