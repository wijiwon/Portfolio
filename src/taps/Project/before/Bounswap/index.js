import React from "react";
import ImageContainer from "../../../../components/Project/ImageContainer";
import BounswapImgs from "../../../../components/Project/ImageContainer/Bounswap/Images";

import { FaReact, FaCheck } from "react-icons/fa";
import {
  SiTypescript,
  SiSolidity,
  SiTailwindcss,
  SiAmazons3,
  SiFigma,
  SiAmazonaws,
  SiAmazonroute53,
} from "react-icons/si";

const index = () => {
  return (
    <div className="flex flex-col mx-[30px]">
      <div className="flex mobile:flex-col w-full">
        <div className="w-full pc:p-5 mobile:mt-5">
          <ImageContainer Imgs={BounswapImgs} />
        </div>
        <div className="w-full mobile:hidden">
          <p className="p-5 text-[30px] font-extrabold">페이지 소개</p>
          <ul className="w-full">
            <li className="flex items-center w-full mt-2">
              <div className="font-extrabold text-[20px] w-[25%] text-start">
                Swap
              </div>
              <div className="w-[70%] text-start ">
                플랫폼 내 예치된 토큰을 자유롭게 교환
              </div>
            </li>
            <li className="flex items-center w-full mt-2">
              <div className="font-extrabold text-[20px] w-[25%] text-start">
                Liquidity
              </div>
              <div className="w-[70%] text-start ">
                사용자는 원하는 풀(Pool)에 자신이 가지고 있는 토큰을 페어로
                자유롭게 예치 유동성 공급 비율에 따른 수익분배
              </div>
            </li>
            <li className="flex items-center w-full mt-2">
              <div className="font-extrabold text-[20px] w-[25%] text-start">
                Staking
              </div>
              <div className="w-[70%] text-start ">
                스테이킹 풀에 예치한 기간 & 토큰의 양에 비례하여 메인넷 코인을
                보상으로 부여
              </div>
            </li>
            <li className="flex items-center w-full mt-2">
              <div className="font-extrabold text-[20px] w-[25%] text-start">
                Governance
              </div>
              <div className="w-[70%] text-start ">
                플랫폼에 기여하고 있는 유저들이 커뮤니티의 방향성에 대한 제안 및
                투표로 의사를 표하고 결정을 내림
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
              <div className="text-start mobile:text-[12px]">
                Uniswap의 분산형 자동화 마켓 메이커(AMM)를 기반으로 사용자에게
                유동성과 다양한 수익창출의 기회를 제공하는 탈중앙화 거래소
              </div>
            </li>
            <li>
              <div className="text-start font-extrabold text-[23px] mobile:text-[16px] mt-3">
                진행 기간
              </div>
              <div className="text-start mobile:text-[12px]">
                2023. 11. 01 ~ 2023. 12. 05 (약 6주)
              </div>
            </li>
            <li>
              <div className="text-start font-extrabold text-[23px] mobile:text-[16px] mt-3">
                개발 인원 & 담당 업무
              </div>
              <div className="text-start mobile:hidden">
                5명 (contract 3명 / front 2명)
              </div>
              <div className="text-start mobile:hidden">
                frontend (개발 환경설정, 페이지 구현 및 배포)
              </div>
              <div className="text-start pc:hidden text-[12px]">
                5명 / frontend (개발 환경설정, 페이지 구현 및 배포)
              </div>
            </li>

            <li className="mobile:hidden">
              <div className="text-start font-extrabold text-[23px] mt-3">
                기술 스택
              </div>
              <div className="flex justify-around">
                <FaReact size={35} />
                <SiTypescript size={35} />
                <SiSolidity size={35} />
                <SiTailwindcss size={35} />
                <SiAmazonaws size={35} />
                <SiAmazons3 size={35} />
                <SiAmazonroute53 size={35} />
                <SiFigma size={35} />
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full pr-5">
          <ul>
            <li>
              <div className="text-start font-extrabold text-[23px] mobile:text-[16px] mt-3">
                주요 업무
              </div>
              <div className="text-start">
                <ul>
                  <li className="flex w-full mt-3 mobile:mt-2 pc:items-center">
                    <div className="w-[10%] flex justify-center mobile:hidden">
                      <FaCheck size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="w-[10%] flex justify-center mt-1 pc:hidden">
                      <FaCheck size={12} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="w-[90%] mobile:w-full text-start mobile:text-[12px]">
                      각 탭의 DashBoard, Tokens & Pools & Stake detail 페이지,
                      Governance 페이지 반응형 UI 구현
                    </div>
                  </li>
                  <li className="flex w-full mt-3 mobile:mt-2 pc:items-center">
                    <div className="w-[10%] flex justify-center mobile:hidden">
                      <FaCheck size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="w-[10%] flex justify-center mt-1 pc:hidden">
                      <FaCheck size={12} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="w-[90%] mobile:w-full text-start mobile:text-[12px]">
                      <span className="mobile:hidden">
                        Tailwind를 활용한 페이지 구현:
                      </span>
                      Tailwind를 활용하여 컴포넌트 디자인 구현, dark 모드와
                      @media, hover 등의 기능을 활용한 반응형 앱웹 구현
                    </div>
                  </li>
                  <li className="flex w-full mt-3 mobile:mt-2 pc:items-center">
                    <div className="w-[10%] flex justify-center mobile:hidden">
                      <FaCheck size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="w-[10%] flex justify-center mt-1 pc:hidden">
                      <FaCheck size={12} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="w-[90%] mobile:w-full text-start mobile:text-[12px]">
                      <span className="mobile:hidden">
                        React-query를 이용한 데이터 비동기 처리:
                      </span>
                      React-query를 사용하여 비동기적으로 데이터를 동기화하고
                      업데이트를 시켜 Dex 환경에 맞도록 포커싱될 때마다 데이터를
                      업데이트 할 수 있도록 구현
                    </div>
                  </li>
                  <li className="flex w-full mt-3 mobile:mt-2 pc:items-center">
                    <div className="w-[10%] flex justify-center mobile:hidden">
                      <FaCheck size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="w-[10%] flex justify-center mt-1 pc:hidden">
                      <FaCheck size={12} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="w-[90%] mobile:w-full text-start mobile:text-[12px]">
                      <span className="mobile:hidden">
                        AWS S3를 이용한 정적 배포:
                      </span>
                      AWS에서 s3, CloudFront를 이용하여 정적으로 빌드파일 배포
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
