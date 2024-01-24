import React from "react";
import { useState } from "react";
function Count() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center gap-2 pt-5">
      {" "}
      <button
        className="bg-gray-300"
        onClick={() => setCount((count) => count + 1)}>
        +
      </button>
      <p className="border border-gray-300 w-[60px] text-center flex justify-center items-center h-[45px]">
        {" "}
        {count}
      </p>
      <button
        className="bg-gray-300"
        onClick={() => setCount((count) => count - 1)}>
        -
      </button>
    </div>
  );
}

export default Count;
