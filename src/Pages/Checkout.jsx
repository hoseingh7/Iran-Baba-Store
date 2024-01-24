import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Psp from "../assets/psp.png";

const Checkout = () => {
  const [data, setData] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const addToCart = JSON.parse(localStorage.getItem("data")) || [];
    setData(addToCart);
  }, []);

  useEffect(() => {
    const sum = data.reduce((acc, item) => acc + item.price * item.count, 0);
    setTotalSum(sum);
  }, [data]);

  const getUserId = () => {
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
    return userData.userId;
  };

  const handleCheckout = async () => {
    try {
      const userId = getUserId();

      const orderItems = data.map((item) => ({
        name: item.name,
        count: item.count,
        price: item.price,
      }));

      const userData = {
        firstname: "نام کاربر",
        lastname: "نام خانوادگی کاربر",
        address: "آدرس کاربر",
      };

      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("firstname", userData.firstname);
      formData.append("lastname", userData.lastname);
      formData.append("address", userData.address);

      orderItems.forEach((item, index) => {
        formData.append(`orderItems[${index}].name`, item.name);
        formData.append(`orderItems[${index}].count`, item.count);
        formData.append(`orderItems[${index}].price`, item.price);
      });

      formData.append("totalSum", totalSum);

      const response = await axios.post(
        "http://localhost:8000/api/orders",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Server Response:", response.data);
      localStorage.removeItem("data");
    } catch (error) {
      console.error("Error sending data to the server:", error);
    }
  };

  const handleBack = () => {
    // You can replace "/your-back-page" with the desired path
    navigate("/your-back-page");
  };

  return (
    <div className="container mx-auto">
      {data.length <= 0 ? (
        <h1 className="text-center text-4xl mt-32">Your Cart Is Empty</h1>
      ) : (
        <div className="max-w-[800px] mx-auto mt-4 flex flex-col ">
          <div>
            <h2 className="text-right text-3xl font-bold">مبلغ قابل پرداخت</h2>
            <p className="pt-4 text-[20px]">{totalSum} ریال</p>
          </div>
          <div className="w-full">
            <img
              className="w-2/3 h-[500px]"
              src={Psp}
              alt=""
            />
          </div>
          <div className="flex justify-start items-center w-3/4">
            <button
              className="text-right bg-red-600 text-white py-4 px-12 mt-4 mr-5 block mx-auto hover:bg-red-800"
              onClick={handleCheckout}>
              Checkout
            </button>
            <button
              className="text-right bg-gray-500 text-white py-4 px-12 mt-4 block mx-auto hover:bg-gray-700"
              onClick={handleBack}>
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
