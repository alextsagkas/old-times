/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E445B",
      },
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        libreCalsonText: ["Libre Calson Text", "serif"],
        vujahddayScript: ["Vujahdday Script", "cursive"],
      },
    },
  },
  plugins: [],
};
