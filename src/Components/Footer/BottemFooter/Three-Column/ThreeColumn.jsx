import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";

export const ThreeCol = () => {
  return (
    <div>
      <div className=" flex flex-col items-start  border-b-2 border-gray-400 w-2/3 py-3 ">
        {" "}
        <h1 className="text-[15px] text-black font-medium text-start pt-1">
          تماس با ایران بابا
        </h1>{" "}
        <p className="text-[15px] text-[#737373] py-2 ">
          پشتیبانی همه روزه از ساعت 8 صبح الی 16 بعد از ظهر
          <br /> دفتر پشتیبانی سفارشات : 051-91009811
        </p>
      </div>
      <div className="text-[#737373] ">
        <p className="flex items-center justify-start pt-2">
          <MdOutlineMailOutline />
          ایمیل : iraanbaba@gmail.com
        </p>
        <p className="flex items-center justify-start pt-2">
          <FaLocationPin />
          دفتر مرکزی : تهران - جنت آباد
        </p>
        <p className="flex items-center justify-start py-2">
          {" "}
          <FaLocationPin />
          دفتر پشتیبانی سفارشات : مشهد - بولوار دانشجو
        </p>
      </div>
    </div>
  );
};
