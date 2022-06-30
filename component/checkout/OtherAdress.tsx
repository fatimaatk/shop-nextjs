import React from "react";
import { Form, Field } from "react-final-form";

const OtherAdress = () => {
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
      <Field name="otherStreet" component="input" validate={required}>
        {({ input, meta }) => (
          <>
            <p
              id="otherStreet"
              className="form-row form-row-wide address-field validate-required"
            >
              <label className="" htmlFor="otherStreet">
                Address  
                <abbr title="required" className="required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                placeholder="Street address"
                id="otherStreet"
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
      <Field name="otherStreet2" component="input">
        {({ input }) => (
          <p id="otherStreet2" className="form-row form-row-wide address-field">
            <input
              type="text"
              placeholder="Apartment, suite, unit etc. (optional)"
              id="otherStreet2"
              className="input-text "
              {...input}
            />
          </p>
        )}
      </Field>
      <Field name="otherCity" validate={required} component="input">
        {({ input, meta }) => (
          <p
            id="otherCity"
            className="form-row form-row-wide address-field validate-required"
            data-o_class="form-row form-row-wide address-field validate-required"
          >
            <label className="" htmlFor="otherCity">
              Town / City{" "}
              <abbr title="required" className="required">
                *{" "}
              </abbr>
            </label>
            <input
              type="text"
              placeholder="Town / City"
              id="otherCity"
              className="input-text "
              {...input}
            />
            {meta.error && meta.touched && (
              <span className="text-danger">{meta.error}</span>
            )}
          </p>
        )}
      </Field>
      <Field name="otherState" component="input">
        {({ input }) => (
          <p
            id="otherState"
            className="form-row form-row-first address-field validate-state"
            data-o_class="form-row form-row-first address-field validate-state"
          >
            <label className="" htmlFor="otherState">
              Country
            </label>
            <input
              type="text"
              id="otherState"
              placeholder="State / Country"
              className="input-text "
              {...input}
            />
          </p>
        )}
      </Field>
      <Field
        name="otherZipCode"
        validate={composeValidators(required, mustBeNumber, minLength(4))}
        component="input"
      >
        {({ input, meta }) => (
          <p
            id="otherZipCode"
            className="form-row form-row-last address-field validate-required validate-postcode"
            data-o_class="form-row form-row-last address-field validate-required validate-postcode"
          >
            <label className="" htmlFor="otherZipCode">
              Postcode{" "}
              <abbr title="required" className="required">
                {" "}
                * 
              </abbr>
            </label>
            <input
              type="text"
              placeholder="Postcode / Zip"
              id="otherZipCode"
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

export default OtherAdress;
