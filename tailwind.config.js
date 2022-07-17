/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
        'nunito': 'nunito sans'
    },
    fontWeight: {
      lt: 300,
      nm: 600,
      bold: 800
    },
    extend: {
      colors: {
        "blue": {
          "dark" : 'hsl(209, 23%, 22%)'
        },
        'bgcolor': {
          'dark': 'hsl(207, 26%, 17%)',
          'light': 'hsl(200, 15%, 8%)'
        },
        "gray": {
          "dark": "hsl(0, 0%, 52%)",
          "light": "hsl(0, 0%, 98%)"
        },
      },
      fontSize: { 
        homepage: '14px',
        detail: '16px'
      },
    },
  },
  plugins: [],
}
