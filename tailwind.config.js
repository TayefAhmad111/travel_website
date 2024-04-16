/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          1: "#4361EE",
          2: "#4CC9F0",
          3: "#7209B7",
          4: "#3A0CA3",
          5: "#F72585",
        },
        gray: {
          1: "#D4D4D4",
          2: "#AAAAAA",
          3: "#808080",
          4: "#2B2B2B",
          5: "#0B090A",
        },
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
    },
  },
  plugins: [],
};
