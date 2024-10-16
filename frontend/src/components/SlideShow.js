import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlideShow() {
  return (
    <Slider
      autoplay={true}
      autoplaySpeed={2500}
      infinite={true}
      speed={500}
      swipe={true}
      slidesToScroll={1}
      slidesToShow={1}
      arrows={false}
      pauseOnHover={false}
      dots={false}
    >
      <img src={require("../assets/slide1.png")} alt="Slide 1" />

      <img src={require("../assets/slide2.png")} alt="Slide 2" />

      <img src={require("../assets/slide3.png")} alt="Slide 3" />
    </Slider>
  );
}

export default SlideShow;
