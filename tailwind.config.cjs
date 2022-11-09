/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {

      backgroundImage:{
        'hero-background':'url("https://www.mondiniarredamenti.it/media/homepage/image/prova-divano-pc.jpg")'
      }
    },
  },
  plugins: [],
}