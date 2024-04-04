import React from "react";
import ImageContainer from "../../../components/Project/ImageContainer/Bounswap";
import BounswapImgs from "../../../components/Project/ImageContainer/Bounswap/Images";
import ProjectTitle from "../../../components/ProjectTitle";
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

const index = (props) => {
  return (
    <div className="flex bg-white rounded-3xl border-8 mobile:border-5 border-[#60a5fa]">
      <div className="flex flex-col items-center justify-evenly">
        <ProjectTitle
          num="01"
          title="Bounswap"
          name="Bounswap"
          git="https://github.com/wijiwon/Bounswap_Front"
          site="https://www.bounswap.site/"
        />
        <div className="flex mobile:flex-col ">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full mobile:mt-4">
              <ImageContainer Imgs={BounswapImgs} />
              <div className="pc:pl-9 w-full mobile:flex mobile:justify-center text-gray-600">
                <div className="text-start font-bold text-[17px] mobile:text-[12px] pc:mt-3">
                  진행 기간.
                  <span className="text-start font-light text-[13px] mobile:text-[10px] ml-2">
                    2023. 11. 01 ~ 2023. 12. 05 (약 6주)
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
                  Uniswap의 분산형 자동화 마켓 메이커(AMM)를 기반으로 사용자에게
                  유동성과 다양한 수익창출의 기회를 제공하는 탈중앙화 거래소
                </div>
              </li>
              <li className="mobile:hidden">
                <div className="text-start font-extrabold text-[20px] mt-3">
                  개발 인원
                </div>
                <div className="text-[15px] text-start mt-1">
                  5명 (contract 3명 / front 2명)
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
                        각 탭의 DashBoard, Tokens & Pools & Stake detail 페이지,
                        Governance 페이지 반응형 UI 구현
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
                        Tailwindcss를 활용하여 컴포넌트 UI, dark 모드, @media,
                        hover 등의 기능을 활용한 반응형 앱웹 구현
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
                        React-query를 사용하여 비동기적으로 데이터를 동기화하고
                        업데이트를 시켜 Dex 환경에 맞도록 포커싱될 때마다
                        데이터를 업데이트 할 수 있도록 구현
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
                        보일러 플레이트를 최소화하고자 반복적으로 사용되는
                        함수나 컨트랙트 코드를 features 디렉토리에 모듈화{" "}
                      </div>
                    </li>{" "}
                    <li className="flex w-full mt-1">
                      <div className="flex mt-1 mr-2 mobile:hidden">
                        <FaCheck size={15} style={{ color: "60a5fa" }} />
                      </div>
                      <div className="flex mr-2 mt-1 pc:hidden">
                        <FaCheck size={12} style={{ color: "60a5fa" }} />
                      </div>
                      <div className="w-[90%] mobile:w-full text-start text-[15px] mobile:text-[10px]">
                        Typescript 환경 설정, 인터페이스 설정으로 코드 안정성
                        향상
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
                        web3 라이브러리와 Metamask를 이용한 스마트 컨트랙트 연동
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
                        AWS에서 s3, CloudFront를 이용하여 정적으로 빌드파일 배포
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
                    <FaReact size={35} />
                    <p className="text-[12px] font-bold">React</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiTypescript size={35} />
                    <p className="text-[12px] font-bold">Typescript</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiSolidity size={35} />
                    <p className="text-[12px] font-bold">Solidity</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiTailwindcss size={35} />
                    <p className="text-[12px] font-bold">
                      Tailwind
                      <br />
                      css
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiAmazonaws size={35} />
                    <p className="text-[12px] font-bold">AWS</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiAmazons3 size={35} />
                    <p className="text-[12px] font-bold">
                      AWS
                      <br />
                      S3
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiAmazonroute53 size={35} />
                    <p className="text-[12px] font-bold">
                      AWS
                      <br />
                      Route53
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiFigma size={35} />
                    <p className="text-[12px] font-bold">Figma</p>
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
