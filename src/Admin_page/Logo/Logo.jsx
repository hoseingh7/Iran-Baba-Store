import React from "react";
import Iranbaba from "../../assets/iraanbaba.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();
  const handlechange = () => {
    console.log("clicked");
    navigate("/");
  };
  return (
    <div className="">
      <img
        onClick={handlechange}
        className="w-44 h-40 cursor-pointer"
        src={Iranbaba}
        alt=""
      />
    </div>
  );
};
