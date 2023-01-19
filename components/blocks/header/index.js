import React from "react";

// Components
import Button from "../../elements/button";

// Styles
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.h_flex}>
        <h3 className={styles.logo_text}>
          Hasnaat
          <span className={styles.highlightedDot}>.</span>
        </h3>

        <div className={styles.menuBox}>
          <Button>Get In Touch</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
