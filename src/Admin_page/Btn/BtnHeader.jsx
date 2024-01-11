"use client";

import { Button } from "flowbite-react";
import { FaRegUser } from "react-icons/fa6";
import { useParams, useNavigate } from "react-router-dom";

function BtnHeader() {
  const navigate = useNavigate();
  const handleCicke = () => {
    console.log("clicked");
    navigate("/login");
  };
  return (
    <div className="flex flex-wrap gap-2">
      {/* <Button gradientDuoTone="purpleToBlue">Purple to Blue</Button>
      <Button gradientDuoTone="cyanToBlue">Cyan to Blue</Button>
      <Button gradientDuoTone="greenToBlue">Green to Blue</Button> */}
      {/* <Button gradientDuoTone="purpleToPink">Purple to Pink</Button> */}
      <Button
        gradientDuoTone="pinkToOrange"
        onClick={handleCicke}>
        <FaRegUser /> ورود به حساب کاربری
      </Button>
      {/* <Button gradientDuoTone="tealToLime">Teal to Lime</Button>
      <Button gradientDuoTone="redToYellow">Red to Yellow</Button> */}
    </div>
  );
}
export default BtnHeader;
