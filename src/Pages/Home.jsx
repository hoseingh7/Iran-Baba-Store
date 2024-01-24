import AdverItem from "../components/HomeDetail/Advertiding-Item/AdverItem";
import { ApparatBtn } from "../components/HomeDetail/Apparat-btn/ApparatBtn";
import Card from "../components/HomeDetail/Card-of-other-companies/Card";
import { ClassificationProduct } from "../components/HomeDetail/Classifiction-Product/ClassificationProduct";
import { FilledProduct } from "../components/HomeDetail/Filled-Product/FilledProduct";
import NewProduct from "../components/HomeDetail/NewProduct/NewProduct";
import PopProduct from "../components/HomeDetail/Popular-Product/PopProduct";
import { ProductOff } from "../components/HomeDetail/Product-Off/ProductOff";

import TopSlider from "../components/HomeDetail/TopSlider/TopSlider";
import Twoline from "../components/HomeDetail/TweLine/Twoline";

function Home() {
  return (
    <div className="bg-[#fafafa] flex flex-col items- py-2 gap-6 border-b-2  border-t-2 border-gray-300">
      <TopSlider />
      {/* <ClassificationProduct /> */}

      <FilledProduct />
      <Card />
      {/* <PopProduct /> */}
      {/* <NewProduct />
      <AdverItem /> */}

      <Twoline />

      <ApparatBtn />
      <ProductOff />
    </div>
  );
}
export default Home;
