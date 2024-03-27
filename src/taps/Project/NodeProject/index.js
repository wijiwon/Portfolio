import React from "react";
import ImageContainer from "../../../components/Project/ImageContainer";
import NodeProjectImgs from "../../../components/Project/ImageContainer/NodeProject";

import { FaCheck, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiSocketdotio, SiMysql, SiAmazonaws, SiExpress } from "react-icons/si";

const index = () => {
  return (
    <div className="flex flex-col mx-[30px]">
      <div className="flex w-full">
        <div className="w-full p-5">
          <ImageContainer Imgs={NodeProjectImgs} />
        </div>
        <div className="w-full">
          <p className="p-5 text-[30px] font-extrabold">페이지 소개</p>
          <ul className="w-full">
            <li className="flex items-center w-full mt-2">
              <div className="font-extrabold text-[20px] w-[25%] text-start">
                게시글 페이지
              </div>
              <div className="w-[70%] text-start ">
                작성된 게시글을 페이지네이션으로 확인. 게시글 상세에서 사진 및
                본문 확인과 댓글 작성 가능.
              </div>
            </li>
            <li className="flex items-center w-full mt-2">
              <div className="font-extrabold text-[20px] w-[25%] text-start">
                게임대기 페이지
              </div>
              <div className="w-[70%] text-start ">
                접속 중인 유저 확인 가능. 실시간 채팅 기능 구현. 게임 대기중인
                게임 방 접속 가능.
              </div>
            </li>
            <li className="flex items-center w-full mt-2">
              <div className="font-extrabold text-[20px] w-[25%] text-start">
                게임 페이지
              </div>
              <div className="w-[70%] text-start ">
                유저마다 임의의 제시문 입력. canvas를 이용한 그림판으로 제시문
                표현. 유저가 그린 그림이 어떤 제시문을 말하는지 유추하며 진행 후
                게임결과에서 진행상황 확인.
              </div>
            </li>
            <li className="flex items-center w-full mt-2">
              <div className="font-extrabold text-[20px] w-[25%] text-start">
                마이 페이지
              </div>
              <div className="w-[70%] text-start ">개인 프로필 변경 가능</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <div className="w-full px-5">
          <ul>
            <li>
              <div className="text-start font-extrabold text-[23px] mt-3">
                프로젝트 소개
              </div>
              <div className="text-start">
                게임에 참여중인 유저끼리 문제를 만들어 제시하고 랜덤으로 받은
                제시어를 그림으로 표현하여 다른 유저가 그린 그림을 보고 제시어를
                유추하는 게임
              </div>
            </li>
            <li>
              <div className="text-start font-extrabold text-[23px] mt-3">
                진행 기간
              </div>
              <div className="text-start">
                2023. 06. 02 ~ 2023. 06. 26 (약 3주)
              </div>
            </li>
            <li>
              <div className="text-start font-extrabold text-[23px] mt-3">
                개발 인원 & 담당 업무
              </div>
              <div className="text-start">4명 (backend 4명 / frontend 4명)</div>
              <div className="text-start mt-1">
                frontend, backend (CSS 총괄, 그림판, 게임로직 담당)
              </div>
            </li>

            <li>
              <div className="text-start font-extrabold text-[23px] mt-3">
                기술 스택
              </div>
              <div className="flex justify-around">
                <FaHtml5 size={35} />
                <IoLogoJavascript size={35} />
                <FaNodeJs size={35} />
                <SiExpress size={35} />
                <SiSocketdotio size={35} />
                <SiMysql size={35} />
                <SiAmazonaws size={35} />
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full pr-5">
          <ul>
            <li>
              <div className="text-start font-extrabold text-[23px] mt-3">
                주요 업무
              </div>
              <div className="text-start">
                <ul>
                  <li className="flex w-full mt-3 items-center">
                    <div className="w-[10%] flex justify-center">
                      <FaCheck size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="w-[90%] text-start">
                      canvas를 이용한 그림판 제작 및 captureStream과
                      MediaRecorder을 이용한 그림 녹화 구현
                    </div>
                  </li>
                  <li className="flex w-full mt-3 items-center">
                    <div className="w-[10%] flex justify-center">
                      <FaCheck size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="w-[90%] text-start">
                      녹화된 미디어 데이터를 Blob객체로 DB에 저장
                    </div>
                  </li>
                  <li className="flex w-full mt-3 items-center">
                    <div className="w-[10%] flex justify-center">
                      <FaCheck size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="w-[90%] text-start">게임 로직 구현</div>
                  </li>
                  <li className="flex w-full mt-3 items-center">
                    <div className="w-[10%] flex justify-center">
                      <FaCheck size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="w-[90%] text-start">
                      포토샵을 활용한 CSS 작업
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
