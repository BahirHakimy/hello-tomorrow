/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#ec5242',
        'primary-transparent': '#ec524299',
        secodary: '#272a31',
        light: '#d3d3d3',
        'dark-smoke': '#4c4c4c',
      },
      fontFamily: { Lato: 'Lato', Cocogoose: 'Cocogoose' },
    },
  },
  plugins: [],
};

