import React from "react";

// Components
import Button from "../../elements/button";

// Styles
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3 className={styles.sectionTitle}>Let&apos;s meet!</h3>
        <p className={styles.subTitle}>
          Book a free 15-minute session where we will discuss your project, your
          issues and how to solve them.
        </p>
        <Button
          onClick={() => {
            window.open(
              "https://calendly.com/hasnaat-iftikhar/30min",
              "_blank"
            );
          }}
        >
          Book a free consultation
        </Button>
      </div>
      <div className={styles.credits}>
        <h3>
          Developed by{" "}
          <span
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/hasnaat-iftikhar/",
                "_blank"
              );
            }}
          >
            @Hasnaat Iftikhar
          </span>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
