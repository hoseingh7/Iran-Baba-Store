import React from "react";
import Iranbaba from "../../../assets/iraanbaba.svg";

export const RightHeader = () => {
  return (
    <div className="w-2/3 h-auto flex flex-row p-3 m-auto items-center justify-center gap-5">
      <img
        className="w-[196px] h-[39px]"
        src={Iranbaba}
        alt=""
      />
      <input
        className="w-[762px] h-[40px] bg-white "
        type="text"
        placeholder="search "
      />
      <button className="btn btn-primary">Search</button>
    </div>
  );
};
