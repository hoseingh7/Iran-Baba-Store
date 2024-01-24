// Products.js

import React from "react";
import { Card } from "flowbite-react";
import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Products() {
  const { category } = useParams();
  const queryKey = `products-${category}`;

  const { data, isLoading, error } = useQuery(queryKey, async () => {
    const response = await axios.get(
      `http://localhost:8000/api/products?category=${"65808187f0f47f79b4252dfc"}`
    );
    console.log(response);
    return response.data.data.products;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex w-11/12 flex-wrap gap-6 pt-5 mx-auto pb-8 ">
      {data.map((product) => (
        <Link
          to={`/infoproduct/${product._id}`}
          key={product._id}
          style={{ textDecoration: "none" }}>
          <Card className="w-[280px] flex flex-col ">
            <div className="w-full">
              {product.images.length > 0 && (
                <img
                  src={`http://localhost:8000/images/products/images/${product.images}`}
                  className="h-full w-[380px] "
                  alt=""
                />
              )}
            </div>
            <h5 className="text-2xl font-bold tracking-tight px-3 text-gray-900 dark:text-white">
              {product.name}
            </h5>
            <p className="font-normal text-gray-700 px-3 dark:text-gray-400">
              ${product.price}
            </p>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default Products;
