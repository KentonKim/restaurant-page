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
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
