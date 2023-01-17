import React from "react";

// Components
import Button from "../../elements/button";

// Styles
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3 className={styles.sectionTitle}>Let's meet!</h3>
        <p className={styles.subTitle}>
          Book a free 15-minute session where we will discuss your project, your
          issues and how to solve them.
        </p>
        <Button>Book a free consultation</Button>
      </div>
    </footer>
  );
};

export default Footer;
