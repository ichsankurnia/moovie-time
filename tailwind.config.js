/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'movie-1': '#E5E5E5',
        'movie-2': '#929292',
        'movie-3': '#292E35',
        'movie-4': '#1E232A',
        'movie-5': '#15191E'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      maxWidth: {
        desk: '1368px'
      },
      width: {
        desk: '1368px'
      }
    },
  },
  plugins: [],
}