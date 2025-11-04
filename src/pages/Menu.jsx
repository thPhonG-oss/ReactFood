import React, { useState } from "react";
import { foods, categories } from "../data/food";
import FoodCard from "../components/FoodCard";
import SearchFilterBar from "../components/SearchFilterBar";
import toast from "react-hot-toast";

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");

  const handleAddToCart = (food) => {
    toast.success(`${food.name} đã được thêm vào giỏ hàng!`);
  };

  const filteredFoods = foods.filter((food) => {
    const matchName = food.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const category = food.category || food.categories;
    const matchCategory =
      selectedCategory === "Tất cả" || category === selectedCategory;
    return matchName && matchCategory;
  });

  return (
    <section className="py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Thực đơn hôm nay</h2>

      <SearchFilterBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {filteredFoods.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFoods.map((food) => (
            <FoodCard key={food.id} food={food} onAddToCart={handleAddToCart} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          Không tìm thấy món nào
        </p>
      )}
    </section>
  );
};

export default Menu;
