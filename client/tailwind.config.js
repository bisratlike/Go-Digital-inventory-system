/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#F68934', 
        'secondary-color': '#012035',
        'tertiary': '#aaa',
        'background-color': '#F4F5FC',
        'primary-color-hover': '#F68934/80%'
        
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

