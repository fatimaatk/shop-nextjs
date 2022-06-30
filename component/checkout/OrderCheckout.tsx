import React from "react";
import { useSelector } from "react-redux";

const OrderCheckout = () => {
  const cartItem = useSelector((state) => state.cart);

  const totalOrder: number = (cartItem.totalAmount * 120) / 100;
  return (
    <div>
      {" "}
      <table className="shop_table">
        <thead>
          <tr>
            <th className="product-name">Product</th>
            <th className="product-total">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="cart_item">
            <td className="product-name">
              Ship Your Idea{" "}
              <strong className="product-quantity">
                × {cartItem.totalqty}
              </strong>{" "}
            </td>
            <td className="product-total">
              <span className="amount">{totalOrder.toFixed(2)} € </span>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="cart-subtotal">
            <th>Cart Subtotal</th>
            <td>
              <span className="amount">{totalOrder.toFixed(2)} € </span>
            </td>
          </tr>

          <tr className="shipping">
            <th>Taxe (20%)</th>
            <td>{(totalOrder - cartItem.totalAmount).toFixed(2)} €</td>
          </tr>

          <tr className="order-total">
            <th>Order Total</th>
            <td>
              <strong>
                <span className="amount">{totalOrder.toFixed(2)} € </span>
              </strong>{" "}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default OrderCheckout;
