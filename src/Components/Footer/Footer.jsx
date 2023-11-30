import React from "react";
import { TopFooter } from "./TopFooter/TopFooter";
import { BotFooter } from "./BottomFooter/BotFotter";
export const Footer = () => {
  return (
    <div className="flex flex-col w-full gap-2 pt-9">
      <div className=" border-b-2 border-gray-400 w-4/5 m-auto flex justify-between pb-4">
        <TopFooter />
      </div>
      <div className=" w-[80%]  m-auto">
        <div>
          {" "}
          <BotFooter />
        </div>
      </div>
    </div>
  );
};
