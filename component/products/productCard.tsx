import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FolderTitle } from "../common/folderTitle";
import ProductsType from "../../models/productType";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/cartReducer/actions";

const ProductCard: React.FC<{ product: ProductsType; brandName?: string }> = (
  props
) => {
  const { product } = props;
  let priceBeforeDiscount: number =
    (product.price * product.discountRate) / 100 + product.price;
  const folderLink = FolderTitle(product.name);

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="col-md-3 col-sm-6">
      <div className="single-shop-product ">
        <div className="product-upper border border-grey d-flex justify-content-center">
          <Link
            href={`/product/${product.id}`}
            className="text-decoration-none"
          >
            <Image
              className=" p-3 "
              src={`/${folderLink}/${product.imageName}`}
              alt=""
              layout="fixed"
              width={200}
              height={240}
            />
          </Link>
        </div>
        <Link href={`/product/${product.id}`} className="text-decoration-none">
          <h2 className="single-shop-product">
            <a className=" text-capitalize" type="button">
              {product.name}
            </a>
          </h2>
        </Link>

        <div className="product-carousel-price">
          <ins>{product.price.toFixed(2)} €</ins>{" "}
          <del>{priceBeforeDiscount.toFixed(2)} €</del>
        </div>

        <div className="product-option-shop">
          <button className="add_to_cart_button" onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
