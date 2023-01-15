import React from "react";

// Styles
import styles from "./styles.module.scss";

const Card = ({ title, description, image, url }) => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.imageBox}>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className={styles.content_box}>
        <h3 className={styles.content_title}>{title}</h3>
        <p className={styles.content_description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
