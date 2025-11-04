import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaUtensils } from "react-icons/fa";

const Header = () => {
  const navLinkClass =
    "text-gray-700 hover:text-blue-600 px-3 py-2 font-medium";
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center gap-2">
          <FaUtensils className="text-blue-600 text-2xl" />
          <span className="text-xl font-semibold text-gray-800">ReactFood</span>
        </Link>

        <nav className="flex items-center gap-4">
          <NavLink to="/" className={navLinkClass}>
            Trang chủ
          </NavLink>
          <NavLink to="/menu" className={navLinkClass}>
            Menu
          </NavLink>
          <NavLink
            to="/cart"
            className="flex items-center gap-1 text-gray-700 hover:text-blue-600"
          >
            <FaShoppingCart /> Giỏ hàng
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
