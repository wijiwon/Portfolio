import React from "react";
import ImageContainer from "../../../components/Project/ImageContainer/NoBroker";
import NoBrokerImgs from "../../../components/Project/ImageContainer/NoBroker/Images";
import ProjectTitle from "../../../components/ProjectTitle";
import { FaReact, FaCheck, FaNodeJs } from "react-icons/fa";
import { SiAmazonaws, SiReactquery, SiMysql, SiExpress } from "react-icons/si";

const index = (props) => {
  return (
    <div className="flex bg-white rounded-3xl border-8 mobile:border-5 border-[#60a5fa]">
      <div className="flex flex-col items-center justify-evenly">
        <ProjectTitle
          num="02"
          title="Nobroker"
          name="Nobroker"
          // ! 주소 이동 제대로 안됨 체크
          git="https://github.com/wijiwon/NoBroker"
          site="http://3.37.244.154"
        />
        <div className="flex mobile:flex-col ">
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-full mobile:mt-4">
              <ImageContainer Imgs={NoBrokerImgs} />
              <div className="pc:pl-9 w-full mobile:flex mobile:justify-center text-gray-600">
                <div className="text-start font-bold text-[17px] mobile:text-[12px] pc:mt-3">
                  진행 기간.
                  <span className="text-start font-light text-[13px] mobile:text-[10px] ml-2">
                    2023. 07. 28 ~ 2023. 08. 28 (약 4주)
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
                  매수인과 매도인이 중개사 없이 직접 매물을 거래할 수 있는
                  부동산 매매 사이트
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
                        NASA Worldwind API를 활용한 3D 지구 구현. 원하는 좌표에
                        핀을 찍어 매물이 위치한 나라를 표시
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
                        입력받은 정보를 FormData를 활용해 멀티파트 형식으로 전송
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
                        axios 라이브러리로 get, post를 사용해 서버와
                        비동기적으로 소통
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
                        bcrypt와 jwt를 활용한 accessToken 발급 로그인 기능 구현
                        <span className="text-[12px]">(Backend)</span>
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
                        jwt.verify를 활용한 미들웨어를 구현하여 로그인 보안성
                        구축 <span className="text-[12px]">(Backend)</span>
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
                        로고 제작 및 총괄 CSS 담당
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
                    <SiReactquery size={35} />
                    <p className="text-[12px] font-bold">Reactquery</p>
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
                    <SiMysql size={35} />
                    <p className="text-[12px] font-bold">MySQL</p>
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
