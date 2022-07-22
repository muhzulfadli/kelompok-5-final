import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Mobile from "../../Components/SellerPreview/Mobile";
import DetailProduct from "../../Components/SellerPreview/DetailProduct";
import ProductDescription from "../../Components/SellerPreview/ProductDescription";
import { Fade } from "./Slider"

const ProductPreview = () => {

  const [product, setProduct] = useState(null);

  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://binar-second-hand.herokuapp.com/api/v1/product/${params.id}`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data !== null) {
          setProduct({ ...res.data.product });
        } else {
      //     return Promise.reject({
      //       message: "error",
      //     });
        }
      // })
      // .catch((error) => {
      //   console.log(error);
      });
  }, [params.id]);

  console.log(product);

  return (
    <div className="container mx-auto w-fit lg:max-w-4xl md:my-5">
      <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
        <div className="col-span-3">
          <Fade />
          {/* mobile responsive */}
          <Mobile product={product} />
          <ProductDescription product={product} />
        </div>
        {/* Detail Product and Button */}
        <DetailProduct product={product} />
      </div>
    </div>
  );
}

export default ProductPreview;