import React from "react";

const ProductDescription = ({ product }) => {
  return (
    <div className="container mx-auto max-w-4xl mt-3 lg:mt-5 -translate-y-9 lg:translate-y-0">
      <div className="col-span-3">
        <div className="shadow-auto rounded-lg p-4 text-sm lg:text-base mx-4 lg:-mx-6">
          <h2>Deskripsi</h2>
          <h1 className="py-2 text-neutral3">
            {product.deskripsi}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
