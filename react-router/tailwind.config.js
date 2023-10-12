/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  screens: {
    'mobile': '340px',
    'tablet': '640px',

    'laptop': '1024px',

    'desktop': '1280px',
  },
}