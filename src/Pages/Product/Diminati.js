import React, { useState, useEffect } from "react";
import Title from "../../Components/Diminati/Title";
import Seller from "../../Components/Product/Seller";
import CategoryMobile from "../../Components/Diminati/CategoryMobile";
import DesktopView from "../../Components/Diminati/DesktopView";
import axios from "axios";

const Diminati = () => {

  const [dataTawar, setDataTawar] = useState(null);

  // const param = useParams()

  const getTawar = async () => {
    const res = await axios.get("https://binar-second-hand.herokuapp.com/api/v1/product/offer/3", {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    })
    setDataTawar(res.data.offer)
  }

  useEffect(() => {
    getTawar()
  }, [])

  return (
    <div>
      <div className="container max-w-screen-lg mx-auto">
        <Title />
        {/* card nama penjual */}
        <Seller />
        {/* Category Mobile View */}
        <CategoryMobile />
        {/* Desktop View */}
        <DesktopView dataTawar={dataTawar} />
      </div>
    </div>
    /* Kategori end */
  );
};

export default Diminati;