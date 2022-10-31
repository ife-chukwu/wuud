/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {

      backgroundImage:{
        'hero-background':'url("../ImagesPack/living-room.jpg")'
      }
    },
  },
  plugins: [],
}