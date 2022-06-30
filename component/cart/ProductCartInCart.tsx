import React from "react";
import Link from "next/link";
import ProductsType from "../../models/productType";
import { addToCart } from "../../store/cartReducer/actions";
import { useDispatch, useSelector } from "react-redux";
import { FolderTitle } from "../common/folderTitle";

const ProductCardInCart: React.FC<{ product: ProductsType }> = (props) => {
  const { product } = props;
  //REDUX
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(addToCart(product));
  };

  const imageLink = FolderTitle(product.name);

  return (
    <>
      <li className="product">
        <Link href={`/product/${product.id}`} className="text-decoration-none">
          <img
            width="300"
            height="300"
            alt="T_4_front"
            className="attachment-shop_catalog wp-post-image"
            src={`/${imageLink}/${product.imageName}`}
          />
        </Link>
        <h3 className="text-capitalize ">{product.name}</h3>
        <span className="price">
          <span className="amount">{product.price.toFixed(2)} €</span>
        </span>

        <button className="add_to_cart_button" onClick={incrementHandler}>
          Add to Cart
        </button>
      </li>
    </>
  );
};

export default ProductCardInCart;
