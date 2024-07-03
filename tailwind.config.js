/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: '#D32F2F',
        ripeMango: '#FBC02D',
        princetonOrange: '#FFA726',
        jasper: '#C2185B',
        plum: '#7B1FA2',
        richElectricBlue: '#1976D2',
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
