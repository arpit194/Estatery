import React from "react";
import classes from "./Button.module.css";

const Button = ({ type, padding, children }) => {
  return (
    <div className={classes[type]} style={{ padding: padding }}>
      {children}
    </div>
  );
};

export default Button;
