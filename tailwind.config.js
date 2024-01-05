/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      screens: {
        xs: "360px",
        sm: "480px",
        md: "768px",
        lg: "976px",
        "2lg": "1160px",
        xl: "1440px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary_600: "#E31B52",
        green_500: "#F63D68",
        green_400: "#FD6F8E",
        lightGray: "#667085",
      },
    },
  },
  plugins: [],
};
