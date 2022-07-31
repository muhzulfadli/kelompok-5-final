import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Mobile from "../../Components/SellerPreview/Mobile";
import DetailProduct from "../../Components/SellerPreview/DetailProduct";
import ProductDescription from "../../Components/SellerPreview/ProductDescription";
import { Fade } from "./Slider"

const ProductPreview = () => {

  const params = useParams();

  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://binar-second-hand.herokuapp.com/api/v1/product/${params.id}`
      )
      .then((res) => {
        // console.log(res.data);
        if (res.data !== null) {
          setProduct({ ...res.data.product });
        } else {
          return Promise.reject({
            message: "error",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [user, setUser] = useState({})
  useEffect(() => {
    axios.get("https://binar-second-hand.herokuapp.com/api/v1/profile", 
    {
      headers: {
        Authorization: localStorage.getItem("accessToken"),
      },
    })
    .then(res => {
      setUser(res.data.userProfile)
    })
  }, [])



  return (
    <div className="container mx-auto w-fit lg:max-w-4xl md:my-5">
      {product !== null ? (
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="col-span-3">
            <Fade product={product} />
            {/* mobile responsive */}
            <Mobile product={product} user={user} />
            <ProductDescription product={product} />
          </div>
          {/* Detail Product and Button */}
          <DetailProduct product={product} user={user} />
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src="/images/loading2.gif" alt="" />
          <p className="text-purple4">Lagi loading coy...</p>
        </div>
      )}
    </div>
  );
}

export default ProductPreview;