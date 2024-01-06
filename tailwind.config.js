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
        customWidth: { min: "592px", max: "624px" },
        customWidth2: { min: "625px", max: "768px" },
        customTextWidth: { min: "375px", max: "530px" },
        mdl: "1024px",
      },
    },
  },
  plugins: [],
};
