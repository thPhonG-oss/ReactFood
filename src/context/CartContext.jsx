import React, { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getCartCount, getCartTotal } from "./cartHelpers";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Lưu giỏ hàng vào localStorage mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // --- Thêm món ăn ---
  const addToCart = (food) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === food.id);
      if (existing) {
        return prev.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...food, quantity: 1 }];
    });
    toast.success(`${food.name} đã được thêm vào giỏ hàng!`);
  };

  // --- Xóa món ---
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    toast.error("Đã xóa món khỏi giỏ hàng!");
  };

  // --- Tăng/giảm số lượng ---
  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // --- Xóa toàn bộ ---
  const clearCart = () => {
    setCart([]);
    toast("Đã xóa toàn bộ giỏ hàng!");
  };

  // --- Các giá trị tính toán ---
  const cartCount = getCartCount(cart);
  const cartTotal = getCartTotal(cart);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
