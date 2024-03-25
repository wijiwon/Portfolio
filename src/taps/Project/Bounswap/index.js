import React from "react";

const index = () => {
  return (
    <div className="flex flex-col mx-[30px]">
      <div className="border-2 flex w-full">
        <div className="w-full p-5 bg-violet-300">
          {/* 여기에도 프로젝트 사진 gif로 슬라이더 사용해서 넣을 것! */}
          <div className="">
            <img alt="프로젝트 이미지" className="border-2 h-[350px]" />
          </div>
        </div>
        <div className="w-full bg-red-300">
          페이지 별 간단한 설명 나열
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <div className="w-full bg-indigo-300">프로젝트 소개</div>
        <div className="w-full bg-cyan-500">담당 업무 및 주요 업무</div>
      </div>
    </div>
  );
};

export default index;
