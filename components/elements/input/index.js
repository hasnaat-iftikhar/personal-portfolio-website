import React from "react";

// Styles
import styles from "./styles.module.scss";

const InputField = ({ className = "", type = "input", ...restProps }) => {
  if (type === "textarea") {
    return (
      <textarea
        autoComplete="off"
        className={`${styles.inputField} ${styles.textareaField} ${className}`}
        {...restProps}
      ></textarea>
    );
  } else if (type === "input") {
    return (
      <input
        autoComplete="off"
        type="text"
        className={`${styles.inputField} ${className}`}
        {...restProps}
      />
    );
  }
};

export default InputField;
