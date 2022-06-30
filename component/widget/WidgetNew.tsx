import React from "react";
import Link from "next/link";
import ProductsType from "../../models/productType";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FolderTitle } from "../common/folderTitle";

const WidgetNew: React.FC<{ product: ProductsType }> = (props) => {
  const { product } = props;

  //Calcul prix remisé
  let priceNoDiscount: number =
    (product.price * product.discountRate) / 100 + product.price;

  //Methode recherche image
  const imageLink = FolderTitle(product.name);

  return (
    <>
      <div className="single-wid-product">
        <img
          src={`/${imageLink}/${product.imageName}`}
          alt=""
          className="product-thumb"
        />
        <Link href={`/product/${product.id}`} className="text-decoration-none">
          <h2 className="text-dark text-capitalize">{product.name}</h2>
        </Link>
        <div className="product-wid-rating">
          {Array.from({ length: product.review }, (_, i) => (
            <FontAwesomeIcon icon={faStar} key={i} style={{ width: "20px" }} />
          ))}
          {props.product.review < 5
            ? Array.from({ length: 5 - product.review }, (_, i) => (
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
          <ins>{product.price.toFixed(2)} €</ins>
          <del>${priceNoDiscount.toFixed(2)} €</del>
        </div>
      </div>
    </>
  );
};

export default WidgetNew;
