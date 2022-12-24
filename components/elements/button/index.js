import React from "react";

// Styles
import styles from "./styles.module.scss";

const Button = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
