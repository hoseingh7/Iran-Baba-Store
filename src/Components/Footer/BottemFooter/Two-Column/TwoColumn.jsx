import React from "react";
export const TwoColumn = () => {
  return (
    <div className="flex flex-col items-start m-auto justify-center gap-2 py-4 ">
      <h1 className="text-[15px] text-black font-medium text-start">
        محصولات پرفروش
      </h1>
      <ul>
        <li className="  text-[13px] text-[#737373] cursor-pointer  py-2">
          پاوربانک
        </li>
        <li className=" list-none text-[13px] text-[#737373] cursor-pointer  py-2">
          چراغ قوه
        </li>
        <li className=" list-none text-[13px] text-[#737373] cursor-pointer  py-2">
          جاروبرقی رباتیک
        </li>
        <li className=" list-none text-[13px] text-[#737373] cursor-pointer  py-2">
          رینگ لایت
        </li>
      </ul>
    </div>
  );
};
