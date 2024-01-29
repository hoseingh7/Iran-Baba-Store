import React from "react";
import AliExpres from "../../../../assets/aliexpress-logo.svg";
function AliExpresCard() {
  return (
    <div className="w-[320px] h-[130px] flex items-center justify-center">
      <div className="w-11/12 h-full bg-white flex items-center justify-center hover:rounded-2xl cursor-pointer">
        <img
          className="w-[200px] h-[100px]"
          src={AliExpres}
          alt=""
        />
      </div>
    </div>
  );
}

export default AliExpresCard;
