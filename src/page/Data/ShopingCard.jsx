import React, { useState, useEffect } from "react";
import axios from "axios";

const ShopingCart = () => {
  // State for products and cart
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products from API
  useEffect(() => {
    const user = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        setCart(" Data not found", error);
      }
    };
    user();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>

      {/* Product List */}
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg "
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-lg font-medium">{product.title}</h3>
            <p className="text-gray-500">${product.price}</p>
            <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopingCart;
