import React from "react";

// Styles
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h4 className={styles.contactInfo}>
          Contact Info: <span>+92 301 4717189</span>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
