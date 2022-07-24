import React, { useState, useEffect } from "react";
import Title from "../../Components/Diminati/Title";
import Seller from "../../Components/Product/Seller";
import CategoryMobile from "../../Components/Diminati/CategoryMobile";
import DesktopView from "../../Components/Diminati/DesktopView";
import axios from "axios";

const Diminati = () => {

    const [product, setProduct] = useState([]);
  
    useEffect(() => {
      axios
        .get("https://binar-second-hand.herokuapp.com/api/v1/product")
        .then((res) => {
          // console.log(res);
          if (res.data.products !== null) {
            setProduct([...res.data.products]);
          } else {
            return Promise.reject({
              message: "error",
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

  return (
    <div>
      <div className="container max-w-screen-lg mx-auto">
        <Title />
        {/* card nama penjual */}
        <Seller />
        {/* Category Mobile View */}
        <CategoryMobile />
        {/* Desktop View */}
        <DesktopView product={product}/>
      </div>
    </div>
    /* Kategori end */
  );
};

export default Diminati;