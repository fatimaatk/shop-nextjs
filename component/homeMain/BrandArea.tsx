import React from "react";
import brand1 from "./../../assets/img/brand1.png";
import brand2 from "./../../assets/img/brand2.png";
import brand3 from "./../../assets/img/brand3.png";
import brand4 from "./../../assets/img/brand4.png";
import brand5 from "./../../assets/img/brand5.png";
import brand6 from "./../../assets/img/brand6.png";
import Image from "next/image";

const BrandsArea = () => {
  const brandImage = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand1,
    brand2,
  ];

  return (
    <div className="brands-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="brand-wrapper">
              <div className="brand-list">
                {brandImage.map((img, i) => (
                  <Image src={img} alt="Nokia" key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsArea;
