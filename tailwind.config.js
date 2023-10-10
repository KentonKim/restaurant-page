/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}'
  ],
  // purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '400' : '400px',
      }
    },
  },
  variants: {
  extend: {},
  },
  plugins: [],
};
