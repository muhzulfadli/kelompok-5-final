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
      speed: 5000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
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


