import { IoDiamond } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useData } from "../Layout/DataContext";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

function InfoProduct() {
  const { _id = "" } = useParams();
  const [count, setCount] = useState(1);
  const { data, setData, navigate } = useData();

  const {
    data: productData,
    isLoading,
    isError,
  } = useQuery(
    ["product", _id],
    () =>
      axios
        .get(`http://localhost:8000/api/products/${_id}`)
        .then((res) => res.data.data.product),
    { enabled: !!_id }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const addToCart = (event) => {
    event.preventDefault();

    if (productData.name && productData.quantity) {
      const newItem = {
        name: productData.name,
        count: count,
        images: productData.images,
        price: productData.price,
        id: productData._id,
      };

      setData((prevData) => {
        if (!Array.isArray(prevData)) {
          return [newItem];
        }

        return [newItem, ...prevData];
      });
      navigate("/cartitems");
    }
  };

  return (
    <div className="w-full bg-[#fafafa] flex flex-col border-t border-b gap-8 py-8 border-gray-300">
      <div className="w-4/5 border border-gray-300 rounded-sm h-[40px] mx-auto text-[13px] flex items-center pr-3">
        خانه / فروشگاه / {productData.name}
      </div>
      <div className="w-4/5 flex mx-auto bg-white gap-2">
        <div className="border border-gray-900 w-1/2 p-1 border-none">
          {productData.images.length > 0 && (
            <img
              src={`http://localhost:8000/images/products/images/${productData.images[0]}`}
              className="h-full w-full transition-transform transform hover:scale-110"
              alt=""
            />
          )}
        </div>
        <div className="flex flex-col w-1/2 items-start">
          <h1 className="text-2xl font-bold text-center my-6 text-[17px]">
            {productData && productData.name}
          </h1>
          <div className="flex gap-3">برند: {productData.brand}</div>
          <div className="flex flex-col pt-3">
            <h1 className="text-[17px] font-bold text-right">مشخصات کالا:</h1>
            <ul className="pr-1 pt-2">
              <li className="text-[13px] p-1">
                {" "}
                پشتیبانی از شارژ سریع {productData.chargingPower} واتی
              </li>
              <li className="text-[13px] p-1">مناسب برای انواع گوشی و تبلت</li>
              <li className="text-[13px] p-1 ">دارای 2 پورت Type-C و USB-A</li>
            </ul>
            <p className="font-bold text-red-700 pt-4 text-start ">
              {`${productData.price} تومان`}
            </p>
            <p className="text-green-600 text-[14px] pt-4">
              {" "}
              موجودی: {productData.quantity || "نامشخص"}
            </p>
          </div>
          <div className="flex items-center justify-center gap-7 ">
            <div className="flex items-center gap-2 pt-5">
              <button
                className="bg-gray-300"
                onClick={() =>
                  setCount((count) =>
                    count < productData.quantity ? count + 1 : count
                  )
                }>
                +
              </button>
              <p className="border border-gray-300 w-[60px] text-center flex justify-center items-center h-[45px]">
                {count}
              </p>
              <button
                className="bg-gray-300"
                onClick={() =>
                  setCount((count) => (count > 1 ? count - 1 : count))
                }>
                -
              </button>
            </div>
            <div className="pt-5">
              <button
                onClick={(event) => addToCart(event)}
                className="w-[200px] outline-none  h-[45px] bg-red-500 text-white flex justify-center items-center">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-4 px-2 rounded-sm bg-white w-4/5 mx-auto"></div>
    </div>
  );
}

export default InfoProduct;
