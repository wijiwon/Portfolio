import React from "react";

import { FaGithub } from "react-icons/fa";

import { AiOutlineExport } from "react-icons/ai";

const index = (props) => {
  return (
    <div className="mt-[60px] mx-[30px] box-content border-b-8 mobile:border-b-4 border-gray-600 flex mobile:flex-col justify-between">
      <div className="text-[50px] mobile:text-[20px] text-left font-bold font-['KOHIBaeumOTF']">
        {props.title}
      </div>
      <div className="flex items-end mobile:text-[12px] mobile:w-full mobile:justify-end">
        <div className="flex">
          <div
            className="flex items-center cursor-pointer z-10"
            onClick={() => {
              window.open(props.git, "_blank");
            }}
          >
            <div className="mobile:hidden">
              <FaGithub size={30} className="mobile:hidden" />
            </div>
            <p className="font-bold pc:ml-1 mobile:border-2 mobile:rounded-full mobile:p-1 mobile:border-[#60a5fa]">
              GitHub <span className="pc:hidden">이동</span>
            </p>
          </div>
          {props.name && (
            <div
              className="flex items-center ml-5 cursor-pointer z-10"
              onClick={() => {
                window.open(props.site, "_blank");
              }}
            >
              <div className="mobile:hidden">
                <AiOutlineExport size={30} />
              </div>
              <p className="font-bold pc:ml-1 mobile:border-2 mobile:rounded-full mobile:p-1 mobile:border-[#60a5fa]">
                {props.name} <span className="pc:hidden">이동</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
