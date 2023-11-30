import React from "react";
import Asqar from "../../../assets/enamad.png";
import Changiz from "../../../assets/data-science-badge.png";
export const TopFooter = () => {
  return (
    <div className="flex w-full m-auto items-center justify-between  ">
      <div className="flex flex-col justify-end items-center gap-4 px-1">
        <h1 className="text-2xl text-right w-full">
          فروشگاه اینترنتی ایران بابا، خرید آنلاین گجت و محصولات دیجیتال
        </h1>
        <p className=" text-xs">
          فروشگاه اینترنتی ایران بابا عرضه کننده انواع محصولات دیجیتال، لوازم
          جانبی و گجت های هوشمند می‌باشد که فعالیت خود را از <br /> تابستان 99
          آغاز نموده است. ایران بابا همواره در تلاش است تا محصولات دیجیتال و
          لوازم جانبی اورجینال را با بهترین قیمت عرضه نماید و<br /> تنوع محصولات
          را روز به روز افزایش دهد. همچنین ایران بابا امکان خرید محصولات سفارشی
          از سایت Amazon و eBay را نیز فراهم نموده <br />
          است. پرداخت ایمن، ارسال اکسپرس، اصالت کالا و پشتیبانی 24 ساعته فروشگاه
          اینترنتی ایران بابا، خرید اینترنتی را به تجربه‌ای لذت بخش <br />
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
  );
};
