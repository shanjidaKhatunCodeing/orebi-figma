/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      //font family
      fontFamily: {
        'dm': ['DM Sans'],
      },
      //font family

      //colors
      color:{
        'headingColor': '#262626',
        'textColor': '#767676',
        'listColor': '#6D6D6D',
        'categoryColor': '#DBEBFF',
        'categoryBoderColor': '#979797',
        'bannerColor': '#D8D8D8',
        'placeholderColor': '#C4C4C4',
        'fotterColor': '#F3F4F6',
        'boderColor': '#F0F0F0',
      },
      //colors

      //max width
      maxWidth: {
        'container': '1200px',
      }
      //max width
    },
  },
  plugins: [],
}

