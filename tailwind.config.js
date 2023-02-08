const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
    fontFamily: {
      overpass: ["var(--font-overpass)"],
      ubuntu: ["var(--font-ubuntu)"],
    },
    colors: {
      primary: {
        red: {
          100: "hsl(355, 100%, 74%)",
          200: "hsl(356, 100%, 66%)",
        },
        blue: "hsl(208, 49%, 24%)",
      },
      neutral: {
        700: "hsl(240, 2%, 79%)",
        800: "hsl(207, 13%, 34%)",
        900: "hsl(240, 10%, 16%)",
      },
      gradient: {
        red: {
          100: "hsl(13, 100%, 72%)",
          200: "hsl(353, 100%, 62%)",
        },
        blue: {
          800: "hsl(237, 17%, 21%)",
          900: "hsl(237, 23%, 32%)",
        },
      },
      transparent: colors.transparent,
      white: colors.white,
    },
  },
  plugins: [],
};
