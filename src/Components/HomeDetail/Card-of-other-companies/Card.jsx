import React from "react";
import Amazoncard from "./AmazonCard/Amazoncard";

import AliBabacard from "./AlibababaCard/AliBabacard";
import Ebay from "./EbayCard.jsx/Ebay";
import AliExpresCard from "./AliExpresCard/AliExpresCard";

function Card() {
  return (
    <div className="w-11/12 bg-gray-100  rounded-md m-auto h-[150px] flex flex-row items-center justify-around">
      <AliBabacard />
      <Amazoncard /> <Ebay /> <AliExpresCard />
    </div>
  );
}

export default Card;
