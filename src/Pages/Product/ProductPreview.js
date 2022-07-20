import React, { useState, useEffect, Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import axios from "axios";
import Mobile from "../../Components/SellerPreview/Mobile";
import DetailProduct from "../../Components/SellerPreview/DetailProduct";
import ProductDescription from "../../Components/SellerPreview/ProductDescription";

export class Fade extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="relative overflow-hidden">
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div>
            <img className="w-full" src="/images/jamtangan.png" alt="produk" />
          </div>
          <div>
            <img
              className="w-full"
              src="/images/JamtanganBiru.png"
              alt="produk"
            />
          </div>
          <div>
            <img className="w-full" src="/images/jamtangan.png" alt="produk" />
          </div>
          <div>
            <img
              className="w-full"
              src="/images/JamtanganBiru.png"
              alt="produk"
            />
          </div>
        </Slider>
        <div className="btn-carousel hidden md:block absolute left-3 top-[45%] ">
          <button className="rounded-full" onClick={this.previous}>
            <img
              className="rotate-180"
              src="/images/carousel-btn.png"
              alt="btn-carousel"
            />
          </button>
        </div>
        <div className="btn-carousel hidden md:block absolute right-3 top-[45%] ">
          <button className=" rounded-full " onClick={this.next}>
            <img src="/images/carousel-btn.png" alt="btn-carousel" />
          </button>
        </div>
      </div>
    );
  }
}

const ProductPreview = () => {

  const [product, setProduct] = useState(null);

  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `https://binar-second-hand.herokuapp.com/api/v1/product/${params.id}`
      )
      .then((res) => {
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
  }, []);

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