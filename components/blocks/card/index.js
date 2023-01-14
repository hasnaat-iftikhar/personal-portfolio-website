import Image from "next/image";
import React from "react";

// Styles
import styles from "./styles.module.scss";

const Card = ({ title, description, image, url }) => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.imageBox}>
        <Image src={image} alt={title} width={412} height={265} />
      </div>
      <div className={styles.content_box}>
        <h3 className={styles.content_title}>{title}</h3>
        <p className={styles.content_description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;
