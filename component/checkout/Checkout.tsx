import React, { useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import { useCookies } from "react-cookie";
import { Modal, Button, CloseButton } from "react-bootstrap";
import cartDataItems from "../../model/cartDataItems";

import Address from "./Address";
import Civility from "./Civility";
import Contact from "./Contact";
import OrderCheckout from "./OrderCheckout";
import OtherAdress from "./OtherAdress";
import OtherCivility from "./OtherCivility";

import Notes from "./Notes";
import Payment from "./Payment";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [differentAdress, setDifferentAdress] = useState(false);
  const [responseForm, setResponseForm] = useState<cartDataItems>();
  const [cartData, setCartData] = useState([]);
  const [cookies] = useCookies(["cartId"]);
  const [result, setResult] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleSelectDifferentAdress = () => {
    setDifferentAdress(!differentAdress);
  };

  const getDataFromCart = async () => {
    const response = await fetch(
      `http://localhost:3000/carts/${cookies.cartId}`
    );
    const data = await response.json();
    setCartData(data);
  };

  useEffect(() => {
    getDataFromCart();
    if (result === true) {
      fetch(`http://localhost:3000/orders/${cookies.cartId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cartData,
          customer: responseForm,
        }),
      });
    }
  }, [responseForm]);

  return (
    <div>
      <div className="product-big-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-bit-title text-center">
                <h2>Checkout</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={result}>
        <Modal.Header>
          <Modal.Title>Thank you for your order.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You will receive the summary of your order by email
        </Modal.Body>
        <Modal.Footer>
          <Link to={"/"}>Redirect to the home page.</Link>
        </Modal.Footer>
      </Modal>

      <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-content-right">
                <div className="woocommerce">
                  <Form
                    initialValues={{
                      ship_to_different_address: false,
                      payment_method: "payment_method_bacs",
                    }}
                    onSubmit={(ObjForm: cartDataItems, form) => {
                      setResponseForm(ObjForm);
                      setResult(true);
                    }}
                  >
                    {({ handleSubmit, form, submitting, pristine }) => (
                      <form
                        className="checkout"
                        method="post"
                        name="checkout"
                        onSubmit={handleSubmit}
                      >
                        <div id="customer_details" className="col2-set">
                          <div className="col-6">
                            <div className="woocommerce-billing-fields">
                              <h3>Billing Details</h3>
                              <Civility />
                              <Address />
                              <Contact />
                              <div className="clear"></div>
                            </div>
                          </div>

                          <div className="col-6">
                            <div className="woocommerce-shipping-fields">
                              <h3 id="ship-to-different-address">
                                <label
                                  className="checkbox"
                                  htmlFor="ship-to-different-address-checkbox"
                                >
                                  Ship to a different address?
                                </label>
                                <Field
                                  component="input"
                                  name="ship_to_different_address"
                                  type="checkbox"
                                  onClick={handleSelectDifferentAdress}
                                  id="ship-to-different-address-checkbox"
                                />
                              </h3>
                              {differentAdress === true && (
                                <div
                                  className="shipping_address"
                                  style={{ display: "block" }}
                                >
                                  <OtherCivility />
                                  <OtherAdress />
                                  <div className="clear"></div>
                                </div>
                              )}

                              <Notes />
                            </div>
                          </div>
                        </div>
                        <h3 id="order_review_heading">Your order</h3>

                        <OrderCheckout />

                        <Payment />

                        <div className="form-row place-order">
                          {}
                          <input
                            type="submit"
                            data-value="Place order"
                            id="place_order"
                            className="button alt"
                            value="Place order"
                            disabled={submitting || pristine}
                            style={{
                              background: "none repeat scroll 0 0 #5a88ca",
                              border: "medium none",
                              color: "#fff",
                              padding: "11px 20px",
                              textTransform: "uppercase",
                            }}
                          />
                        </div>

                        <div className="clear"></div>
                      </form>
                    )}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
