/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: '#61BB46',
        ripeMango: '#FDB827',
        princetonOrange: '#F5821F',
        jasper: '#E03A3E',
        plum: '#963D97',
        richElectricBlue: '#009DDC',
        appleBeige: '#F4EBC3',
        appleAccent: '#69582e',
        terminalGreen: '#00FF33'
      },
      fontFamily: {
        ThinkDifferent: ['AppleGaramond', 'sans-serif'],
        Cooper: ['CooperFive', 'sans-serif'],
        ttNorms: ['TTnorms', 'sans-serif']
      },
    },
  },
  plugins: [],
}
