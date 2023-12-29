/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: { screens: {
    xs: "360px",
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['Inter', "sans-serif"],
      },
      colors: {
       primaryColor: '#5429FF',
       accentColor: '#CBCCE8',
       gray: '#344054',
       lightGray: '#667085',
      },
    },
  },
  plugins: [],
}
