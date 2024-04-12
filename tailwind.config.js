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
      down: {
        // 요소들 각 화면에 떨어지면 애니메이션 클래스 붙여서 보여지게 하고 빠지면 다시 클래스 빼서 애니메이션 효과 없애기 1회만 실행
        "0%": {
          transform: "translateY(100px)",
          opecity: "0%",
        },
        "100%": { transform: "translateY(0px)", opecity: "100%" },
      },
      // linkBounce: {
      //   "0%, 100%": { transform: "scale(1)" },
      //   "50%": { transform: "scale(1.15)" },
      // },
      linkBounce: {
        "0%": { transform: "translateY(0px)" },
        "15%": { transform: "translateY(-10px) scaleY(1.12)" },
        "30%": { transform: "translateY(0px) scaleY(1)" },
        "45%": { transform: "translateY(-7px) scaleY(1)" },
        "55%": { transform: "translateY(0px) scaleY(1)" },
        "65%": { transform: "translateY(-4px) scaleY(1)" },
        "80%": { transform: "translateY(0px) scaleY(1)" },
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
