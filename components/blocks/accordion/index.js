import React, { useState } from "react";

// Icons
import RightArrowIcon from "../../../icons/arrow-right.svg";

// Styles
import styles from "./styles.module.scss";

const Accordion = ({ question, answer, className = "" }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${styles.accordion} ${className}`}>
      <div className={styles.header} onClick={() => setToggle(!toggle)}>
        <h4 className={styles.question}>{question}</h4>
        <div className={styles.arrowBox}>
          <RightArrowIcon
            width="100%"
            height="100%"
            className={toggle === true ? styles.rotatedArrow : ""}
          />
        </div>
      </div>
      {toggle === true && (
        <div className={`${styles.body}`}>
          <p className={styles.answer}>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
