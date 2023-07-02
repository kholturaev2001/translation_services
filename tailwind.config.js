/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        'navbar-color': 'rgba(46, 40, 38, 1)',
      },
    },
    fontFamily: {
      sans: ['Akzidenz-Ext', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
};