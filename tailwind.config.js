/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    keyframes: {
      bounce: {
        "0%, 100%": {
          transform: "translateY(-75%)",
          // transform: "translateY(-75%) rotate(45deg)",
          "animation-timing-function": "cubic-bezier(0.8,0,1,1)",
        },
        "50%": {
          transform: "translateY(0%)",
          transform: "translateY(0%)",
          "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
        },
      },
    },
    screens: {
      mobile: { min: "0px", max: "480px" },
      // onepageX: { min: "481px", max: "1050px" },
      pc: { min: "480px" },
    },
  },
  plugins: [],
};
