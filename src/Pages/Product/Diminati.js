import React, { useEffect } from "react";
import Title from "../../Components/Diminati/Title";
import Seller from "../../Components/Product/Seller";
import CategoryMobile from "../../Components/Diminati/CategoryMobile";
import DesktopView from "../../Components/Diminati/DesktopView";
import axios from "axios";

const Diminati = () => {

  useEffect(() => {
    axios.get("https://binar-second-hand.herokuapp.com/api/v1/product/offer/1", {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  })
  

  return (
    <div>
      <div className="container max-w-screen-lg mx-auto">
        <Title />
        {/* card nama penjual */}
        <Seller />
        {/* Category Mobile View */}
        <CategoryMobile />
        {/* Desktop View */}
        <DesktopView />
      </div>
    </div>
    /* Kategori end */
  );
};

export default Diminati;