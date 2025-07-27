/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'savemom-teal': '#0D9394', 
        'savemom-logo-text': '#384551',
        'kpi-bg':'#f4feff',
      },
      fontFamily: {
        
        sans: ['Public Sans', 'sans-serif'],
       
      }
    },
  },
  plugins: [],
}