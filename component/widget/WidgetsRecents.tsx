import React from "react";
import Link from "next/link";
import { FolderTitle } from "../common/folderTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import CookiesType from "../../models/cookiesType";

const WidgetsRecents: React.FC<{ cookie: CookiesType }> = (props) => {
  const { cookie } = props;

  let priceNoDiscount: number =
    (props.cookie.price * props.cookie.discountRate) / 100 + props.cookie.price;

  const imageLink = FolderTitle(props.cookie.image);

  return (
    <>
      <div className="single-wid-product">
        <Link href={`/product/${cookie.id}`}>
          <img
            src={`/${imageLink}/${props.cookie.image}`}
            alt=""
            className="product-thumb"
          />
        </Link>
        <Link
          href={`/product/${cookie.id}`}
          className="text-capitalize text-decoration-none"
        >
          <h2>{cookie.name}</h2>
        </Link>
        <div className="product-wid-rating">
          {Array.from({ length: cookie.review }, (_, i) => (
            <FontAwesomeIcon icon={faStar} key={i} style={{ width: "20px" }} />
          ))}
          {props.cookie.review < 5
            ? Array.from({ length: 5 - cookie.review }, (_, i) => (
                <FontAwesomeIcon
                  icon={faStar}
                  key={i}
                  color={"#e3e3e3"}
                  style={{ width: "20px" }}
                />
              ))
            : null}
        </div>
        <div className="product-wid-price">
          <ins>{props.cookie.price.toFixed(2)}€</ins>
          <del>{priceNoDiscount.toFixed(2)}€</del>
        </div>
      </div>
    </>
  );
};

export default WidgetsRecents;
