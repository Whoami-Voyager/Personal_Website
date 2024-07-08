/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        appleBeige: '#F4EBC3',
        appleAccent: '#69582E',
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
