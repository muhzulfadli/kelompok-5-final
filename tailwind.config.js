/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: '1.5rem'
    },
    extend: {
      fontFamily: {
        main: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        purple1: '#E2D4F0',
        purple2: '#D0B7E6',
        purple3: '#A06ECE',
        purple4: '#7126B5',
        purple5: '#4B1979',
      },
      boxShadow: {
        'auto': '0px 0px 4px rgba(0, 0, 0, 0.15)'
      },
      fontSize: {
        'tiny': '.625rem',
      },
    },
  },
  plugins: [],
}
