/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      // Import couleurs définies James-q-Quick
      color: {
        "yellon-james": "#f4de1d",
        "red1-james": "#eb3223",
        "red2-james": "#c4483b",
        "pink1-james": "##d7605e",
        "pink2-james": "#de5254",
        "dark-james": "#212529",
        "blue1-james": "#243454",
        "blue2-james": "#2b5fa1",
        "blue3-james": "#49a1eb",
        "purple-james": "#644398",
        "purple-light-james": "#b39ed6",
        "grey-james": "#e8d8c8",
        "grey-light-james": "#eaeaea",
        "white-james": "#f9f9f9",
      },
    },
  },
  plugins: [],
};
