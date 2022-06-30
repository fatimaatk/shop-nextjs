import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faLock,
  faRefresh,
  faGift,
} from "@fortawesome/free-solid-svg-icons";

const PromoArea = () => {
  return (
    <div className="promo-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="single-promo promo1">
              <FontAwesomeIcon icon={faRefresh} width={25} />
              <p>30 Days return</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-promo promo2">
              <FontAwesomeIcon icon={faTruck} width={25} />
              <p>Free shipping</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-promo promo3">
              <FontAwesomeIcon icon={faLock} width={25} />
              <p>Secure payments</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="single-promo promo4">
              <FontAwesomeIcon icon={faGift} width={25} />
              <p>New products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoArea;
