import React from "react";
import { Field } from "react-final-form";

const OtherCivility = () => {
  const required = (value: string) =>
    value ? undefined : "This field is required.";

  return (
    <>
      <Field name="otherCivility" component="select" validate={required}>
        {({ input, meta }) => (
          <p
            id="otherCivility"
            className="form-row form-row-wide address-field update_totals_on_change validate-required woocommerce-validated"
          >
            <label className="" htmlFor="otherCivility">
              Civility{" "}
              <abbr title="required" className="required">
                *
              </abbr>
            </label>
            <select
              className="country_to_state country_select"
              id="otherCivility"
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
      <Field name="otherFirstName" component="input" validate={required}>
        {({ input, meta }) => (
          <>
            <p
              id="otherFirstName"
              className="form-row form-row-first validate-required"
            >
              <label className="" htmlFor="otherFirstName">
                First Name{" "}
                <abbr title="required" className="required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                placeholder=""
                id="otherFirstName"
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
      <Field name="otherLastName" component="input" validate={required}>
        {({ input, meta }) => (
          <>
            <p
              id="otherLastName"
              className="form-row form-row-last validate-required"
            >
              <label className="" htmlFor="otherLastName">
                Last Name{" "}
                <abbr title="required" className="required">
                  *
                </abbr>
              </label>
              <input
                type="text"
                placeholder=""
                id="otherLastName"
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
      <Field name="otherCompanyName" component="input">
        {({ input }) => (
          <p id="otherCompanyName" className="form-row form-row-wide">
            <label className="" htmlFor="otherCompanyName">
              Company Name
            </label>

            <input
              type="text"
              placeholder=""
              id="otherCompanyName"
              className="input-text "
              {...input}
            />
          </p>
        )}
      </Field>
    </>
  );
};

export default OtherCivility;
