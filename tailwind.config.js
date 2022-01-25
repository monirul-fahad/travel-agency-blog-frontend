module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        java: {
          DEFAULT: "#1DBFCC",
          50: "#ADEEF3",
          100: "#9BEAF1",
          200: "#78E3EC",
          300: "#54DCE7",
          400: "#30D4E2",
          500: "#1DBFCC",
          600: "#16919B",
          700: "#0F636A",
          800: "#083539",
          900: "#010708",
        },
        black: {
          DEFAULT: "#002345",
          50: "#0080FD",
          100: "#0076E8",
          200: "#0061BF",
          300: "#004C97",
          400: "#00386E",
          500: "#002345",
          600: "#00070D",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
