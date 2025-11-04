import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart"; // ✅ lấy từ custom hook
import { FiShoppingCart } from "react-icons/fi";

const FoodCard = ({ food }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition flex flex-col overflow-hidden">
      {/* Ảnh món ăn */}
      <Link to={`/menu/${food.id}`}>
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-48 object-cover"
        />
      </Link>

      {/* Nội dung */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {food.name}
        </h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2 min-h-[2.5rem]">
          {food.description}
        </p>
        <p className="text-blue-600 font-bold mb-3">
          {food.price.toLocaleString()}₫
        </p>

        {/* Nút thêm */}
        <button
          onClick={() => addToCart(food)}
          className="mt-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          <FiShoppingCart /> Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
