import React from "react";
import { Card } from "flowbite-react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import axios from "axios";

function Products() {
  const { data, isLoading, error } = useQuery("products", async () => {
    const response = await axios.get("http://localhost:8000/api/products");
    return response.data.data.products;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((product) => (
        <Card
          key={product.id}
          className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg mx-auto transform transition-transform hover:scale-105">
          <Link to={`/infoproduct/${product._id}`}>
            <img
              className="w-full h-48 object-cover transition-transform hover:scale-110"
              src={`http://localhost:8000/images/products/images/${product.images[0]}`}
              alt={product.name}
            />
          </Link>
          <div className="p-4">
            <Link to={`/infoproduct/${product._id}`}>
              <h2 className="text-xl font-bold text-gray-800 hover:text-gray-600 transition duration-300">
                {product.name}
              </h2>
            </Link>
            <p className="text-gray-700 my-2">${product.price}</p>
            {/* دیگر المان‌های کارت مانند امتیاز، نظرات، دکمه مشاهده جزئیات و ... */}
          </div>
        </Card>
      ))}
    </div>
  );
}

export default Products;
