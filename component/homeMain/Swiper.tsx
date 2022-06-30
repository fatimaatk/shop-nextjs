import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slide1 from "./../../assets/img/h4-slide.png";
import slide2 from "./../../assets/img/h4-slide2.png";
import slide3 from "./../../assets/img/h4-slide3.png";
import Image from "next/image";

const Slider = () => {
  const imgSlider = [slide1, slide2, slide3];
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      autoFocus={true}
      showIndicators={false}
      showStatus={false}
      infiniteLoop={true}
    >
      {imgSlider.map((image, i) => (
        <div key={i} style={{ height: "60vh" }}>
          <Image src={image} alt="slide" layout="fill" sizes="50" />
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
