import Navbar from "./Navbar/Navbar";
import { RightHeader } from "./Top-Right-Header/Right-header";
import { LeftHeader } from "./Top-left-Header/LeftHeader";

function Header() {
  return (
    <div className=" flex flex-col gap-2 w-full  justify-between h-auto">
      <div className="flex w-full justify-between ">
        <div className="flex flex-row w-2/3 p-3  ">
          <RightHeader />
        </div>
        <div className="flex flex-row w-1/3 p-3  ">
          {" "}
          <LeftHeader />
        </div>
      </div>
      <div className="flex flex-row  items-center w-9/12 border-t-2 m-auto border-gray-300">
        <Navbar />
      </div>
    </div>
  );
}
export default Header;
