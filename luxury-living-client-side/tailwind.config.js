/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#251D58",
          secondary: "#F6F6F6",
          accent: "#FFAC0C",
          neutral: "#878787",
          "base-100": "#ffffff",
          info: "#E5E5E5",
          success: "#009444",
          warning: "#DF7E07",
          error: "#FF4545",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}