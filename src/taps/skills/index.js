import React from "react";
import MainTitle from "../../components/MainTitle";

import { IoLogoJavascript } from "react-icons/io5";
import { FaPencilAlt, FaReact, FaNodeJs, FaAws, FaFigma } from "react-icons/fa";
import {
  SiTypescript,
  SiSolidity,
  SiMysql,
  SiTailwindcss,
  SiStyledcomponents,
  SiAdobephotoshop,
} from "react-icons/si";

const index = () => {
  return (
    <>
      <MainTitle title="Skill" />
      <ul className="mx-[30px]">
        <li className="mt-3 pb-5 w-full border-b-2">
          <p className="w-full text-[30px] mobile:text-[16px] font-extrabold text-start">
            Language
          </p>
          <div className="flex flex-col justify-around w-full">
            <div className="flex mobile:flex-col pc:items-center w-full pc:mt-5 mobile:mt-1">
              <div className="flex w-[25%] pc:items-center mobile:items-end">
                <div className="mobile:hidden">
                  <IoLogoJavascript size={43} />
                </div>
                <div className="pc:hidden">
                  <IoLogoJavascript size={22} />
                </div>
                <p className="text-[20px] mobile:text-[13px] font-bold pc:ml-4 mobile:ml-1">
                  Javascript
                </p>
              </div>
              <div className="flex flex-col w-full mobile:mt-1 ">
                <ul className="text-[14px] mobile:text-[10px] w-full ">
                  <li className="flex w-full">
                    <div className="mobile:hidden">
                      <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="pc:hidden mt-1">
                      <FaPencilAlt size={12} style={{ color: "60a5fa" }} />
                    </div>
                    <p className="mobile:w-[90%] ml-2 text-start">
                      자바스크립트 실행 코드 환경을 설정하는 실행 컨텍스트에
                      대해 학습하였습니다.
                    </p>
                  </li>
                  <li className="flex w-full">
                    <div className="mobile:hidden">
                      <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="pc:hidden mt-1">
                      <FaPencilAlt size={12} style={{ color: "60a5fa" }} />
                    </div>{" "}
                    <p className="mobile:w-[90%] ml-2 text-start">
                      서버와의 통신을 위한 비동기 처리를 이해하고 async/await을
                      사용해 비동기 작업을 관리하였습니다.
                    </p>
                  </li>
                  <li className="flex w-full">
                    <div className="mobile:hidden">
                      <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="pc:hidden mt-1">
                      <FaPencilAlt size={12} style={{ color: "60a5fa" }} />
                    </div>{" "}
                    <p className="mobile:w-[90%] ml-2 text-start">
                      이벤트 루프에 대해 이해하여 비동기 코드를 처리하였습니다.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex mobile:flex-col pc:items-center w-full pc:mt-5 mobile:mt-3">
              <div className="flex w-[25%] pc:items-center mobile:items-end">
                <div className="mobile:hidden">
                  <SiTypescript size={40} />
                </div>
                <div className="pc:hidden">
                  <SiTypescript size={20} />
                </div>
                <p className="text-[20px] mobile:text-[13px] font-bold pc:ml-4 mobile:ml-1">
                  Typescript
                </p>
              </div>
              <div className="flex flex-col w-full mobile:mt-1">
                <ul className="text-[14px] mobile:text-[10px] w-full">
                  <li className="flex w-full">
                    <div className="mobile:hidden">
                      <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="pc:hidden mt-1">
                      <FaPencilAlt size={12} style={{ color: "60a5fa" }} />
                    </div>{" "}
                    <p className="mobile:w-[90%] ml-2 text-start">
                      Typescript의 환경 설정이 가능합니다.
                    </p>
                  </li>
                  <li className="flex w-full">
                    <div className="mobile:hidden">
                      <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="pc:hidden mt-1">
                      <FaPencilAlt size={12} style={{ color: "60a5fa" }} />
                    </div>{" "}
                    <p className="mobile:w-[90%] ml-2 text-start">
                      코드의 안정성을 위해 Interface로 객체의 구조를
                      정의하였습니다.
                    </p>
                  </li>
                  <li className="flex w-full">
                    <div className="mobile:hidden">
                      <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="pc:hidden mt-1">
                      <FaPencilAlt size={12} style={{ color: "60a5fa" }} />
                    </div>{" "}
                    <p className="mobile:w-[90%] ml-2 text-start">
                      컴포넌트에 제네릭타입을 활용하여 재사용성을 높였습니다.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex mobile:flex-col pc:items-center w-full pc:mt-5 mobile:mt-3">
              <div className="flex w-[25%] pc:items-center mobile:items-end">
                <div className="mobile:hidden">
                  <SiSolidity size={40} />
                </div>
                <div className="pc:hidden">
                  <SiSolidity size={20} />
                </div>
                <p className="text-[20px] mobile:text-[13px] font-bold pc:ml-4 mobile:ml-1">
                  Solidity
                </p>
              </div>
              <div className="flex flex-col w-full mobile:mt-1">
                <ul className="text-[14px] mobile:text-[10px] w-full">
                  <li className="flex w-full">
                    <div className="mobile:hidden">
                      <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="pc:hidden mt-1">
                      <FaPencilAlt size={12} style={{ color: "60a5fa" }} />
                    </div>
                    <p className="mobile:w-[90%] ml-2 text-start">
                      ERC20을 기반으로 한 스마트계약 코드를 구현하였으며 Remix를
                      이용한 트랙잭션을 배포하였습니다.
                    </p>
                  </li>
                  <li className="flex w-full">
                    <div className="mobile:hidden">
                      <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="pc:hidden mt-1">
                      <FaPencilAlt size={12} style={{ color: "60a5fa" }} />
                    </div>
                    <p className="mobile:w-[90%] ml-2 text-start">
                      Dex거래소의 구조를 숙지하였습니다.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="mt-3 pb-5 w-full border-b-2">
          <p className="w-full text-[30px] mobile:text-[16px] font-extrabold text-start">
            Frontend
          </p>
          <div className="flex flex-col justify-around w-full">
            <div className="flex mobile:flex-col pc:items-center w-full pc:mt-5 mobile:mt-1">
              <div className="flex w-[25%] pc:items-center mobile:items-end">
                <div className="mobile:hidden">
                  <FaReact size={40} />
                </div>
                <div className="pc:hidden">
                  <FaReact size={20} />
                </div>

                <p className="text-[20px] mobile:text-[13px] font-bold pc:ml-4 mobile:ml-1">
                  React
                </p>
              </div>
              <div className="flex flex-col w-full mobile:mt-1">
                <ul className="text-[14px] mobile:text-[10px] w-full">
                  <li className="flex w-full">
                    <div className="mobile:hidden">
                      <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="pc:hidden mt-1">
                      <FaPencilAlt size={12} style={{ color: "60a5fa" }} />
                    </div>
                    <p className="mobile:w-[90%] ml-2 text-start">
                      Lifecycle을 학습하여 React 동작 원리에 대해
                      이해하였습니다.
                    </p>
                  </li>
                  <li className="flex w-full">
                    <div className="mobile:hidden">
                      <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="pc:hidden mt-1">
                      <FaPencilAlt size={12} style={{ color: "60a5fa" }} />
                    </div>
                    <p className="mobile:w-[90%] ml-2 text-start">
                      재사용성을 고려하여 컴포넌트 구성을 하려고 노력합니다.
                    </p>
                  </li>
                  <li className="flex w-full">
                    <div className="mobile:hidden">
                      <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="pc:hidden mt-1">
                      <FaPencilAlt size={12} style={{ color: "60a5fa" }} />
                    </div>
                    <p className="mobile:w-[90%] ml-2 text-start">
                      Redux를 이용한 간단한 전역 상태관리 경험이 있습니다.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="mt-3 pb-5 w-full border-b-2">
          <p className="w-full text-[30px] mobile:text-[16px] font-extrabold text-start">
            Backend
          </p>
          <div className="flex flex-col justify-around w-full">
            <div className="flex mobile:flex-col pc:items-center w-full pc:mt-5 mobile:mt-1">
              <div className="flex w-[25%] items-center">
                <div className="mobile:hidden">
                  <FaNodeJs size={40} />
                </div>
                <div className="pc:hidden">
                  <FaNodeJs size={20} />
                </div>
                <p className="text-[20px] mobile:text-[13px] font-bold pc:ml-4 mobile:ml-1">
                  Node.js
                </p>
              </div>
              <div className="flex flex-col w-full mobile:mt-1">
                <ul className="text-[14px] mobile:text-[10px] w-full">
                  <li className="flex w-full">
                    <div className="mobile:hidden">
                      <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="pc:hidden mt-1">
                      <FaPencilAlt size={12} style={{ color: "60a5fa" }} />
                    </div>
                    <p className="ml-2 text-start">
                      Sequelize를 이용하여 데이터베이스를 관리하였습니다.
                    </p>
                  </li>
                  <li className="flex w-full">
                    <div className="mobile:hidden">
                      <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    </div>
                    <div className="pc:hidden mt-1">
                      <FaPencilAlt size={12} style={{ color: "60a5fa" }} />
                    </div>
                    <p className="ml-2 text-start">
                      Express를 이용한 웹서버 통신이 가능합니다.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="mt-3 pb-5 w-full border-b-2">
          <p className="w-full text-[30px] mobile:text-[16px] font-extrabold text-start">
            Ect
          </p>
          <div className="flex flex-col justify-around w-full">
            <div className="flex justify-evenly items-center w-full  ">
              <div className="flex items-center">
                <div className="mobile:hidden">
                  <SiMysql size={30} />
                </div>
                <div className="pc:hidden">
                  <SiMysql size={25} />
                </div>
                <p className="text-[18px] mobile:hidden font-bold pc:ml-4 mobile:ml-1">
                  MySql
                </p>
              </div>
              <div className="flex  items-center">
                <div className="mobile:hidden">
                  <SiTailwindcss size={30} />
                </div>
                <div className="pc:hidden">
                  <SiTailwindcss size={25} />
                </div>
                <p className="text-[18px] mobile:hidden font-bold pc:ml-4 mobile:ml-1">
                  Tailwindcss
                </p>
              </div>
              <div className="flex  items-center">
                <div className="mobile:hidden">
                  <FaAws size={30} />
                </div>
                <div className="pc:hidden">
                  <FaAws size={25} />
                </div>
                <p className="text-[18px] mobile:hidden font-bold pc:ml-4 mobile:ml-1">
                  AWS
                </p>
              </div>
              <div className="flex  items-center">
                <div className="mobile:hidden">
                  <SiStyledcomponents size={30} />
                </div>
                <div className="pc:hidden">
                  <SiStyledcomponents size={25} />
                </div>
                <p className="text-[18px] mobile:hidden font-bold pc:ml-4 mobile:ml-1">
                  Styled-components
                </p>
              </div>
              <div className="flex  items-center">
                <div className="mobile:hidden">
                  <FaFigma size={30} />
                </div>
                <div className="pc:hidden">
                  <FaFigma size={25} />
                </div>
                <p className="text-[18px] mobile:hidden font-bold pc:ml-4 mobile:ml-1">
                  Figma
                </p>
              </div>
              <div className="flex items-center">
                <div className="mobile:hidden">
                  <SiAdobephotoshop size={30} />
                </div>
                <div className="pc:hidden">
                  <SiAdobephotoshop size={25} />
                </div>
                <p className="text-[18px] mobile:hidden font-bold pc:ml-4 mobile:ml-1">
                  Photoshop
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default index;
