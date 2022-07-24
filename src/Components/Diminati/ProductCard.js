import React from "react";

const ProductCard = (props) => {  

  return (
    <div className="h-60 rounded-2xl border border-slate-300 p-3 shadow-md">
      <div className={`flex h-1/2 items-center justify-center rounded-md ${props.image !== 0 ? "" : "bg-slate-300"}`}>
          <img src={props.image} alt="gambar produk" className={`object-contain ${props.image !== 0 ? "scale-[40%]" : ""}  rounded-lg`}/>
      </div>
      <div className="mt-3 text-sm lg:text-base">{props.nama}</div>
      <div className="text-xs my-2 text-neutral3">{props.kategori}</div>
      <div className="text-xs lg:text-sm">Rp. {props.harga}</div>
      <div className="text-xs lg:text-sm">Harga tawar Rp. {props.offer}</div>      
    </div>
);
};

export default ProductCard;
