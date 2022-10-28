/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'custom':['Nunito'],
      },
      colors:{
        primary:'#ff6363',
        secondary:{
          100:'#e2e2d5',
          200:'#888883'
        }
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        
        'md': '868px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      } 
    },
  },
  plugins: [],
}
