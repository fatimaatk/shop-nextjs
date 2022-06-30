import React from "react";
import { Form, Field } from "react-final-form";

const Civility = () => {
  const required = (value: string) =>
    value ? undefined : "This field is required.";

  return (
    <>
      <Field name="civility" component="select" validate={required}>
        {({ input, meta }) => (
          <p
            id="civility"
            className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
          >
            <label className="" htmlFor="civility">
              Civility{" "}
              <abbr title="required" className="required">
                *
              </abbr>
            </label>
            <select
              className="country_to_state country_select"
              id="civility"
              {...input}
            >
              <option>Mr</option>
              <option>Mlle</option>
              <option>Mme</option>
            </select>
            {meta.error && meta.touched && (
              <span className="text-danger">{meta.error}</span>
            )}
          </p>
        )}
      </Field>
      <Field name="firstName" component="input" validate={required}>
        {({ input, meta }) => (
          <>
            <p
              id="firstName"
              className="form-row form-row-first validate-required"
            >
              <label className="" htmlFor="firstName">
                First Name{" "}
                <abbr title="required" className="required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                placeholder=""
                id="firstName"
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
      <Field name="lastName" component="input" validate={required}>
        {({ input, meta }) => (
          <>
            <p
              id="lastName"
              className="form-row form-row-last validate-required"
            >
              <label className="" htmlFor="lastName">
                Last Name{" "}
                <abbr title="required" className="required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                placeholder=""
                id="lastName"
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
      <div className="clear"></div>
      <Field name="companyName" component="input">
        {({ input }) => (
          <p id="companyName" className="form-row form-row-wide">
            <label className="" htmlFor="companyName">
              Company Name
            </label>

            <input
              type="text"
              placeholder=""
              id="companyName"
              className="input-text "
              {...input}
            />
          </p>
        )}
      </Field>
    </>
  );
};

export default Civility;
