import React from "react";
import About from "../../components/About";

import { IoIosArrowDropdown } from "react-icons/io";
const index = () => {
  return (
    <>
      <div className="absolute w-[100%] h-[100vh] bg-[url('./image/IMG_3172.jpeg')] bg-cover" />
      <div className="absolute flex flex-col w-[100%] p-10 h-[100vh] justify-center items-center bg-black/60">
        <About />
        <a
          className=" text-white animate-[bounce_1s_ease-in-out_infinite]"
          href="#sectionTwo"
        >
          <IoIosArrowDropdown size={50} />
        </a>
      </div>
    </>
  );
};

export default index;
