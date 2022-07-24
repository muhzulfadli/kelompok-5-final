import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <Link to={`/product/productdetail/${props.data.id}`}>
      <div className="h-60 rounded-2xl border border-slate-300 p-3 shadow-md">
        <div className={`flex h-1/2 items-center justify-center rounded-md ${props.data.product_photos.length !== 0 ? "" : "bg-slate-300"}`}>
            <img src={props.data.product_photos[0]} alt="gambar produk" className={`object-contain ${props.data.product_photos.length !== 0 ? "scale-[40%] lg:scale-50" : ""} rounded-lg`} />
        </div>
        <div className="mt-3 text-sm lg:text-base">{props.data.nama}</div>
        <div className="text-xs my-2 text-neutral3">{props.data.categories}</div>
        <div className="text-xs lg:text-sm">Rp. {props.data.harga}</div>
      </div>
    </Link>
  );
};

export default ProductCard;
