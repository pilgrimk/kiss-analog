/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('/src/assets/circuit.jpg')",
        'gradient-bg': "url('/src/assets/color_gradient.jpg')",
      },        
      colors: {    
        transparent: 'transparent',
        current: 'currentColor',
        'accent-light': {
          500: '#c8eff6',
          600: '#a4c3c8',
          700: '#81989d',
          800: '#5f7073',
          900: '#404a4c',
        },
        'accent-dark': {
          50: '#dfe6f4',
          100: '#bfcee9',
          200: '#9eb6de',
          300: '#7b9fd3',
          400: '#5489c8',
          500: '#1573bd',
          600: '#1c5f9b',
          700: '#1e4c7a',
          800: '#1c395a',
          900: '#18283d',
        },
      },      
    },
    plugins: [],
  }
}
