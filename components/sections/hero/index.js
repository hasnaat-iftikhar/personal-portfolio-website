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
          FullStack Developer & Elevating my skills in the cloud!
        </h5>
        <h1 className={styles.hero_title}>
          Love to build optimized and insane applications on press of keyboard
        </h1>
        <Button>Let's build project together</Button>
      </div>
    </section>
  );
};

export default HeroSection;
