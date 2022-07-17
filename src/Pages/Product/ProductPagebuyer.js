import React, { useState, useEffect, Component } from "react";
import { useParams } from "react-router-dom";
import Alert from "../../Components/Buyer/Alert";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ModalTawar from "../../Components/Buyer/ModalTawar";
import axios from "axios";
import Content from "../../Components/Buyer/Content";

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
            <img className="w-full" src="/images/Jamtangan.png" alt="produk" />
          </div>
          <div>
            <img className="w-full" src="/images/Jamtangan.png" alt="produk" />
          </div>
          <div>
            <img className="w-full" src="/images/Jamtangan.png" alt="produk" />
          </div>
          <div>
            <img className="w-full" src="/images/Jamtangan.png" alt="produk" />
          </div>
        </Slider>
        <div className="btn-carousel hidden md:block absolute left-3 top-[45%] ">
          <button className=" rounded-full " onClick={this.previous}>
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

const ProductPagebuyer = () => {
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

  const [isOpen, setIsOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(true);
  const [buttonClick, setButtonClick] = useState(true);

  return (
    <div>
      <ModalTawar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setAlertOpen={setAlertOpen}
        setButtonClick={setButtonClick}
      />
      <Alert setAlertOpen={setAlertOpen} alertOpen={alertOpen} />
      <Content
        product={product}
        setIsOpen={setIsOpen}
        buttonClick={buttonClick}
      />
    </div>
  );
};

export default ProductPagebuyer;
