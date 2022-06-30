import React from "react";
import { Field } from "react-final-form";

const Notes = () => {
  return (
    <div>
      {" "}
      <Field component="textarea" name="order_comments">
        {({ input }) => (
          <p id="order_comments_field" className="form-row notes">
            <label className="" htmlFor="order_comments">
              Order Notes
            </label>
            <textarea
              // cols="5"
              // rows="2"
              placeholder="Notes about your order, e.g. special notes for delivery."
              id="order_comments"
              className="input-text "
              {...input}
            ></textarea>
          </p>
        )}
      </Field>
    </div>
  );
};

export default Notes;
