/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFC831',
        'darkPhone': '#15141B',
        'itemsDarkPhone': '#191922',
        'black-04': '#201E2C',
      },
      backgroundImage: {
        'greenPhone': 'url(./assets/loginPhone.png)'
      }
    },
    container: {
      center: true,
      padding: '28px'
    },
    screens: {
      'xs': {'max': '576px'},
      'sm': {'max': '768px'},
      'md': {'max': '992px'},
      'lg': {'min': '1496px'},
    },
  },
  darkMode: 'selector',
  plugins: [],
}

