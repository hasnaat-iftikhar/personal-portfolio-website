import React from "react";

// Styles
import styles from "./styles.module.scss";

const Accordion = ({ question, answer, className }) => {
  return (
    <div className={`${styles.accordion} ${className}`}>
      <div className={styles.header}>
        <h4 className={styles.question}>{question}</h4>
      </div>
      <div className={styles.body}>
        <p className={styles.answer}>{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
