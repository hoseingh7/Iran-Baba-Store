import React from "react";
export const OneColumn = () => {
  return (
    <div className="flex flex-col items-start m-auto justify-center gap-2 py-4 ">
      <h1 className="text-[15px] text-black font-medium text-start">
        دسترسی سریع
      </h1>
      <ul>
        <li className="  text-[13px] text-[#737373] cursor-pointer  py-2">
          صفحه اصلی
        </li>
        <li className=" list-none text-[13px] text-[#737373] cursor-pointer  py-2">
          فروشگاه
        </li>
        <li className=" list-none text-[13px] text-[#737373] cursor-pointer  py-2">
          حساب کاربری
        </li>
        <li className=" list-none text-[13px] text-[#737373] cursor-pointer  py-2">
          قوانین و مقررات
        </li>
      </ul>
    </div>
  );
};
