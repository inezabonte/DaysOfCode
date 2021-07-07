module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#e7f5fe",
          100: "#b7e1fb",
          200: "#86cdf8",
          300: "#56b9f5",
          400: "#26a5f3",
          500: "#0c8bd9",
          600: "#0a6ca9",
          700: "#074d79",
          800: "#042e48",
          900: "#010f18",
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
