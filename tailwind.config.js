/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-green': '#64ffda',
        'lightest-slate': '#ccd6f6',
        'an-slate': '#8892b0',
        'main-blue': '#020c1b',
        'sec-blue': '#0a192f'

      },
      blur: {
        xs: '1px',
      }
    },
  },
  plugins: [],
}
