import React from "react";

import "./custom-button.style.scss";

const CustomButton = ({
  children,
  inverted,
  isGoogleSignin,
  ...otherProps
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignin ? "google-sign-in" : ""
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
