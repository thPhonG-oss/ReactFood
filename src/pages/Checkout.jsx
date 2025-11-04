import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import toast from "react-hot-toast";

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  // Form state
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      toast.error("Giỏ hàng đang trống!");
      navigate("/menu");
      return;
    }

    if (!form.name || !form.phone || !form.address) {
      toast.error("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    toast.success("Đặt hàng thành công 🎉");
    clearCart();
  };

  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        Xác nhận đơn hàng 🧾
      </h2>

      {cart.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Giỏ hàng của bạn đang trống.</p>
          <Link
            to="/menu"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Quay lại Menu
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow"
          >
            <div className="mb-4">
              <label className="block mb-1 font-medium">Họ và tên</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 outline-none"
                placeholder="Nguyễn Văn A"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Số điện thoại</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 outline-none"
                placeholder="0123 456 789"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Địa chỉ giao hàng
              </label>
              <textarea
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 outline-none"
                placeholder="123 Đường ABC, Quận 1, TP.HCM"
                rows={3}
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">
                Ghi chú (tuỳ chọn)
              </label>
              <textarea
                name="note"
                value={form.note}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 outline-none"
                rows={2}
                placeholder="Ví dụ: Giao giờ trưa, không cay..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-semibold"
            >
              Đặt hàng ngay
            </button>
          </form>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Tóm tắt đơn hàng</h3>
            <ul className="divide-y">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="py-3 flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.quantity} x {item.price.toLocaleString()}₫
                    </p>
                  </div>
                  <p className="text-blue-600 font-semibold">
                    {(item.price * item.quantity).toLocaleString()}₫
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-4 border-t">
              <p className="text-lg font-semibold flex justify-between">
                <span>Tổng cộng:</span>
                <span className="text-blue-600">
                  {cartTotal.toLocaleString()}₫
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Checkout;
