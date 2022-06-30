import React from "react";
import { Form, Field } from "react-final-form";

const Contact = () => {
  const required = (value: string) =>
    value ? undefined : "This field is required.";

  const composeValidators =
    (...validators: any[]) =>
    (value: any) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );

  const validateEmail = (value: any) => {
    const regex =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return value.match(regex) ? undefined : "Should be an email.";
  };

  const mustBeNumber = (value: any) =>
    isNaN(value) ? "Must be a number" : undefined;

  const minLength = (min: any) => (value: any) =>
    isNaN(value) || value.length >= min
      ? undefined
      : `Should be longer than ${min}`;

  return (
    <div>
      <Field
        name="email"
        component="input"
        validate={composeValidators(required, validateEmail)}
      >
        {({ input, meta }) => (
          <p
            id="billing_email_field"
            className="form-row form-row-first validate-required validate-email"
          >
            <label className="" htmlFor="email">
              Email Address{" "}
              <abbr title="required" className="required">
                *
              </abbr>
                       
            </label>
            <input
              type="text"
              placeholder=""
              id="email"
              className="input-text "
              {...input}
            />
            {meta.error && meta.touched && (
              <span className="text-danger">{meta.error}</span>
            )}
          </p>
        )}
      </Field>
      <Field
        component="input"
        name="phone"
        validate={composeValidators(required, mustBeNumber, minLength(10))}
      >
        {({ input, meta }) => (
          <p
            id="phone"
            className="form-row form-row-last validate-required validate-phone"
          >
            <label className="" htmlFor="phone">
              Phone{" "}
              <abbr title="required" className="required">
                *
              </abbr>
            </label>
            <input
              type="text"
              placeholder=""
              id="phone"
              className="input-text "
              {...input}
            />
            {meta.error && meta.touched && (
              <span className="text-danger">{meta.error}</span>
            )}
          </p>
        )}
      </Field>
    </div>
  );
};

export default Contact;
