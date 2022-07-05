import React, { Component } from "react";
import Slider from "react-slick";
import "./slide.css";

export default class PauseOnHover extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerMode: true,
      centerPadding: "200px",
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      pauseOnHover: true,
      autoPlaySpeed: 4000,
      cssEase: "linear",
      initialState: 0,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 0.32,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          <div >
          <img src="/images/imgbanner.png" alt="banner" />
          </div>
          <div >
          <img src="/images/imgbanner.png" alt="banner" />
          </div>
          <div >
          <img src="/images/imgbanner.png" alt="banner" />
          </div>
        </Slider>
      </div>
    );
  }
}


