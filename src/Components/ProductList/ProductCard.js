import React from "react";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";

const ProductCard = ({ data, deleteProduct }) => {
  return (
    <div className="h-60 rounded-2xl border border-slate-300 p-3 shadow-md">
      <Link to={`/product/productpreview/${data.id}`}>
        <div className="flex h-1/2 items-center justify-center rounded-md">
          <img
            src={
              data.product_photos[0]
                ? data.product_photos[0]
                : "/images/Jamtangan.png"
            }
            alt="gambar produk"
            className={`object-contain ${
              data.product_photos.length !== 0 ? "scale-[30%]" : "scale-[70%]"
            }  rounded-lg`}
          />
        </div>
      </Link>
      <div className="flex justify-between my-4">
        <div>
          <div className="text-sm lg:text-base">{data.nama}</div>
          <div className="text-xs my-2 text-neutral3">{data.categories}</div>
          <div className="text-xs lg:text-sm">Rp. {data.harga}</div>
        </div>
        <div className="cursor-pointer absolute ml-44">
          <BsTrash
            onClick={() => deleteProduct(data.id)}
            className="hover:text-red-500 text-xl font-semibold"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
