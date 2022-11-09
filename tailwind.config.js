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

      backgroundImage: {
        app: 'url(/app-bg.png)'
      },

      colors: {
        ignite: {
          500: '#129E57'
        },
        yellow: {
          500: '#F7DD43',
          700: '#BBA733',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          600: '#323238',
          800: '#202024',
          900: '#121214',
          950: '#09090A',
        }
      }
    },
  },
  plugins: [],
}
