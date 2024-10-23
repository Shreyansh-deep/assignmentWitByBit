/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F8CD0",
        textGray: "#808080"
      },
      height: {
        "10.5" : "42px"
      }
    },
  },
  plugins: [],
}

