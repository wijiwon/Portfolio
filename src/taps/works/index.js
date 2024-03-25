import React from "react";
import MainTitle from "../../components/MainTitle";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
const index = () => {
  return (
    <>
      <MainTitle title="Work" />
      <ul className="mt-[20px]">
        <li className="flex mx-[30px] px-7 w-full mt-[30px]">
          <HiOutlineOfficeBuilding
            style={{ color: "#60a5fa", width: "7%" }}
            size={35}
          />
          <div className=" w-[20%] flex flex-col items-start text-[14px] text-gray-700">
            <div>2018.12 ~ 2022.06 </div>
            <div>3년 7개월</div>
          </div>
          <div className="text-[18px]">
            늘푸른메디컬
            <span className="text-[14px] ml-[5px]">(대리/온라인MD)</span>
          </div>
        </li>
      </ul>
    </>
  );
};

export default index;
