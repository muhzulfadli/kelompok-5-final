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
        neutral1: '#FFFFFF',
        neutral2: '#D0D0D0',
        neutral3: '#8A8A8A',
        neutral4: '#3C3C3C',
        neutral5: '#151515',
        neutral6: '#000000',
        successAlert: '#73CA5C',
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
