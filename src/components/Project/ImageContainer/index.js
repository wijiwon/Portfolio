import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
    <div className="relative w-full pc:h-[300px] mobile:h-[180px] overflow-hidden">
      <div ref={containerRef} className="image-container absolute flex ">
        <Imgs />
      </div>
      <div className="absolute top-1/2 left-3 z-10 mobile:border-2 mobile:rounded-full mobile:border-[#60a5fa]">
        <IoIosArrowBack
          size={30}
          style={{ color: "60a5fa", cursor: "pointer" }}
          onClick={_Prev}
        />
      </div>
      <div className="absolute top-1/2 right-3 z-10 mobile:border-2 mobile:rounded-full mobile:border-[#60a5fa]">
        <IoIosArrowForward
          size={30}
          style={{ color: "60a5fa", cursor: "pointer" }}
          onClick={_Next}
        />
      </div>
    </div>
  );
};

export default ImageContainer;
