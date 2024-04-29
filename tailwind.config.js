/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#000000", //Banner Background
        "gray-50": "#f27055",
        "gray-100": "#090909",
        "gray-500": "#ffffff", //Navlinks, Paragraph Text, Button Text, headdings
        "primary-100": "#000000", //Nav on Scroll
        "primary-200": "#d8fc01", //Active Navlink, button
        "primary-300": "#8f8f8f", //This is  navlink on Hover
        "primary-500": "#5392ea", //Card on Hover, Links, Button on Hover
        "primary-600": "#ff0000", //Error Message
        "secondary-400": "#FFCD5B",
        "secondary-500": "#f27055",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #6794fe0%, #ff0000 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
