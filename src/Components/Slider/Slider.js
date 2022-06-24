import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      infinite: true,
      centerMode: true,
      centerPadding: "180px",
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 3000,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <img src="/images/imgbanner.png" alt="banner" />
          </div>
          <div>
          <img src="/images/imgbanner.png" alt="banner" />
          </div>
          <div>
          <img src="/images/imgbanner.png" alt="banner" />
          </div>
        </Slider>
      </div>
    );
  }
}


