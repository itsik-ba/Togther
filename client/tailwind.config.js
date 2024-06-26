/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '300px',  
        'sm': '580px',  
        'md': '668px',  
        'lg': '1024px', 
        'xl': '1280px', 
        '2xl': '1536px' 
      },
    },
    colors:{
    dragMe:'#AFD275',
    userName:"#7E685A",
    buttoms:"#C2B9B0",
    lightBlue:"#C2CAD0",
    mainPink:"#E7717D",
    navBar:"#1F2833",
    navBar2:"#124E66",
    textColor:"#FEFFFF",
    erorrs:"#d30000",
    },
  },
  plugins: [],
}