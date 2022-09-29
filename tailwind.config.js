/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/Home/Home.js','./src/components/Navbar/Navbar.js','./src/components/auth/Login.js'],
  theme: {
    extend: {
      colors:{
        'misty':'#E6EBEF'
        ,'low-black':'rgba(0, 0, 0, 0.561)'
      }
    },
  },
  plugins: [],
}
