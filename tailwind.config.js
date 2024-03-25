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
          transform: "translateY(0%) rotate(45deg)",
          transform: "translateY(0%) rotate(45deg)",
          "animation-timing-function": "cubic-bezier(0,0,0.2,1)",
        },
      },
    },
  },
  plugins: [],
};
