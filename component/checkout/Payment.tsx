import React, { useState } from "react";
import { Field } from "react-final-form";

const Payment = () => {
  return (
    <div id="payment">
      <ul className="payment_methods methods">
        <li className="payment_method_bacs">
          <label htmlFor="payment_method_bacs">
            <Field
              component="input"
              name="payment_method"
              value="payment_method_bacs"
              type="radio"
              id="payment_method_bacs"
            />{" "}
            Direct Bank Transfer
            {/* {({ meta }) => (
                                  {meta.error && meta.touched && (
                                          <span className="text-danger">
                                            {meta.error}
                                          </span>
                                        )}
                               )} */}
          </label>

          <div className="payment_box payment_method_bacs">
            <p>
              Make your payment directly into our bank account. Please use your
              Order ID as the payment reference. Your order won’t be shipped
              until the funds have cleared in our account.
            </p>
          </div>
        </li>
        <li className="payment_method_cheque">
          <label htmlFor="payment_method_cheque">
            <Field
              component="input"
              name="payment_method"
              value="payment_method_cheque"
              type="radio"
              id="payment_method_cheque"
            />{" "}
            Cheque Payment{" "}
          </label>

          <div className="payment_box payment_method_cheque">
            <p>
              Please send your cheque to Store Name, Store Street, Store Town,
              Store State / County, Store Postcode.
            </p>
          </div>
        </li>
        <li className="payment_method_paypal">
          <label htmlFor="payment_method_paypal">
            <Field
              component="input"
              name="payment_method"
              value="payment_method_paypal"
              type="radio"
              id="payment_method_paypal"
            />{" "}
            PayPal{" "}
            <img
              alt="PayPal Acceptance Mark"
              src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png"
            />
            <a
              title="What is PayPal?"
              className="about_paypal"
              href="https://www.paypal.com/gb/webapps/mpp/paypal-popup"
              target="_blank"
              rel="noreferrer"
            >
              What is PayPal?
            </a>
          </label>

          <div className="payment_box payment_method_paypal">
            <p>
              Pay via PayPal, you can pay with your credit card if you don’t
              have a PayPal account.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Payment;
