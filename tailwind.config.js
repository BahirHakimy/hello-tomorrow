/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#ec5242',
        'primary-transparent': '#ec524299',
        secondary: '#272a31',
        walnut: '#3e3e3e',
        light: '#d3d3d3',
        'light-transparent': '#d3d3d366',
        'dark-smoke': '#4c4c4c',
      },
      fontFamily: { Lato: 'Lato' },
    },
  },
  plugins: [],
};

