import React from "react";

// Components
import Button from "../../elements/button";

// Styles
import styles from "./styles.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.content_container}>
        <h5 className={styles.hero_tagline}>
          Your seciality with info of your interest
        </h5>
        <h1 className={styles.hero_title}>Main title of your website</h1>
        <Button>Start your journey</Button>
      </div>
    </section>
  );
};

export default HeroSection;
