import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gray-900 text-white">
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1600"
        alt="ReactFood Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="relative text-center z-10 px-6">
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Chào mừng đến với <span className="text-yellow-400">ReactFood</span>{" "}
        </h1>
        <p className="text-lg mb-8 text-gray-200">
          Khám phá hàng chục món ăn ngon, nhanh và tiện lợi chỉ với một cú nhấp
          chuột!
        </p>
        <Link
          to="/menu"
          className="inline-block bg-linear-to-r from-blue-400 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:opacity-90 transition"
        >
          Xem Menu
        </Link>
      </div>
    </section>
  );
};

export default Home;
