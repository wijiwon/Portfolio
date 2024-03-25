import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import MainTitle from "../../components/MainTitle";
import Bounswap from "./Bounswap";
import NoBroker from "./NoBroker";
import NodeProject from "./NodeProject";

const Index = () => {
  const [index, setIndex] = useState(1);
  const [position, setPosition] = useState(0);

  // const container = document.querySelector(".swiper-container");
  // console.log("전체 스와이퍼 가로길이", container.offsetWidth);
  // length: 스와이퍼 개수
  const { length } = document.querySelectorAll(".swiper-item");

  // container.style.left = -100 + "%";

  const Prev = () => {
    console.log("이전????");
    if (index === 1) {
      setPosition(-100 * (length - 1));
      setIndex(length);
      console.log("변경?", length, index);
    } else {
      console.log("마지막");
      setPosition(position - -100);
      setIndex(index - 1);
    }
  };

  const Next = () => {
    console.log("다음?");
    if (index == length) {
      setPosition(0);
      setIndex(1);
    } else {
      setPosition(position - 100);
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    const container = document.querySelector(".swiper-container");

    console.log("지금 순서는??", index);
    console.log("지금 위치는??", position);
    container.style.left = position + "%";
    container.style.transition = "1s";
  }, [index, position]);

  return (
    <>
      <div className="w-full h-full relative">
        <ul className="swiper-container absolute w-full h-full flex">
          <li className="swiper-item w-full h-full flex-shrink-0">
            <MainTitle title="Project 01. Bounswap" />
            <Bounswap />
          </li>
          <li className="swiper-item w-full h-full flex-shrink-0">
            <MainTitle title="Project 02. NoBroker" />
            <NoBroker />
          </li>
          <li className="swiper-item w-full h-full flex-shrink-0">
            <MainTitle title="Project 03. 그림 일심 동체" />
            <NodeProject />
          </li>
        </ul>
        <div className="absolute w-full h-full">
          <div className="absolute top-1/2 translate-y-1/2 left-10">
            <IoIosArrowBack
              size={60}
              style={{ color: "black", opacity: "50%", cursor: "pointer" }}
              onClick={Prev}
            />
          </div>
          <div className="absolute top-1/2 translate-y-1/2 right-10">
            <IoIosArrowForward
              size={60}
              style={{ color: "black", opacity: "50%", cursor: "pointer" }}
              onClick={Next}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
