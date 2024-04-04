import React from "react";
import MainTitle from "../../components/MainTitle";

import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs, FaAws, FaFigma, FaGithub } from "react-icons/fa";
import {
  SiTypescript,
  SiSolidity,
  SiMysql,
  SiTailwindcss,
  SiStyledcomponents,
  SiAdobephotoshop,
  SiNotion,
} from "react-icons/si";
import { GrTooltip } from "react-icons/gr";

const index = () => {
  //! 전체 컨테이너 중앙정렬해서 화면 넓어도 어색해보이지 않게 하자!
  return (
    <div className="w-full h-full">
      <MainTitle title="Skill" />
      <div
        style={{ height: "calc(100vh - 130px)" }}
        className="w-full flex mobile:flex-col items-center"
      >
        <div className="w-full flex justify-center ">
          <ul className="pc:w-[90%] pc:border-8 pc:rounded-3xl pc:border-[#60a5fa] pc:p-3">
            {/* //* React */}
            <li className="border-b-2 mx-[30px] flex mt-2">
              <div className="flex items-center">
                <div className="flex mobile:hidden">
                  <FaReact size={50} />
                </div>
              </div>
              <div className="text-start pc:ml-5 w-full">
                <p className="font-extrabold mobile:text-[13px]">React</p>
                <div className="flex w-full">
                  <ul className="ml-3 text-start list-disc text-[14px] mobile:text-[10px] mb-2">
                    <li>
                      Lifecycle을 학습하여 React 동작 원리에 대해
                      이해하였습니다.
                    </li>
                    <li>
                      재사용성을 고려하여 컴포넌트 구성을 하려고 노력합니다.
                    </li>
                    <li>기본적인 use훅과 커스텀 훅 사용이 가능합니다.</li>
                    <li>Webpack의 loaders, plugins등의 설정이 가능합니다.</li>
                    <li>
                      Redux를 이용한 간단한 전역 상태관리 경험이 있습니다.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* //* JS */}
            <li className="border-b-2 mx-[30px] flex mt-2">
              <div className="flex items-center">
                <div className="flex mobile:hidden">
                  <IoLogoJavascript size={50} />
                </div>
              </div>
              <div className="text-start pc:ml-5 w-full">
                <p className="font-extrabold mobile:text-[13px]">Javascript</p>
                <div className="flex w-full">
                  <div className="w-full">
                    <ul className="ml-3 text-start list-disc text-[14px] mobile:text-[10px] mb-2">
                      <li>
                        자바스크립트 실행 코드 환경을 설정하는 실행 컨텍스트에
                        대해 학습하였습니다.
                      </li>
                      <li>
                        서버와의 통신을 위한 비동기 처리를 이해하고
                        async/await을 사용해 비동기 작업을 관리하였습니다.
                      </li>
                      <li>
                        이벤트 루프에 대해 이해하여 비동기 코드를
                        처리하였습니다.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {/* //* TS */}
            <li className="border-b-2 mx-[30px] flex mt-2">
              <div className="flex items-center">
                <div className="flex mobile:hidden">
                  <SiTypescript size={50} />
                </div>
              </div>
              <div className="text-start pc:ml-5 w-full">
                <p className="font-extrabold mobile:text-[13px]">Typescript</p>
                <div className="flex w-full">
                  <div className="w-full">
                    <ul className="ml-3 text-start list-disc text-[14px] mobile:text-[10px] mb-2">
                      <li>Typescript의 환경 설정이 가능합니다.</li>
                      <li>
                        코드의 안정성을 위해 Interface로 객체의 구조를
                        정의하였습니다.
                      </li>
                      <li>
                        컴포넌트에 제네릭타입을 활용하여 재사용성을 높였습니다.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {/* //* Tailwind */}
            <li className="border-b-2 mx-[30px] flex mt-2">
              <div className="flex items-center">
                <div className="flex mobile:hidden">
                  <SiTailwindcss size={50} />
                </div>
              </div>
              <div className="text-start pc:ml-5 w-full">
                <p className="font-extrabold mobile:text-[13px]">Tailwindcss</p>
                <div className="flex w-full">
                  <div className="w-full">
                    <ul className="ml-3 text-start list-disc text-[14px] mobile:text-[10px] mb-2">
                      <li>Tailwind의 환경 설정이 가능합니다.</li>
                      <li>@media, hover, Dark모드 구현이 가능합니다.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {/* //* styled-component */}
            <li className="border-b-2 mx-[30px] flex mt-2">
              <div className="flex items-center">
                <div className="flex mobile:hidden">
                  <SiStyledcomponents size={50} />
                </div>
              </div>
              <div className="text-start pc:ml-5 w-full">
                <p className="font-extrabold mobile:text-[13px]">
                  Styled-components
                </p>
                <div className="flex w-full">
                  <div className="w-full">
                    <ul className="ml-3 text-start list-disc text-[14px] mobile:text-[10px] mb-2">
                      <li>props에 따라 동적으로 style 적용이 가능합니다.</li>
                      <li>
                        createGlobalStyle을 이용하여 전역 스타일 관리가
                        가능합니다.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-center">
          <ul className="pc:w-[90%] pc:border-8 pc:rounded-3xl pc:border-[#60a5fa] pc:p-3">
            {" "}
            {/* //* NodeJs */}
            <li className="border-b-2 mx-[30px] flex mt-2">
              <div className="flex items-center">
                <div className="flex mobile:hidden">
                  <FaNodeJs size={50} />
                </div>
              </div>
              <div className="text-start pc:ml-5 w-full">
                <p className="font-extrabold mobile:text-[13px]">Node.Js</p>
                <div className="flex w-full">
                  <div className="w-full">
                    <ul className="ml-3 text-start list-disc text-[14px] mobile:text-[10px] mb-2">
                      <li>
                        Sequelize를 이용하여 데이터베이스를 관리하였습니다.
                      </li>
                      <li>Express를 이용한 웹서버 통신이 가능합니다.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {/* //* MySQL */}
            <li className="border-b-2 mx-[30px] flex mt-2">
              <div className="flex items-center">
                <div className="flex mobile:hidden">
                  <SiMysql size={50} />
                </div>
              </div>
              <div className="text-start pc:ml-5 w-full">
                <p className="font-extrabold mobile:text-[13px]">MySQL</p>
                <div className="flex w-full">
                  <div className="w-full">
                    <ul className="ml-3 text-start list-disc text-[14px] mobile:text-[10px] mb-2">
                      <li>workbench를 이용한 DB관리가 가능합니다.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {/* //* AWS */}
            <li className="border-b-2 mx-[30px] flex mt-2">
              <div className="flex items-center">
                <div className="flex mobile:hidden">
                  <FaAws size={50} />
                </div>
              </div>
              <div className="text-start pc:ml-5 w-full">
                <p className="font-extrabold mobile:text-[13px]">AWS</p>
                <div className="flex w-full">
                  <div className="w-full">
                    <ul className="ml-3 text-start list-disc text-[14px] mobile:text-[10px] mb-2">
                      <li>EC2를 이용한 프론트, 백 배포 경험이 있습니다.</li>
                      <li>
                        S3, Cloudfront를 이용한 프론트 배포 경험이 있습니다.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {/* //* Figma */}
            <li className="border-b-2 mx-[30px] flex mt-2">
              <div className="flex items-center">
                <div className="flex mobile:hidden">
                  <FaFigma size={50} />
                </div>
              </div>
              <div className="text-start pc:ml-5 w-full">
                <p className="font-extrabold mobile:text-[13px]">Figma</p>
                <div className="flex w-full">
                  <div className="w-full">
                    <ul className="ml-3 text-start list-disc text-[14px] mobile:text-[10px] mb-2">
                      <li>
                        <a
                          className="underline hover:text-[#60a5fa]"
                          href="https://www.figma.com/file/wNfpGuAJAjqdQTW2RwQIKa/pool-%26-token_detail-%2F-stake?type=design&node-id=0%3A1&mode=design&t=ML6dEpORMCavsxjQ-1"
                        >
                          사이트의 UI/UX 디자인을 한 경험이 있습니다.(Bounswap)
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {/* //* Photoshop */}
            <li className="border-b-2 mx-[30px] flex mt-2">
              <div className="flex items-center">
                <div className="flex mobile:hidden">
                  <SiAdobephotoshop size={50} />
                </div>
              </div>
              <div className="text-start pc:ml-5 w-full">
                <p className="font-extrabold mobile:text-[13px]">Photoshop</p>
                <div className="flex w-full">
                  <div className="w-full">
                    <ul className="ml-3 text-start list-disc text-[14px] mobile:text-[10px] mb-2">
                      <li>
                        간단한 픽토그램 제작, 누끼 및 사진 보정이 가능합니다.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {/* //* Solidity */}
            <li className="border-b-2 mx-[30px] flex mt-2">
              <div className="flex items-center">
                <div className="flex mobile:hidden">
                  <SiSolidity size={50} />
                </div>
              </div>
              <div className="text-start pc:ml-5 w-full">
                <p className="font-extrabold mobile:text-[13px]">Solidity</p>
                <div className="flex w-full">
                  <div className="w-full">
                    <ul className="ml-3 text-start list-disc text-[14px] mobile:text-[10px] mb-2">
                      <li>
                        ERC20을 기반으로 한 스마트계약 코드를 구현하였으며
                        Remix를 이용한 트랙잭션을 배포하였습니다.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {/* //* Git */}
            <li className="border-b-2 mx-[30px] flex mt-2">
              <div className="flex items-center">
                <div className="flex mobile:hidden">
                  <FaGithub size={50} />
                </div>
              </div>
              <div className="text-start pc:ml-5 w-full">
                <p className="font-extrabold mobile:text-[13px]">Git</p>
                <div className="flex w-full">
                  <div className="w-full">
                    <ul className="ml-3 text-start list-disc text-[14px] mobile:text-[10px] mb-2">
                      <li>
                        협업을 위한 branch 관리 및 다수의 merge 경험이 있습니다.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            {/* //* Tools */}
            <li className="border-b-2 mx-[30px] flex mt-2">
              <div className="flex items-center">
                <div className="flex mobile:hidden">
                  <GrTooltip size={50} />
                </div>
              </div>
              <div className="text-start pc:ml-5 w-full">
                <p className="font-extrabold mobile:text-[13px]">Tools</p>
                <div className="flex justify-start w-full p-2">
                  <div className="flex flex-col items-center">
                    <SiNotion size={30} className="mobile:hidden" />
                    <SiNotion size={20} className="pc:hidden" />
                    <p className="text-[12px] font-bold mobile:hidden">
                      Notion
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
