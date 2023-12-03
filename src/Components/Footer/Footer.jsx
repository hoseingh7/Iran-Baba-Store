import React from "react";

import Changiz from "../../assets/FooterLogo/data-science-badge.png";
import Asqar from "../../assets/FooterLogo/enamad.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";
function Footer() {
  return (
    <div className="flex flex-col w-full gap-2 pt-9">
      <div className=" border-b border-gray-400 w-4/5 m-auto flex justify-between pb-4">
        {" "}
        <div className="flex w-full m-auto items-center justify-between  ">
          <div className="flex flex-col justify-end items-center gap-4 px-1">
            <h1 className="text-2xl text-right w-full">
              فروشگاه اینترنتی ایران بابا، خرید آنلاین گجت و محصولات دیجیتال
            </h1>
            <p className=" text-xs">
              فروشگاه اینترنتی ایران بابا عرضه کننده انواع محصولات دیجیتال،
              لوازم جانبی و گجت های هوشمند می‌باشد که فعالیت خود را از <br />{" "}
              تابستان 99 آغاز نموده است. ایران بابا همواره در تلاش است تا
              محصولات دیجیتال و لوازم جانبی اورجینال را با بهترین قیمت عرضه
              نماید و<br /> تنوع محصولات را روز به روز افزایش دهد. همچنین ایران
              بابا امکان خرید محصولات سفارشی از سایت Amazon و eBay را نیز فراهم
              نموده <br />
              است. پرداخت ایمن، ارسال اکسپرس، اصالت کالا و پشتیبانی 24 ساعته
              فروشگاه اینترنتی ایران بابا، خرید اینترنتی را به تجربه‌ای لذت بخش{" "}
              <br />
              را تبدیل کرده است.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="w-[105px] h-[105px]"
              src={Asqar}
              alt=""
            />
            <img
              className="w-[105px] h-[105px]"
              src={Changiz}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Tops  */}
      <div className=" w-[80%]  m-auto">
        <div>
          <div className="flex flex-row w-full m-auto justify-center  items-center">
            <div className="w-1/4 m-auto text-start">
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
            </div>
            <div className="w-1/4 m-auto text-start">
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
            </div>

            <div className="w-2/4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
