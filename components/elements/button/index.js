import React from "react";

// Styles
import styles from "./styles.module.scss";

const Button = ({ children, className = "", type = "light", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className} ${
        type === "dark" ? styles.darkBtn : styles.lightBtn
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
