import React from "react";
import axios from "axios";

import { useData } from "../Layout/DataContext";

import CartList from "../components/Cart/Cartlist";
const Cart = () => {
  const { data, setData, navigate } = useData();

  const totalPrice = () => {
    let total = 0;
    data.forEach((item) => (total += item.price * item.quantity));
    return total;
  };

  const createCheckoutSession = async () => {
    axios
      .post("http://localhost:8000/api/orders", { data })
      .then((res) => {
        console.log(res);
        window.location = res.data.sessionURL;
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="container mx-auto">
        {data.length <= 0 ? (
          <h1 className="text-center text-4xl mt-32">Your Cart Is Empty</h1>
        ) : (
          data.map((item) => (
            <CartList
              key={item.id}
              data={item}
            />
          ))
        )}

        {data.length > 0 && (
          <div className="max-w-[800px] mx-auto mt-4">
            <h2 className="text-right text-3xl font-bold">
              Total: ${totalPrice()}
            </h2>
            <button
              className="text-right bg-red-600 text-white py-4 px-12 mt-4 block mx-auto hover:bg-red-800"
              onClick={createCheckoutSession}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
