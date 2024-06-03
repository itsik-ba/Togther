/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',   // Small screens and up
        'md': '768px',   // Medium screens and up
        'lg': '1024px',  // Large screens and up
        'xl': '1280px',  // Extra large screens and up
        '2xl': '1536px', // 2x Extra large screens and up
        // Custom screen sizes
        'tablet': '600px', // Example custom screen size
        'laptop': '1200px', // Example custom screen size
        'desktop': '1440px', // Example custom screen size
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