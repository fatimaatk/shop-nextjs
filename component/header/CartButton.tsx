import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const CartButton = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="col-sm-4">
      <Link href="/cart">
        <button className="shopping-item">
          {" "}
          Cart : <span className="cart-amunt">{cart.totalAmount} €</span>{" "}
          <i className="fa fa-shopping-cart"></i>
          <span className="product-count">{cart.totalqty}</span>
        </button>
      </Link>
    </div>
  );
};

export default CartButton;
