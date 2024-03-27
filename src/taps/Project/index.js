import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProjectTitle from "../../components/ProjectTitle";
import Bounswap from "./Bounswap";
import NoBroker from "./NoBroker";
import NodeProject from "./NodeProject";

const Index = () => {
  const [index, setIndex] = useState(1);
  const [position, setPosition] = useState(0);

  const { length } = document.querySelectorAll(".swiper-item");

  const Prev = () => {
    if (index === 1) {
      setPosition(-100 * (length - 1));
      setIndex(length);
    } else {
      setPosition(position - -100);
      setIndex(index - 1);
    }
  };

  const Next = () => {
    if (index === length) {
      setPosition(0);
      setIndex(1);
    } else {
      setPosition(position - 100);
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    const container = document.querySelector(".swiper-container");

    container.style.left = position + "%";
    container.style.transition = "1s";
  }, [index, position]);

  return (
    <>
      <div className="w-full h-full relative">
        <ul className="swiper-container absolute w-full h-full flex">
          <li className="swiper-item w-full h-full flex-shrink-0">
            <ProjectTitle
              title="Project 01. Bounswap"
              name="Bounswap"
              git="https://github.com/wijiwon/Bounswap_Front"
              site="https://www.bounswap.site/"
            />
            <Bounswap />
          </li>
          <li className="swiper-item w-full h-full flex-shrink-0">
            <ProjectTitle
              title="Project 02. NoBroker"
              name="NoBroker"
              git="https://github.com/wijiwon/NoBroker"
              site="http://3.37.244.154"
            />
            <NoBroker />
          </li>
          <li className="swiper-item w-full h-full flex-shrink-0">
            <ProjectTitle
              title="Project 03. 그림 일심 동체"
              git="https://github.com/wijiwon/Monami"
            />
            <NodeProject />
          </li>
        </ul>
        <div className="absolute w-full h-full">
          <div className="absolute top-1/2 translate-y-1/2 left-10 mobile:left-5">
            <IoIosArrowBack
              size={60}
              style={{ color: "60a5fa", cursor: "pointer" }}
              onClick={Prev}
            />
          </div>
          <div className="absolute top-1/2 translate-y-1/2 right-10 mobile:right-5">
            <IoIosArrowForward
              size={60}
              style={{ color: "60a5fa", cursor: "pointer" }}
              onClick={Next}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
