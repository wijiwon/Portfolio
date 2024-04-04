import React from "react";
import Bounswap from "./Bounswap";
import Nobroker from "./Nobroker";
import NodeProject from "./NodeProject";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const index = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 50,
          stretch: -50,
          depth: 30,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper"
      >
        <SwiperSlide
          style={{
            width: "85%",
            height: "80%",
            borderRadius: "24px",
          }}
        >
          <Bounswap />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "85%",
            height: "80%",
            borderRadius: "24px",
          }}
        >
          <Nobroker />
        </SwiperSlide>
        <SwiperSlide
          style={{
            width: "85%",
            height: "80%",
            borderRadius: "24px",
          }}
        >
          <NodeProject />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default index;
