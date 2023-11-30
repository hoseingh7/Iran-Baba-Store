import React from "react";
import { BsBagDashFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { useParams, useNavigate } from "react-router-dom";

export const LeftHeader = () => {
  const navigate = useNavigate();
  const handleCicke = () => {
    console.log("clicked");
    navigate("/login-user");
  };
  return (
    <div className="flex w-4/5 items-center justify-center gap-3 ">
      <BsBagDashFill />
      <button
        onClick={handleCicke}
        className="flex w-[183px] h-[40px] p-2 items-center gap-2">
        <FaRegUser />
        ورود به حساب کاربری
      </button>
    </div>
  );
};
