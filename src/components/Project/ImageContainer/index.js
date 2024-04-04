import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BounswapWidget from "../Widget/Bounswap";

const ImageContainer = ({ Imgs }) => {
  const [imgIndex, setImgIndex] = useState(1);
  const [ImgPosition, setImgPosition] = useState(-100);
  const [imglength, setImglength] = useState(0);
  const [applyTransition, setApplyTransition] = useState(true);

  const containerRef = useRef(null);

  const _Prev = () => {
    if (imgIndex === 0) return;
    setApplyTransition(true);
    setImgIndex(imgIndex - 1);
    setImgPosition(ImgPosition - -100);
  };

  const _Next = () => {
    if (imgIndex === imglength - 1) return;
    setApplyTransition(true);
    setImgIndex(imgIndex + 1);
    setImgPosition(ImgPosition - 100);
  };

  const widgetClick = (e) => {
    const imags = Array.from(e.target.parentNode.children);
    const _index = imags.indexOf(e.target) + 1;
    setApplyTransition(true);
    setImgIndex(_index);
    setImgPosition(_index * -100);
  };

  useEffect(() => {
    if (containerRef.current) {
      setImglength(containerRef.current.childNodes.length);

      if (imgIndex == imglength - 1) {
        setTimeout(() => {
          setImgIndex(1);
          setImgPosition(-100);
          setApplyTransition(false);
        }, 1000);
      } else if (imgIndex == 0) {
        setTimeout(() => {
          setImgIndex(imglength - 2);
          setImgPosition(-100 * (imglength - 2));
          setApplyTransition(false);
        }, 1000);
      }

      if (applyTransition) {
        containerRef.current.style.transition = "transform 1s ease-in-out";
      } else {
        containerRef.current.style.transition = "none";
      }
      containerRef.current.style.transform = `translateX(${ImgPosition}%)`;
    }
  }, [imgIndex, ImgPosition, imglength, applyTransition]);

  return (
    <div className="flex flex-col items-center r">
      <div className="w-full flex flex-row items-center">
        <div className="z-10">
          <IoIosArrowBack
            size={35}
            style={{ color: "60a5fa", cursor: "pointer" }}
            onClick={_Prev}
          />
        </div>
        <div className="w-full overflow-hidden">
          <div ref={containerRef} className="image-container flex ">
            <Imgs />
          </div>
        </div>
        <div className="z-10 ">
          <IoIosArrowForward
            size={35}
            style={{ color: "60a5fa", cursor: "pointer" }}
            onClick={_Next}
          />
        </div>
      </div>
      <BounswapWidget click={widgetClick} />
    </div>
  );
};

export default ImageContainer;
