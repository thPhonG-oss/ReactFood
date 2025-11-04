import React from "react";
import { useParams, Link } from "react-router-dom";
import { foods } from "../data/food";
import { useCart } from "../context/useCart"; // ✅ sử dụng context
import { FiShoppingCart } from "react-icons/fi";

const FoodDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const food = foods.find((item) => item.id === parseInt(id));

  if (!food) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-semibold text-gray-700">
          Không tìm thấy món ăn
        </h2>
        <Link to="/menu" className="text-blue-600 hover:underline">
          Quay lại Menu
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto mt-10 bg-white shadow rounded-lg p-6">
      <div className="w-full max-h-[500px] flex justify-center items-center bg-gray-50 rounded-lg mb-6 overflow-hidden">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-auto object-contain"
        />
      </div>

      <h1 className="text-3xl font-bold mb-3">{food.name}</h1>
      <p className="text-gray-600 mb-4">{food.description}</p>
      {food.ingredients && (
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Thành phần:</span> {food.ingredients}
        </p>
      )}
      <p className="text-2xl font-bold text-blue-600 mb-6">
        {food.price.toLocaleString()}₫
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => addToCart(food)}
          className="bg-blue-600 text-white flex items-center gap-2 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <FiShoppingCart /> Thêm vào giỏ hàng
        </button>
        <Link
          to="/menu"
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
        >
          Quay lại Menu
        </Link>
      </div>
    </section>
  );
};

export default FoodDetail;
