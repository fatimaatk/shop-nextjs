import React from "react";
import ProductsType from "../../models/productType";
import Link from "next/link";
import { FolderTitle } from "../common/folderTitle";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  remove,
  removeToCart,
} from "../../store/cartReducer/actions";

const CartProduct: React.FC<{
  product: ProductsType;
  qty: number;
}> = (props) => {
  const { product, qty } = props;

  const price = product.price;
  const pricePerQty = (product.price * qty).toFixed(2);

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  const handleRemoveToCart = () => {
    dispatch(removeToCart(product));
  };
  const handleRemoveAllToCart = () => {
    dispatch(remove(product));
  };

  const forlderLink = product && FolderTitle(product.name);

  return (
    <tr className="cart_item">
      <td className="product-remove">
        <button
          onClick={handleRemoveAllToCart}
          className="remove text-decoration-none"
        >
          x
        </button>
      </td>

      <td className="product-thumbnail">
        <Link href={`/product/${product.id}`}>
          <img
            width="145"
            height="145"
            alt="poster_1_up"
            className="shop_thumbnail"
            src={`/${forlderLink}/${product.imageName}`}
          />
        </Link>
      </td>

      <td className="product-name">
        <Link
          href={`/product/${product.id}`}
          className="text-decoration-none text-capitalize"
        >
          {product.name}
        </Link>
      </td>

      <td className="product-price">
        <span className="amount">{price.toFixed(2)} €</span>
      </td>

      <td className="product-quantity">
        <div className="quantity buttons_added">
          {qty > 0 ? (
            <input
              type="button"
              className="minus"
              defaultValue="-"
              onClick={handleRemoveToCart}
            />
          ) : (
            <input type="button" className="minus" defaultValue="-" />
          )}

          <input
            type="number"
            className="input-text qty text"
            title="Qty"
            value={qty}
            readOnly
          />
          <input
            type="button"
            className="plus"
            defaultValue="+"
            onClick={handleAddToCart}
          />
        </div>
      </td>

      <td className="product-subtotal">
        <span className="amount">{pricePerQty} €</span>
      </td>
    </tr>
  );
};

export default CartProduct;
