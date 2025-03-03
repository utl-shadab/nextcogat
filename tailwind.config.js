/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: 16,
        center: true,
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        fredoka: ["Fredoka", "sans-serif"],
      },
    },
  },
  plugins: [],
};
// font-fredoka
// font-poppins
