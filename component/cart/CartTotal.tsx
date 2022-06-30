import React from "react";

const CartTotal: React.FC<{ totalOrder: number; subTotalOrder: number }> = (
  props
) => {
  const { totalOrder, subTotalOrder } = props;
  return (
    <div className="cart_totals ">
      <h2>Cart Totals</h2>

      <table>
        <tbody>
          <tr className="cart-subtotal">
            <th>Cart Subtotal</th>
            <td>
              <span className="amount">{totalOrder.toFixed(2)}€</span>
            </td>
          </tr>

          <tr className="shipping">
            <th>Taxe (20%)</th>
            <td>{(totalOrder - subTotalOrder).toFixed(2)} €</td>
          </tr>

          <tr className="order-total">
            <th>Order Total</th>
            <td>
              <strong>
                <span className="amount">{totalOrder.toFixed(2)} €</span>
              </strong>{" "}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartTotal;
