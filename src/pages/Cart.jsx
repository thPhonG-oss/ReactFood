import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Cart = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    cartCount,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Giỏ hàng trống 🛒
        </h2>
        <Link
          to="/menu"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Xem Menu
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        Giỏ hàng ({cartCount} món)
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4">Món ăn</th>
              <th className="p-4">Giá</th>
              <th className="p-4 text-center">Số lượng</th>
              <th className="p-4 text-right">Tổng</th>
              <th className="p-4 text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="p-4 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <span className="font-medium">{item.name}</span>
                </td>
                <td className="p-4 text-gray-700">
                  {item.price.toLocaleString()}₫
                </td>
                <td className="p-4 text-center">
                  <div className="inline-flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      <AiOutlineMinus />
                    </button>
                    <span className="font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, +1)}
                      className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </td>
                <td className="p-4 text-right text-blue-600 font-semibold">
                  {(item.price * item.quantity).toLocaleString()}₫
                </td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiTrash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tổng tiền + hành động */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t pt-6 gap-4">
        <p className="text-xl font-semibold text-gray-700">
          Tổng cộng:{" "}
          <span className="text-blue-600">{cartTotal.toLocaleString()}₫</span>
        </p>
        <div className="flex gap-4">
          <button
            onClick={clearCart}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
          >
            Xóa toàn bộ
          </button>
          <Link
            to="/checkout"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Thanh toán
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
