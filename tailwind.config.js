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
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        'card-100': '0px 0px 3.34276px 1.67138px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        primary_700: "#087861",
        green_700: "#086250",
        green_600: "#0E977B",
        green_500: "#18B696",
        green_400: "#13D3AD",
        lightGray: "#F2F4F7",
        green_rgba: 'rgba(10, 106, 86, 0.03)',
      },
      keyframes: {
        "animate-fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "animate-fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-in": "animate-fade-in 0.4s ease-out backwards",
        "fade-out": "animate-fade-out 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
