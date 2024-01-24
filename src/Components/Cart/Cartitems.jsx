import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModalBuy from "../../Admin_page/Modal/ModalBuy.jsx";

function Cartitems() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const addToCart = JSON.parse(localStorage.getItem("data")) || [];
    setData(addToCart);
  }, []);

  const handleRemoveItem = (productName) => {
    const updatedCart = data.filter((item) => item.name !== productName);
    localStorage.setItem("data", JSON.stringify(updatedCart));
    setData(updatedCart);
  };

  const handleFinalizePurchase = () => {
    // برای انتقال به صفحه دیگر، از اجزای React Router استفاده کنید
    // در اینجا به عنوان مثال، به صفحه "/checkout" منتقل می‌شویم
    window.location.href = "/checkout";
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-10 p-5 w-3/4">
      {data.length === 0 ? (
        <p>سبد خرید شما خالی می‌باشد</p>
      ) : (
        <div>
          <ModalBuy
            isOpen={isModalOpen}
            onClose={closeModal}
          />

          <table className="min-w-full border border-gray-300 ">
            <thead>
              <tr className="bg-gray-200 text-center">
                <th className="p-3">محصول</th>
                <th className="p-3">تعداد</th>
                <th className="p-3">قیمت (ریال)</th>
                <th className="p-3"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.productId}
                  className="border-b border-gray-300 text-center hover:bg-gray-300">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.count}</td>
                  <td className="p-3">{item.price * item.count}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleRemoveItem(item.name)}
                      className="bg-fuchsia-500 text-white py-2 px-4 rounded-md hover:bg-fuchsia-700 transition duration-300">
                      حذف سفارش
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="flex w-full justify-center items-center">
        <Link to="/payment">
          <button className="bg-green-500 w-[400px]  text-white mx-auto pt-2 mt-3 rounded-md mb-4 hover:bg-green-700 transition">
            ثبت نهایی
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cartitems;
