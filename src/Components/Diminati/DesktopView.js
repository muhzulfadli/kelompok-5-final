// import axios from "axios";
// import React, { useEffect, useState } from "react";
import Category from "./Category";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import data from "../../dummyData";

const DesktopView = () => {

  // const [hargaTawar, setHargaTawar] = useState({})

  // useEffect(() => {
  //   axios.get("https://binar-second-hand.herokuapp.com/api/v1/product/offer/1", 
  //   {
  //     headers: {
  //       Authorization: localStorage.getItem("accessToken"),
  //     },
  //   })
  //   .then(res => {
  //     setHargaTawar(res.data.offer)
  //   })
  // }, [])

  return (
    <div className="lg:flex my-8 block">
      <div className="lg:w-1/3">
        <div className="hidden lg:flex justify-center md:justify-start">
          <Category />
        </div>
      </div>
    { data.productData.length === 0 ? (
    <div className="w-5/6 lg:w-4/6 absolute top-80 text-center lg:left-80 ml-4 lg:top-60 py-8">
      <div className="w-full flex flex-col items-center justify-center text-sm lg:text-base">
        <img
          src="/images/Empty-interested.png"
          alt=""
          className="w-64 lg:w-60 h-64"
        />
        <div>Belum ada produkmu yang diminati nih,</div>
        <div>sabar ya rejeki ga kemana-mana kok</div>
      </div>
    </div> ) : (
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {data.productData.map((item, index) => {
          return (
            <Link to="/product/infopenawaran" key={index}>
              <ProductCard nama={item.nama} harga={item.harga} offer={item.offer} kategori={item.kategori} image={item.image}/>
            </Link>
          )
        })}
      </div>  )
   }
    </div> 
  );
};

export default DesktopView;
