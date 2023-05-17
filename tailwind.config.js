/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [{
      myTheme: {
        primary: "#FEBF00",
        secondary: "#E0035D",
        neutral: "#000000",
        "base-100": "#FFFFFF",
        "base-200": "#FF7F00"
      }
    }]
  }
}

