import React from "react";

const index = () => {
  return (
    <div className="w-[100%] mt-[120px] mb-[60px] flex items-center justify-end text-white">
      {/* <img
        className="border-2 w-[400px] h-[400px] rounded-full mr-[300px]"
        src=""
        alt="프로필이미지"
      /> */}
      <div className="flex flex-col mr-[13%]">
        <div className="text-left text-[30px] mb-[60px]">
          <span className="font-bold">안녕하세요,</span>
          <br /> 프론트엔드 개발자{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[40px] font-bold">위지원</span>
            <span className="absolute bottom-[5px] left-0 right-0 h-[20%] bg-blue-400 z-0"></span>
          </span>
          입니다.
        </div>
        <div className="text-[30px] mb-[60px]">
          <p>"</p>
          <p>
            배움을 게을리하지 않는,
            <br /> 꾸준히 노력하는 개발자입니다.
          </p>
          <p>"</p>
        </div>
        <div className=" text-right text-[20px]">
          <p>1998. 02. 14</p>
          <p>dnlwldnjs5@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default index;
