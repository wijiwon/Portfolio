import React from "react";
import ImageContainer from "../../../components/Project/ImageContainer";
import NoBrokerImgs from "../../../components/Project/ImageContainer/NoBroker";

import { FaReact, FaCheck, FaNodeJs } from "react-icons/fa";
import { SiAmazonaws, SiReactquery, SiMysql, SiExpress } from "react-icons/si";

const index = () => {
  return (
    <div className="flex flex-col mx-[30px]">
      <div className="flex mobile:flex-col w-full">
        <div className="w-full pc:p-5 mobile:mt-5">
          <ImageContainer Imgs={NoBrokerImgs} />
        </div>
        <div className="w-full mobile:hidden">
          <p className="p-3 text-[30px] font-extrabold">페이지 소개</p>
          <ul className="w-full">
            <li className="flex items-center w-full mt-2">
              <div className="font-extrabold text-[20px] w-[25%] text-start">
                매물 목록 & 등록
              </div>
              <div className="w-[70%] text-start ">
                지역 검색 및 구글맵에서 매물을 확인이 가능하며 특정 조건의
                매물을 확인할 수 있도록 필터 검색 가능. multer를 이용한 여러
                장의 사진 등록 가능.
              </div>
            </li>
            <li className="flex items-center w-full mt-2">
              <div className="font-extrabold text-[20px] w-[25%] text-start">
                마이페이지
              </div>
              <div className="w-[70%] text-start ">
                사이트에서 보유하고 있는 해당 계정의 총 보유 자산과 입출금이
                가능하고, 등록 매물, 취소 보상내역, 투표한 매물 등 확인 가능과
                회원정보 수정 가능.
              </div>
            </li>
            <li className="flex items-center w-full mt-2">
              <div className="font-extrabold text-[20px] w-[25%] text-start">
                투표목록
              </div>
              <div className="w-[70%] text-start ">
                공인중개사 회원만 들어갈 수 있는 페이지. 등록된 매물의 허위여부
                판단을 위해 투표진행. 투표를 진행한 회원에게 보상제공.
              </div>
            </li>
            <li className="flex items-center w-full mt-2">
              <div className="font-extrabold text-[20px] w-[25%] text-start">
                관리자페이지
              </div>
              <div className="w-[70%] text-start ">
                가입된 유저의 정보를 확인할 수 있는 페이지. 회원가입 신청한
                유저의 정보를 확인하고 가입승인 가능.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex mobile:flex-col">
        <div className="w-full pc:px-5">
          <ul>
            <li>
              <div className="text-start font-extrabold text-[23px] mobile:text-[16px] mt-3">
                프로젝트 소개
              </div>
              <div className="text-start mobile:text-[14px]">
                매수인과 매도인이 중개사 없이 직접 매물을 거래할 수 있는 부동산
                매매 사이트
              </div>
            </li>
            <li>
              <div className="text-start font-extrabold text-[23px] mobile:text-[16px] mt-3">
                진행 기간
              </div>
              <div className="text-start mobile:text-[14px]">
                2023. 07. 28 ~ 2023. 08. 28 (약 4주)
              </div>
            </li>
            <li>
              <div className="text-start font-extrabold text-[23px] mobile:text-[16px] mt-3">
                개발 인원 & 담당 업무
              </div>
              <div className="text-start mobile:text-[14px]">
                4명 (backend 4명 / frontend 4명)
              </div>
              <div className="text-start mobile:text-[14px] mt-1">
                frontend, backend (메인, 회원가입, 로그인 페이지 담당)
              </div>
            </li>
            <li className="mobile:hidden">
              <div className="text-start font-extrabold text-[23px] mt-3">
                기술 스택
              </div>
              <div className="flex justify-around">
                <FaReact size={35} />
                <SiReactquery size={35} />
                <FaNodeJs size={35} />
                <SiExpress size={35} />
                <SiMysql size={35} />
                <SiAmazonaws size={35} />
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full pt-5">
          <ul>
            <li>
              <div className="text-start font-extrabold text-[23px] mobile:text-[16px] mt-3">
                주요 업무
              </div>
              <div className="text-start mobile:text-[14px]">
                <ul>
                  <li className="flex w-full mt-3 mobile:mt-2 items-center">
                    <div className="w-[10%] flex justify-center mobile:hidden">
                      <FaCheck size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="w-[90%] mobile:w-full text-start">
                      NASA Worldwind API를 활용한 3D 지구 구현. 원하는 좌표에
                      핀을 찍어 매물이 위치한 나라를 표시
                    </div>
                  </li>
                  <li className="flex w-full mt-3 mobile:mt-2 items-center">
                    <div className="w-[10%] flex justify-center mobile:hidden">
                      <FaCheck size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="w-[90%] mobile:w-full text-start">
                      회원가입 시, kakaoMap API를 활용하여 사용자의 거주지
                      입력과 multer를 활용해 사용자의 인감등의 증빙자료 첨부.
                      Mysql을 활용하여 DB에 회원의 정보 저장.
                    </div>
                  </li>
                  <li className="flex w-full mt-3 mobile:mt-2 items-center">
                    <div className="w-[10%] flex justify-center mobile:hidden">
                      <FaCheck size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="w-[90%] mobile:w-full text-start">
                      jwt accessToken을 활용한 로그인 구현. jwt.verify를 활용한
                      로그인 상태를 검증하는 미들웨어 구현.
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
