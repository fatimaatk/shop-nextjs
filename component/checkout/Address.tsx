import React from "react";
import { Form, Field } from "react-final-form";
const Address = () => {
  const required = (value: string) =>
    value ? undefined : "This field is required.";

  const composeValidators =
    (...validators: any[]) =>
    (value: any) =>
      validators.reduce(
        (error, validator) => error || validator(value),
        undefined
      );

  const mustBeNumber = (value: any) =>
    isNaN(value) ? "Must be a number" : undefined;

  const minLength = (min: any) => (value: any) =>
    isNaN(value) || value.length >= min
      ? undefined
      : `Should be longer than ${min}`;
  return (
    <div>
      {" "}
      <Field name="street" component="input" validate={required}>
        {({ input, meta }) => (
          <>
            <p
              id="street"
              className="form-row form-row-wide address-field validate-required"
            >
              <label className="" htmlFor="street">
                Address  
                <abbr title="required" className="required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                placeholder="Street address"
                id="street"
                className="input-text "
                {...input}
              />
              {meta.error && meta.touched && (
                <span className="text-danger">{meta.error}</span>
              )}
            </p>
          </>
        )}
      </Field>
      <Field name="street2" component="input">
        {({ input }) => (
          <p id="street2" className="form-row form-row-wide address-field">
            <input
              type="text"
              placeholder="Apartment, suite, unit etc. (optional)"
              id="street2"
              className="input-text "
              {...input}
            />
          </p>
        )}
      </Field>
      <Field name="city" validate={required} component="input">
        {({ input, meta }) => (
          <p
            id="city"
            className="form-row form-row-wide address-field validate-required"
            data-o_class="form-row form-row-wide address-field validate-required"
          >
            <label className="" htmlFor="city">
              Town / City{" "}
              <abbr title="required" className="required">
                *{" "}
              </abbr>
            </label>
            <input
              type="text"
              placeholder="Town / City"
              id="city"
              className="input-text "
              {...input}
            />
            {meta.error && meta.touched && (
              <span className="text-danger">{meta.error}</span>
            )}
          </p>
        )}
      </Field>
      <Field name="country" component="input">
        {({ input }) => (
          <p
            id="country"
            className="form-row form-row-first address-field validate-state"
            data-o_class="form-row form-row-first address-field validate-state"
          >
            <label className="" htmlFor="country">
              Country
            </label>
            <input
              type="text"
              id="country"
              placeholder="State / Country"
              className="input-text "
              {...input}
            />
          </p>
        )}
      </Field>
      <Field
        name="zipCode"
        validate={composeValidators(required, mustBeNumber, minLength(4))}
        component="input"
      >
        {({ input, meta }) => (
          <p
            id="zipCode"
            className="form-row form-row-last address-field validate-required validate-postcode"
            data-o_class="form-row form-row-last address-field validate-required validate-postcode"
          >
            <label className="" htmlFor="zipCode">
              Postcode{" "}
              <abbr title="required" className="required">
                {" "}
                * 
              </abbr>
            </label>
            <input
              type="text"
              placeholder="Postcode / Zip"
              id="zipCode"
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

export default Address;
