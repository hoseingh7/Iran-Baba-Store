import React from "react";
import Iranbaba from "../../assets/iraanbaba.svg";
import { NavLink, createBrowserRouter } from "react-router-dom";
import { Logo } from "../Logo/Logo";

const AdminNav = () => {
  return (
    <div className="adminheader flex w-full h-[60px] bg-[#f1ecec] items-center justify-between px-3">
      <h1 className="text-[20px] w-1/5">پنل مدیریت </h1>

      <section className="w-3/5 pl-40 h-[70px] leading-10 text-center flex items-center justify-center">
        <div className="text-center ">
          <ul className=" flex items-center justify-center gap-x-11">
            <li>
              <NavLink to="/dashboard/all-products">کالاها</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/products"> موجودی و قیمت ها </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/order">سفارش ها</NavLink>
            </li>
          </ul>
        </div>
      </section>
      {/* <img
        className="w-44 h-40"
        src={Iranbaba}
        alt=""
      /> */}
      <Logo />
    </div>
  );
};

export default AdminNav;
