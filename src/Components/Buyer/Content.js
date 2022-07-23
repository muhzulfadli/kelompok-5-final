import React, { useState } from "react";
import Fade from "../Buyer/ProductSlider";
import { AiFillStar } from "react-icons/ai";
import Mobile from "./Mobile";
import Seller from "./Seller";
import Detail from "./Detail";
import axios from "axios";
import { useSelector } from "react-redux/es/exports";

const Content = ({ product, setIsOpen, buttonClick ,props,params}) => {
const [wishlistClicked, setWishlistClicked] = useState(false);

  const user = useSelector((store) => store.user.data);
  console.log (user.id)
  const handleWishlist = () => {
   
  const data ={
    product_id = product_id.current.value 
  }
  setWishlistClicked((current) => !current);
    axios.post('http://binar-second-hand.herokuapp.com/api/v1/wishlist',params,
    {
       headers : {
      'content-Type' : 'application/json',
       'accept' : 'application/json',
       Authorization : localStorage.getItem("accessToken")
       },
    } ,{
      user_id: user.id,
      product_id: props?.id
     },)
    .then((res) => {
      console.log(res)
    })
  };

  return (
    <div className="container mx-auto w-full lg:max-w-4xl md:py-5">
      {product !== null ? (
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="col-span-3">
            <Fade />
            {/* Mobile View */}
            <Mobile
              handleWishlist={handleWishlist}
              wishlistClicked={wishlistClicked}
              product={product}
              buttonClick={buttonClick}
              setIsOpen={setIsOpen}
            />

            <div className="container mx-auto max-w-4xl mt-3 lg:mt-5 -translate-y-9 lg:translate-y-0">
              <div className="col-span-3">
                <div className="shadow-auto rounded-lg p-4 text-sm lg:text-base mx-4 lg:-mx-6">
                  <h2>Deskripsi</h2>
                  <h1 className="py-2 text-neutral3">{product.deskripsi}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            {/* Detail dan Button */}
            <Detail
              product={product}
              handleWishlist={handleWishlist}
              wishlistClicked={wishlistClicked}
              buttonClick={buttonClick}
              AiFillStar={AiFillStar}
              setIsOpen={setIsOpen}
            />
            <Seller />
          </div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src="/images/loading2.gif" alt="" />
          <p className="text-purple4">Lagi loading coy...</p>
        </div>
      )}
    </div>
  );
};

export default Content;
