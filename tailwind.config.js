/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        brand: {
          orange: "#ff4b2b",
          pink: "#ff416c",
        },
      },
    },
  },
  plugins: [],
};
