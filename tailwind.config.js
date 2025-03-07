/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "100%", // Full width on small screens
          md: "720px", // Medium screen size
          lg: "1399px", // Custom large screen size
          xl: "1200px", // Extra large screens
          "2xl": "1320px", // For larger desktops
        },
        padding: {
          DEFAULT: "1rem", // Default padding
          sm: "1.5rem", // Small screen padding
          md: "2rem", // Medium screen padding
          lg: "2.5rem", // Large screen padding
          xl: "3rem", // Extra-large screen padding
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
      },
    },
  },
  plugins: [],
};
