import React from "react";
import MainTitle from "../../components/MainTitle";

import { IoLogoJavascript } from "react-icons/io5";
import {
  FaPencilAlt,
  FaReact,
  FaNodeJs,
  FaAws,
  FaHtml5,
  FaCss3,
  FaFigma,
} from "react-icons/fa";
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
          <p className="w-full text-[30px] font-extrabold text-start">
            Language
          </p>
          <div className="flex flex-col justify-around w-full">
            <div className="flex items-center w-full mt-5">
              <div className="flex w-[25%] items-center">
                <IoLogoJavascript size={40} />
                <p className="text-[20px] font-bold ml-4">Javascript</p>
              </div>
              <div className="flex flex-col w-full ">
                <ul className="text-[14px] w-full ">
                  <li className="flex w-full">
                    <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    <p className="ml-2 text-start">
                      자바스크립트 실행 코드 환경을 설정하는 실행 컨텍스트에
                      대해 학습하였습니다.
                    </p>
                  </li>
                  <li className="flex w-full">
                    <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    <p className="ml-2 text-start">
                      서버와의 통신을 위한 비동기 처리를 이해하고 async/await을
                      사용해 비동기 작업을 관리하였습니다.
                    </p>
                  </li>
                  <li className="flex w-full">
                    <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    <p className="ml-2 text-start">
                      이벤트 루프에 대해 이해하여 비동기 코드를 처리하였습니다.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center w-full mt-5">
              <div className="flex w-[25%] items-center">
                <SiTypescript size={40} />
                <p className="text-[20px] font-bold ml-4">Typescript</p>
              </div>
              <div className="flex flex-col w-full">
                <ul className="text-[14px] w-full">
                  <li className="flex w-full">
                    <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    <p className="ml-2 text-start">
                      Typescript의 환경 설정이 가능합니다.
                    </p>
                  </li>
                  <li className="flex w-full">
                    <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    <p className="ml-2 text-start">
                      코드의 안정성을 위해 interface로 객체의 구조를
                      정의하였습니다.
                    </p>
                  </li>
                  <li className="flex w-full">
                    <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    <p className="ml-2 text-start">
                      컴포넌트에 제네릭타입을 활용하여 재사용성을 높였습니다.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center w-full mt-5">
              <div className="flex w-[25%] items-center">
                <SiSolidity size={40} />
                <p className="text-[20px] font-bold ml-4">Solidity</p>
              </div>
              <div className="flex flex-col w-full">
                <ul className="text-[14px] w-full">
                  <li className="flex w-full">
                    <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    <p className="ml-2 text-start">
                      ERC20을 기반으로 한 스마트계약 코드를 구현하였으며 remix를
                      이용한 트랙잭션을 배포하였습니다.
                    </p>
                  </li>
                  <li className="flex w-full">
                    <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    <p className="ml-2 text-start">
                      Dex거래소의 구조를 숙지하였습니다.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="mt-3 pb-5 w-full border-b-2">
          <p className="w-full text-[30px] font-extrabold text-start">
            Frontend
          </p>
          <div className="flex flex-col justify-around w-full">
            <div className="flex items-center w-full mt-5">
              <div className="flex w-[25%] items-center">
                <FaReact size={40} />
                <p className="text-[20px] font-bold ml-4">React</p>
              </div>
              <div className="flex flex-col w-full">
                <ul className="text-[14px] w-full">
                  <li className="flex w-full">
                    <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    <p className="ml-2 text-start">
                      Lifecycle을 학습하여 React 동작 원리에 대해
                      이해하였습니다.
                    </p>
                  </li>
                  <li className="flex w-full">
                    <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    <p className="ml-2 text-start">
                      재사용성을 고려하여 컴포넌트 구성하려고 노력하고 있습니다.
                    </p>
                  </li>
                  <li className="flex w-full">
                    <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    <p className="ml-2 text-start">
                      redux를 이용한 간단한 전역 상태관리 경험이 있습니다.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li className="mt-3 pb-5 w-full border-b-2">
          <p className="w-full text-[30px] font-extrabold text-start">
            Backend
          </p>
          <div className="flex flex-col justify-around w-full">
            <div className="flex items-center w-full mt-5">
              <div className="flex w-[25%] items-center">
                <FaNodeJs size={40} />
                <p className="text-[20px] font-bold ml-4">Node.js</p>
              </div>
              <div className="flex flex-col w-full">
                <ul className="text-[14px] w-full">
                  <li className="flex w-full">
                    <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
                    <p className="ml-2 text-start">
                      Sequelize를 이용하여 데이터베이스를 관리하였습니다.
                    </p>
                  </li>
                  <li className="flex w-full">
                    <FaPencilAlt size={20} style={{ color: "60a5fa" }} />
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
          <p className="w-full text-[30px] font-extrabold text-start">Ect</p>
          <div className="flex flex-col justify-around w-full">
            <div className="flex justify-around items-center w-full mt-2">
              <div className="flex items-center">
                <SiMysql size={30} />
                <p className="text-[18px] font-bold ml-4">MySql</p>
              </div>
              <div className="flex  items-center">
                <SiTailwindcss size={30} />
                <p className="text-[18px] font-bold ml-4">Tailwindcss</p>
              </div>
              <div className="flex  items-center">
                <FaAws size={30} />
                <p className="text-[18px] font-bold ml-4">AWS</p>
              </div>
              <div className="flex  items-center">
                <SiStyledcomponents size={30} />
                <p className="text-[18px] font-bold ml-4">Styled-components</p>
              </div>
              <div className="flex  items-center">
                <FaFigma size={30} />
                <p className="text-[18px] font-bold ml-4">Figma</p>
              </div>
              <div className="flex items-center">
                <SiAdobephotoshop size={30} />
                <p className="text-[18px] font-bold ml-4">Photoshop</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default index;
