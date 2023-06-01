/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#000000',
      darkGrey: '#0D0E0E',
      lightGrey: '#1D2020',
      grey: '#252525',
      textGrey: '#EBEBEB',
      white: '#EAEBEB',
      font: '#141414'
    },
  },
  plugins: [],
}