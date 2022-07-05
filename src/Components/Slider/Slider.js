import React, { Component } from "react";
import Slider from "react-slick";
import './style.css'

export default class PauseOnHover extends Component {
  render() {
    const settings = {
      infinite: true,
      centerMode: true,
      centerPadding: "180px",
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000 ,
      pauseOnHover: true,
      speed: 4000,
      cssEase: "linear",
      initialState: 0,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 0.32,
            slidesToScroll: 1,
          },
        },
      ],
        
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


