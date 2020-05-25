/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react";

const Button = ({ variant = "primary", ...props }) => (
  <button
    {...props}
    sx={{
      appearance: "none",
      display: "inline-block",
      textAlign: "center",
      fontSize: ["sm", "md"],
      m: 0,
      px: 3,
      py: 2,
      border: 0,
      borderRadius: 3,
      variant: `buttons.${variant}`,
    }}
  />
);

export default Button;
