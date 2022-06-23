import React from "react";

const ProductCard = () => {
    return (
        <div className="h-60 rounded-2xl border border-slate-300 p-5 shadow-md">
            <div className="flex h-1/2 items-center justify-center rounded-md bg-slate-400">
                Gambar
            </div>
            <div className="mt-4 text-sm lg:text-base">Jam Tangan Casio</div>
            <div className='text-xs my-2'>Aksesoris</div>
            <div className="text-xs lg:text-sm">Rp 250.000</div>
        </div>
    );
};

export default ProductCard;