// export default TopSlider;
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Styles.css";
import asqar from "../../../assets/slider/1008839-advertising-justice-logo-logos-nike-poster-product.jpg";
// import Mamad from "../../../assets/slider/Sunset Synthwave Sports Car City Palm Trees Wallpaper 4K HD PC #2161n_files";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Hos from "../../../assets/AdverstingItem/flashlight-cat-banner.png";
import changiz from "../../../assets/slider/changiz.jpg";
import sohrab from "../../../assets/slider/sohrab.jpg";
export default function TopSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="w-full h-[450px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-full h-[500px]">
        <SwiperSlide>
          <img
            src={asqar}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={Hos}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={changiz}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            src={sohrab}
            alt=""
          />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        <div
          className="autoplay-progress"
          slot="container-end">
          <svg
            viewBox="0 0 48 48"
            ref={progressCircle}>
            <circle
              cx="24"
              cy="24"
              r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
