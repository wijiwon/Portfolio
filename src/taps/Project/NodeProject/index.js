import React from "react";
import ImageContainer from "../../../components/Project/ImageContainer/NodeProject";
import NodeProjectImgs from "../../../components/Project/ImageContainer/NodeProject/Images";
import ProjectTitle from "../../../components/ProjectTitle";

import { FaCheck, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSocketdotio, SiMysql, SiAmazonaws, SiExpress } from "react-icons/si";

const index = (props) => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center justify-evenly">
        <ProjectTitle
          num="03"
          title="그림 일심 동체"
          git="https://github.com/wijiwon/Monami"
        />
        <div className="flex mobile:flex-col ">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full">
              <ImageContainer Imgs={NodeProjectImgs} />
              <div className="pc:pl-9 w-full mobile:flex mobile:justify-center text-gray-600">
                <div className="text-start font-bold text-[17px] mobile:text-[12px] pc:mt-3">
                  진행 기간.
                  <span className="text-start font-light text-[13px] mobile:text-[10px] ml-2">
                    2023. 06. 02 ~ 2023. 06. 26 (약 3주)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-2 flex flex-col justify-center">
            <ul>
              <li>
                <div className="text-start font-extrabold text-[20px] mobile:text-[14px] mt-1">
                  프로젝트 소개
                </div>
                <div className="text-start text-[15px] mobile:text-[10px] mt-1">
                  게임에 참여 중인 유저끼리 문제를 만들어 제시하고 랜덤으로 받은
                  제시어를 그림으로 표현하여 다른 유저가 그린 그림을 보고
                  제시어를 유추하는 게임 사이트
                </div>
              </li>
              <li className="mobile:hidden">
                <div className="text-start font-extrabold text-[20px] mt-3">
                  개발 인원
                </div>
                <div className="text-[15px] text-start mt-1">
                  4명 (backend 4명 / frontend 4명)
                </div>
              </li>

              <li>
                <div className="text-start font-extrabold text-[20px] mobile:text-[14px] mt-3">
                  담당 업무
                </div>
                <div className="text-start">
                  <ul>
                    <li className="flex w-full mt-1">
                      <div className="flex mt-1 mr-2 mobile:hidden">
                        <FaCheck size={15} style={{ color: "60a5fa" }} />
                      </div>
                      <div className="flex mr-2 mt-1 pc:hidden">
                        <FaCheck size={12} style={{ color: "60a5fa" }} />
                      </div>
                      <div className="text-[15px] w-[90%] mobile:w-full text-start mobile:text-[10px]">
                        Canvas를 이용한 그림판 제작
                      </div>
                    </li>
                    <li className="flex w-full mt-1">
                      <div className="flex mt-1 mr-2 mobile:hidden">
                        <FaCheck size={15} style={{ color: "60a5fa" }} />
                      </div>
                      <div className="flex mr-2 mt-1 pc:hidden">
                        <FaCheck size={12} style={{ color: "60a5fa" }} />
                      </div>
                      <div className="text-[15px] w-[90%] mobile:w-full text-start mobile:text-[10px]">
                        CaptureStream과 MediaRecorder을 이용한 그림 녹화 구현
                      </div>
                    </li>
                    <li className="flex w-full mt-1">
                      <div className="flex mt-1 mr-2 mobile:hidden">
                        <FaCheck size={15} style={{ color: "60a5fa" }} />
                      </div>
                      <div className="flex mr-2 mt-1 pc:hidden">
                        <FaCheck size={12} style={{ color: "60a5fa" }} />
                      </div>
                      <div className="w-[90%] mobile:w-full text-start text-[15px] mobile:text-[10px]">
                        녹화된 미디어 데이터를 Blob객체로 DB에 저장
                      </div>
                    </li>
                    <li className="flex w-full mt-1">
                      <div className="flex mt-1 mr-2 mobile:hidden">
                        <FaCheck size={15} style={{ color: "60a5fa" }} />
                      </div>
                      <div className="flex mr-2 mt-1 pc:hidden">
                        <FaCheck size={12} style={{ color: "60a5fa" }} />
                      </div>
                      <div className="w-[90%] mobile:w-full text-start text-[15px] mobile:text-[10px]">
                        게임 로직 구현
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="mobile:hidden">
                <div className="text-start font-extrabold text-[23px] mt-3">
                  기술 스택
                </div>
                <div className="flex justify-around mt-1">
                  <div className="flex flex-col items-center">
                    <FaHtml5 size={35} />
                    <p className="text-[12px] font-bold">Html5</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <IoLogoJavascript size={35} />
                    <p className="text-[12px] font-bold">Javascript</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <FaNodeJs size={35} />
                    <p className="text-[12px] font-bold">Node.js</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiExpress size={35} />
                    <p className="text-[12px] font-bold">Express</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiSocketdotio size={35} />
                    <p className="text-[12px] font-bold">Socket.io</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiMysql size={35} />
                    <p className="text-[12px] font-bold">Mysql</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiAmazonaws size={35} />
                    <p className="text-[12px] font-bold">AWS</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
