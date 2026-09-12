const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E445B",
        secondary: colors.orange,
      },
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        libreCalsonText: ["Libre Calson Text", "serif"],
        vujahddayScript: ["Vujahdday Script", "cursive"],
        // Correctly spelled families, matching the Google Fonts loaded in
        // `_document.tsx`. The two entries above keep their historical
        // (misspelled) names so existing pages render unchanged.
        caslon: ["Libre Caslon Text", "serif"],
        script: ["Vujahday Script", "cursive"],
      },
      screens: {
        xs: "500px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-7px)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 900ms cubic-bezier(0.16, 1, 0.3, 1) both",
        float: "float 7s ease-in-out infinite",
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
