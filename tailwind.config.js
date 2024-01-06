/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
      },
    },
  },
  plugins: [],
};
