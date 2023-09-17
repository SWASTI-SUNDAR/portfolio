/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: 
    {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        Qwitcher: ["Qwitcher Grypen", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Adlom: ["Adlom Display", "cursive"],
      },
    },
  },
  plugins: [


  ],
};
