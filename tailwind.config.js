/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: '#E53935',
        ripeMango: '#FBC02D',
        princetonOrange: '#FB8C00',
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
