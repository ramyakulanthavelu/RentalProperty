import React from "react";

function property__validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.address) {
    errors.address = "Required";
  }
  if (!values.contact) {
    errors.contact = "Required";
  } else if (!/^[0-9]$/i.test(values.email)) {
    errors.contact = "Numbers Only";
  } else if (!values.contact.length ===10) {
    errors.contact = "Enter Valid Contact";
  }
  if (!values.price) {
    errors.price = "Required";
  }

  return errors;
}

export default property__validate;
