import React from "react";
import ProductCard from "./ProductCard";

const Card = ({product}) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6  ">
      {product.map((data) => {
        return <ProductCard key={data.id} data={data} />;
      })}
    </div>
  );
};

export default Card;
