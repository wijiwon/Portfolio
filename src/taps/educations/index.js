import React from "react";
import MainTitle from "../../components/MainTitle";
import { IoIosSchool } from "react-icons/io";

const index = () => {
  return (
    <>
      <MainTitle title="Education" />
      <ul className="mt-[20px] ">
        <li className="flex pc:mx-[30px] px-7 w-full mt-[30px] mobile:mt-[20px]">
          <div className="mobile:hidden w-[10%] flex items-center justify-center">
            <IoIosSchool style={{ color: "#60a5fa" }} size={35} />
          </div>
          <div className=" w-[20%] flex flex-col items-start text-[14px] mobile:text-[10px] text-gray-700">
            <div>2022.03 ~ </div>
            <div>재학중</div>
          </div>
          <div className="text-[18px] mobile:text-[15px] w-[70%]  text-left">
            한국방송통신대학교
            <span className="text-[14px] ml-[5px]">(컴퓨터과학과)</span>
          </div>
        </li>
        <li className="flex pc:mx-[30px] px-7 w-full mt-[30px] mobile:mt-[20px] text-left">
          <div className="mobile:hidden w-[10%] flex items-center justify-center">
            <IoIosSchool style={{ color: "#60a5fa" }} size={35} />
          </div>
          <div className=" w-[20%] flex flex-col items-start text-[14px] mobile:text-[10px] text-gray-700">
            <div>2023.02 ~ 2023. 12</div>
            <div>수료</div>
          </div>
          <div className="text-[18px] mobile:text-[15px] w-[70%]">
            경일게임아카데미 '블록체인 기반 핀테크 및 응용 SW 개발자 양성과정'
          </div>
        </li>
        <li className="flex pc:mx-[30px] px-7 w-full mt-[30px] mobile:mt-[20px] text-left">
          <div className="mobile:hidden w-[10%] flex items-center justify-center">
            <IoIosSchool style={{ color: "#60a5fa" }} size={35} />
          </div>
          <div className=" w-[20%] flex flex-col items-start text-[14px] mobile:text-[10px] text-gray-700">
            <div>2016.03 ~ 2018. 02</div>
            <div>졸업</div>
          </div>
          <div className="text-[18px] mobile:text-[15px] w-[70%]">
            한림성심대학교
            <span className="text-[14px] ml-[5px]">(영상콘텐츠과)</span>
          </div>
        </li>
      </ul>
    </>
  );
};

export default index;
