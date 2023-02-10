import React from "react";

// Styles
import styles from "./styles.module.scss";

const Button = ({
  children,
  className = "",
  type = "button",
  variation = "light",
  onClick,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${className} ${
        variation === "dark" ? styles.darkBtn : styles.lightBtn
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
