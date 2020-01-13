/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    minHeight:{
      'screen': '84vh',
    },
    extend: {
      colors: {
        'noobpink': {
          100: '#FFF2F5',
          200: '#FFDFE7',
          300: '#FFCCD8',
          400: '#FFA5BA',
          500: '#FF7F9D',
          600: '#E6728D',
          700: '#994C5E',
          800: '#733947',
          900: '#4D262F',
        },
        'noobblue': {
          100: '#EDF0FA',
          200: '#D1D9F3',
          300: '#B5C2EB',
          400: '#7E94DC',
          500: '#4766CD',
          600: '#405CB9',
          700: '#2B3D7B',
          800: '#202E5C',
          900: '#151F3E',
        },
        'noobdark': {
          100: '#E9E9EA',
          200: '#C7C8CB',
          300: '#A6A7AC',
          400: '#63656E',
          500: '#202330',
          600: '#1D202B',
          700: '#13151D',
          800: '#0E1016',
          900: '#0A0B0E',
        },
      }
    },
    fontFamily: {
      'heading': ['Alata'],
    },
  },
  variants: {
    display: ['responsive', 'hover', 'focus'],
  },
  plugins: []
}
