import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
    // console.log(this.props.product);
    return (
      <div className="relative overflow-hidden">
        <Slider ref={(c) => (this.slider = c)} {...settings}>
          <div>
            <img
              className="w-full"
              src={
                this.props.product.product_photos[0]
                  ? this.props.product.product_photos[0]
                  : "/images/Jamtangan.png"
              }
              alt="produk"
            />
          </div>
          <div>
            <img
              className="w-full"
              src={
                this.props.product.product_photos[1] ? this.props.product.product_photos[1] : this.props.product.product_photos[0] ? this.props.product.product_photos[0] : "/images/Jamtangan.png" 
              }
              alt="produk"
            />
          </div>
          <div>
            <img
              className="w-full"
              src={
                this.props.product.product_photos[2] ? this.props.product.product_photos[2] : this.props.product.product_photos[0] ? this.props.product.product_photos[0] : "/images/Jamtangan.png" 
              }
              alt="produk"
            />
          </div>
          <div>
            <img
              className="w-full"
              src={
                this.props.product.product_photos[3] ? this.props.product.product_photos[3] : this.props.product.product_photos[0] ? this.props.product.product_photos[0] : "/images/Jamtangan.png" 
              }
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
