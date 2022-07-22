import React from "react";
import CategoryButton from "./CategoryButton";

const Category = () => {
  return (
    <div className="lg:flex my-4 grid grid-cols-3 gap-2">
      <CategoryButton category="Semua" />
      <CategoryButton category="Hobi" />
      <CategoryButton category="Kendaraan" />
      <CategoryButton category="Baju" />
      <CategoryButton category="Elektronik" />
      <CategoryButton category="Kesehatan" />
    </div>
  );
};

export default Category;
