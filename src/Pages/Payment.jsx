import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import ModalBuy from "../../Admin_page/Modal/ModalBuy.jsx"
import ModalBuy from "../Admin_page/Modal/ModalBuy";

function Payment() {
  const [data, setData] = useState([]);
  const [modalData, setModalData] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const addToCart = JSON.parse(localStorage.getItem("data")) || [];
    setData(addToCart);

    const storedModalData = localStorage.getItem("modalData");
    if (storedModalData) {
      try {
        const parsedModalData = JSON.parse(storedModalData);
        setModalData(parsedModalData);
      } catch (error) {
        console.error("Error parsing modal data:", error);
        // Handle the error as needed, e.g., setModalData to a default value
      }
    }
  }, []);

  const saveModalData = (data) => {
    localStorage.setItem("modalData", JSON.stringify(data));
  };

  useEffect(() => {
    const sum = data.reduce((acc, item) => acc + item.price * item.count, 0);
    setTotalSum(sum);
  }, [data]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-8 p-6 bg-white shadow-md rounded-md w-3/4">
      {modalData && modalData.length > 0 && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">مشخصات کاربر:</h3>
          <table className="w-full border-collapse border border-gray-300 mb-4">
            <tbody>
              {modalData.map((data, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-300">
                  {Object.keys(data).map((key) => (
                    <React.Fragment key={key}>
                      <td className="p-3 font-semibold">{key}</td>
                      <td className="p-3">{data[key]}</td>
                    </React.Fragment>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {data.length > 0 ? (
        <div>
          <h3 className="text-3xl text-red-600 pb-3 font-semibold mb-2">
            {" "}
            لیست سفارشات
          </h3>
          <table className="w-full border-collapse border border-gray-300 mb-4">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-center">محصول</th>
                <th className="p-3 text-center">قیمت</th>
                <th className="p-3 text-center">تعداد</th>
                <th className="p-3 text-center"> قیمت کل(ریال) </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-300 text-center hover:bg-gray-200">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.price}</td>
                  <td className="p-3">{item.count}</td>
                  <td className="p-3">{item.price * item.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500">No items in the cart.</p>
      )}

      <div className="flex justify-between items-center">
        <div>
          <p className="text-lg font-semibold mb-2"> مبلغ قابل پرداخت</p>
          <p className="text-xl font-bold">{totalSum} ریال </p>
        </div>
        <div className="flex gap-4 w-[200px] justify-center items-center">
          <button
            className="bg-green-500 h-[40px] text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
            onClick={() => {
              saveModalData();
              openModal();
            }}>
            پرداخت
          </button>

          <Link
            to="/"
            className="">
            <button
              className="bg-red-500 h-[40px] text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
              onClick={() => {
                localStorage.removeItem("data");
                localStorage.removeItem("modalData");
              }}>
              بازگشت
            </button>
          </Link>
        </div>
      </div>

      {/* Render ModalBuy component based on the state */}
      {isModalOpen && (
        <ModalBuy
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default Payment;
