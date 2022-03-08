const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: false,
  important: true,
  theme: {
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
