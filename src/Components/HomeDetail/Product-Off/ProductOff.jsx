import React from "react";
import OneOff from "../../../assets/Product-Off/camping-category-banner.jpg";
import TwoOff from "../../../assets/Product-Off/mobile-accessory-category-banner.jpg";
import ThreeOff from "../../../assets/Product-Off/perfume-category-banner.jpg";
import FourOff from "../../../assets/Product-Off/speaker-category-banner.jpg";
export const ProductOff = () => {
  return (
    <div className="w-11/12 m-auto h-[320px] flex gap-2 ">
      <div className="w-1/4 h-full ">
        <img
          src={OneOff}
          alt=""
        />
      </div>
      <div className="w-1/4 h-full ">
        <img
          src={TwoOff}
          alt=""
        />
      </div>
      <div className="w-1/4 h-full ">
        <img
          src={ThreeOff}
          alt=""
        />
      </div>
      <div className="w-1/4 h-full ">
        <img
          src={FourOff}
          alt=""
        />
      </div>
    </div>
  );
};
