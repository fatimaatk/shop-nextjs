import React, { useState, useEffect } from "react";
//import { useCookies } from "react-cookie";
//import { Link } from "react-router-dom";
//import ProductsType from "../../model/productType";
//import cartDataItems from "../../model/cartDataItems";

//import CartProduct from "./CartProduct";
//import CartTotal from "./CartTotal";
//import ProductCardInCart from "./ProductCardInCart";
import Link from "next/link";
import { useSelector } from "react-redux";
import CartProduct from "../component/cart/CartProduct";
import { GetStaticProps } from "next";
import ProductsType from "../models/productType";
import ProductCardInCart from "../component/cart/ProductCartInCart";
import CartTotal from "../component/cart/CartTotal";
import { useCookies } from "react-cookie";

const Cart: React.FC = (props) => {
  const { products } = props;
  //redux cart
  const cart = useSelector((state) => state.cart);
  const items = cart.items.filter((element) => element.id && element);

  // //random
  const [randomProducts, setRandomProducts] = useState<ProductsType[]>([]);

  useEffect(() => {
    getRandom();
  }, []);

  const getRandom = async () => {
    let randomProduct1: ProductsType = await products[
      Math.floor(Math.random() * products.length)
    ];
    let randomProduct2: ProductsType = await products[
      Math.floor(Math.random() * products.length)
    ];
    setRandomProducts([randomProduct1, randomProduct2]);
  };

  const getIdFromCart = async () => {
    const response = await fetch(`http://localhost:3000/carts`);
    const data = await response.json();
    setCartId(data.map((x: any) => x.id));
  };
  //produits dans cart
  const [cartId, setCartId] = useState([]);
  const [cookiesCartId, setCookiesCartId] = useCookies(["Id_Cart"]);

  const setCartCookies = () => {
    setCookiesCartId("Id_Cart", cartId, { path: "/" });
  };

  let idCart: number = 1;
  //const

  console.log(cartId);
  useEffect(() => {
    const exist = cookiesCartId.Id_Cart.filter((x: any) => x === cartId);
    console.log(exist);
    getIdFromCart();
    setCartCookies();
    if (exist) {
      fetch(`http://localhost:3000/carts/${idCart}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          total: totalOrder.toFixed(2),
          subTotal: subTotalOrder.toFixed(2),
          tax: tax.toFixed(2),
          items: [cart.items.filter((x) => x.id && x)],
        }),
      });
    } else {
      fetch("http://localhost:3000/carts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: idCart++,
        }),
      });
    }
  }, [cart.items]);

  //price
  const totalOrder: number = (cart.totalAmount * 120) / 100;
  const subTotalOrder: number = cart.totalAmount;
  const tax: number = totalOrder - subTotalOrder;

  return (
    <div className="single-product-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="product-content-right">
              <div className="woocommerce">
                {items.length > 0 ? (
                  <table className="shop_table cart">
                    <thead>
                      <tr>
                        <th className="product-remove">Remove</th>
                        <th className="product-thumbnail">Image</th>
                        <th className="product-name">Product</th>
                        <th className="product-price">Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.totalqty > 0 &&
                        items.map((item, i) => (
                          <CartProduct product={item} qty={item.qty} key={i} />
                        ))}

                      <tr>
                        <td className="actions" colSpan={6}>
                          <Link href={"/checkout"}>
                            <input
                              type="button"
                              defaultValue="Checkout"
                              name="proceed"
                              className="checkout-button button alt wc-forward"
                            />
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <div className="mb-5">
                    <h2 style={{ color: "#5a88ca" }}>YOUR CART IS EMPTY ...</h2>
                  </div>
                )}
                <div className="cart-collaterals">
                  <div className="cross-sells">
                    <h2>You may be interested in...</h2>
                    <ul className="products">
                      {randomProducts &&
                        randomProducts.map((product, i) => (
                          <ProductCardInCart product={product} key={i} />
                        ))}
                    </ul>
                  </div>

                  {items.length > 0 ? (
                    <CartTotal
                      totalOrder={totalOrder}
                      subTotalOrder={subTotalOrder}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

export const getStaticProps: GetStaticProps = async () => {
  const productsRes = await fetch(`http://localhost:3000/products`);
  const products = (await productsRes.json()) as ProductsType;

  return {
    props: {
      products: products,
    },
  };
};
