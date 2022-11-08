/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // folder with files that will be stylized
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      colors: {
        gray: {
          900: '#121214'
        }
      }
    },
  },
  plugins: [],
}
