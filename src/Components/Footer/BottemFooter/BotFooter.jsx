import React from "react";
import { OneColumn } from "./One-column/OneColumn";
import { TwoColumn } from "./Two-Column/TwoColumn";
import { ThreeCol } from "./Three-Column/ThreeColumn";

export const BotFooter = () => {
  return (
    <div className="flex flex-row w-full m-auto justify-center  items-center">
      <div className="w-1/4 m-auto text-start">
        <OneColumn />
      </div>
      <div className="w-1/4 m-auto text-start">
        <TwoColumn />
      </div>

      <div className="w-2/4">
        {" "}
        <ThreeCol />
      </div>
    </div>
  );
};
