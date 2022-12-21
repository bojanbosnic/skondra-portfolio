/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "7.25rem",
      },
    },

    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        black: "#292826",
        white: "#FFFFFF",
        body: "#F5F5F5",
        silver: "#BABABA",
        fade: " rgba(255, 255, 255, 0.6)",
      },
    },
  },
  plugins: [],
};
