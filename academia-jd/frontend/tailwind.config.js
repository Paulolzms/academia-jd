/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FFD700",     // Amarelo
        secondary: "#DC2626",   // Vermelho
        dark: "#111111",        // Preto
      }
    },
  },
  plugins: [],
}