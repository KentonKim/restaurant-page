/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      width: {
        100: "25rem",
        200: "50rem",
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'moon-raker': {
        50: '#f7f6fc',
        100: '#f0eef9',
        200: '#e2e0f4',
        300: '#c9c2ea',
        400: '#b2a6df',
        500: '#9781d1',
        600: '#8465c2',
        700: '#7353ae',
        800: '#604592',
        900: '#503a78',
        950: '#332550',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
