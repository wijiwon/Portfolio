import React from "react";

const index = ({ tap1, tap2, tap3, tap4 }) => {
  console.log("??", tap1);
  console.log("??", tap2);
  console.log("??", tap3);
  console.log("??", tap4);

  const Taps = (value) => {
    console.log("click", value);
    window.scrollTo({ top: value, left: 0, behavior: "auto" });
  };

  return (
    <div className="h-[60px] w-full fixed bg-white bg-opacity-50 flex row items-center justify-between font-['GmarketSansMedium'] z-10">
      <div className="ml-[30px] font-extrabold hover:text-[#60a5fa]">
        Wijiwon Portfolio
      </div>
      <div className="flex mr-[30px]">
        <a
          className="mr-[20px] cursor-pointer hover:text-[#60a5fa]"
          href="#sectionOne"
        >
          About
        </a>
        <a
          className="mr-[20px] cursor-pointer hover:text-[#60a5fa]"
          href="#sectionTwo"
        >
          Education
        </a>
        <a
          className="mr-[20px] cursor-pointer hover:text-[#60a5fa]"
          href="#sectionTwo"
        >
          Work
        </a>
        <a
          className="mr-[20px] cursor-pointer hover:text-[#60a5fa]"
          href="#sectionThree"
        >
          Project
        </a>
        <a className="cursor-pointer hover:text-[#60a5fa]" href="#sectionFour">
          skill
        </a>
      </div>
    </div>
  );
};

export default index;
