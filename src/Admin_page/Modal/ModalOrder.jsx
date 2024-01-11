import React from "react";
import Modal from "react-modal";
import jalaliMoment from "jalali-moment"; // اضافه کردن jalali-moment

const ModalOrder = ({ orderData, onClose }) => {
  const convertedDeliveryDate = jalaliMoment(
    orderData.deliveryDate,
    "YYYY-M-D"
  ).format("jYYYY/jM/jD");

  return (
    <Modal
      className=" w-[500px] h-[310px] mx-auto bg-white mt-32 flex flex-col gap-y-8 shadow-2xl rounded-2xl"
      isOpen={true}
      onRequestClose={onClose}
      contentLabel="Order Details">
      <div className=" w-full bg-purple-500 flex justify-center pr-3  items-center h-[60px] rounded-md">
        <h2 className="text-white">سفارش </h2>
      </div>
      <div className="w-full flex items-center h-10 gap-9 pr-3 ">
        <p>نام: {orderData.user.firstname}</p>
        <p>خانوادگی: {orderData.user.lastname}</p>
      </div>
      <p className="pr-3 ">مشخصات محصول: {orderData.description}</p>
      <p className="pr-3 ">تاریخ ثبت سفارش : {convertedDeliveryDate}</p>
      <div className="mx-auto w-1/4 mb-2">
        <button
          className="pb-2 bg-green-400 w-full "
          onClick={onClose}>
          ثبت سفارش
        </button>
      </div>
    </Modal>
  );
};

export default ModalOrder;
