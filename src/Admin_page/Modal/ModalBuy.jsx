// Import necessary components and libraries
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function ModalBuy({ isOpen, onClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [orderDate, setOrderDate] = useState(new Date()); // Initialize with the current date

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleOrderDateChange = (date) => {
    setOrderDate(date);
  };
  const [postalCode, setPostalCode] = useState("");

  const handlePostalCodeChange = (e) => {
    setPostalCode(e.target.value);
  };
  const navigate = useNavigate();

  const handlePurchase = async () => {
    try {
      const userData = {
        userId: getUserId(),
        firstname: firstName,
        lastname: lastName,
        username: firstName,
        password: "hesi1234",
        phoneNumber: phoneNumber,
        address: address,
        role: "USER",
      };

      const accessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzE5NTQyZWQzYzRmNTcxNjU1YWVlNCIsImlhdCI6MTcwNDk2NDI3MSwiZXhwIjoxNzA1MDI0MjcxfQ.UBNp6BsqDQyaebzDGE5T9p72pJoM-MNToUWfhCEqKe8"; // Replace with your actual access token

      const userResponse = await axios.post(
        "http://localhost:8000/api/users",
        userData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Server Response (User Creation):", userResponse.data);
      onClose();

      navigate("/checkout");
    } catch (error) {
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
      } else if (error.request) {
        console.error("No response received from the server");
      } else {
        console.error("Error setting up the request:", error.message);
      }
    }
  };
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="modal-container w-[30rem] text-center p-8 rounded-md bg-white shadow-lg">
            <div className="flex justify-end">
              <div
                className="modal-close cursor-pointer p-2"
                onClick={onClose}>
                <svg
                  className="fill-current text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18">
                  <path d="M5.664 4.929l1.414-1.414L9 7.586l1.922-1.92 1.414 1.414L10.414 9l1.92 1.922-1.414 1.414L9 10.414l-1.922 1.92-1.414-1.414L7.586 9l-1.922-1.922zM9 0C4.037 0 0 4.037 0 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9zm0 16.574c-4.243 0-7.574-3.33-7.574-7.574S4.757 1.426 9 1.426 16.574 4.757 16.574 9 13.243 16.574 9 16.574z" />
                </svg>
              </div>
            </div>
            <div className="modal-content flex flex-col items-center">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                نام:
              </label>
              <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                className="w-full border p-3 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-300"
              />

              <label className="block text-gray-700 text-sm font-bold mb-2">
                نام خانوادگی:
              </label>
              <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                className="w-full border p-3 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-300"
              />

              <label className="block text-gray-700 text-sm font-bold mb-2">
                آدرس:
              </label>
              <input
                value={address}
                onChange={handleAddressChange}
                className="w-full border p-3 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-300"
              />
              <div className="w-full flex gap-2">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    تلفن همراه:
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    className="w-full border p-3 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    کد پستی:
                  </label>
                  <input
                    type="text"
                    value={postalCode}
                    onChange={handlePostalCodeChange}
                    className="w-full border p-3 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
              </div>

              <label className="block text-gray-700 text-sm font-bold mb-2">
                تاریخ دریافت سفارش:
              </label>
              <DatePicker
                selected={orderDate}
                onChange={handleOrderDateChange}
                className="w-full border p-3 rounded-md mb-4 focus:outline-none focus:ring focus:border-blue-300"
                dateFormat="yyyy/MM/dd"
                calendarClassName="persian-datepicker"
              />

              <Link to="/checkout">
                <button
                  onClick={handlePurchase}
                  className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-700 transition">
                  تایید خرید
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* The rest of your content goes here */}
    </div>
  );
}

export default ModalBuy;
