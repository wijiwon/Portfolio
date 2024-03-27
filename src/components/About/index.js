import React from "react";
import { AiOutlineExport } from "react-icons/ai";

const index = () => {
  return (
    <div className="w-[100%] mt-[120px] mb-[60px] flex items-center justify-end mobile:justify-center text-white">
      {/* <img
        className="border-2 w-[400px] h-[400px] rounded-full mr-[300px]"
        src=""
        alt="프로필이미지"
      /> */}
      <div className="flex flex-col pc:mr-[13%]">
        <div className="text-left text-[30px] mb-[60px] mobile:text-[20px]">
          <span className="font-bold">안녕하세요,</span>
          <br /> 프론트엔드 개발자{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[40px] font-bold mobile:text-[30px]">위지원</span>
            <span className="absolute bottom-[5px] left-0 right-0 h-[20%] bg-blue-400 z-0"></span>
          </span>
          입니다.
        </div>
        <div className="text-[30px] mb-[60px] mobile:text-[20px]">
          <p>"</p>
          <p>
            배움을 게을리하지 않는,
            <br /> 꾸준히 노력하는 개발자입니다.
          </p>
          <p>"</p>
        </div>
        <div className=" text-right text-[20px] mobile:text-[15px]">
          <p>1998. 02. 14</p>
          <p>dnlwldnjs5@gmail.com</p>
        </div>
        <div className="w-full mt-14 flex justify-end">
          <div
            className="font-semibold text-[20px] flex items-center cursor-pointer hover:text-[#60a5fa]"
            onClick={() => {
              window.open("https://oo0ojw.tistory.com/", "_blank");
            }}
          >
            <p className="mr-1">Blog</p>
            <AiOutlineExport />
          </div>
          <div
            className="font-semibold text-[20px] ml-5 flex items-center cursor-pointer hover:text-[#60a5fa]"
            onClick={() => {
              window.open("https://github.com/wijiwon", "_blank");
            }}
          >
            <p className="mr-1">GitHub</p>
            <AiOutlineExport />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
