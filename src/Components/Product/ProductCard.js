import React from "react";
import Zoom from 'react-medium-image-zoom'

const ProductCard = (props) => {
    return (
        <div className="h-60 rounded-2xl border border-slate-300 p-3 shadow-md">
            <div className="flex h-1/2 items-center justify-center rounded-md ">
                <div className="flex items-center w-1/3 h-1/3 ">
                    <Zoom>
                        <img src={props.product.image} alt="" />
                    </Zoom>
                </div>                
            </div>
            <div className="mt-3 text-sm lg:text-base">Jam Tangan Casio</div>
            <div className='text-xs my-2 text-neutral3'>Aksesoris</div>
            <div className="text-xs lg:text-sm">Rp. {props.product.price}</div>
        </div>
        
        



    );
};

export default ProductCard;