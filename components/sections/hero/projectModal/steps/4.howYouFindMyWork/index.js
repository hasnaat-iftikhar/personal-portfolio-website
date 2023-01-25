import React from "react";

// Components
import Button from "../../../../../elements/button";

// Styles
import styles from "../../styles.module.scss";

const HowYouFindMyWork = ({ finalAnswer }) => {
  return (
    <div className={styles.howYouFindMyWork}>
      <Button
        type="dark"
        className={styles.button}
        onClick={() => {
          finalAnswer("Google search");
        }}
      >
        Google search
      </Button>
      <Button
        type="dark"
        className={styles.button}
        onClick={() => {
          finalAnswer("Word of mouth");
        }}
      >
        Word of mouth
      </Button>
      <Button
        type="dark"
        className={styles.button}
        onClick={() => {
          finalAnswer("One of my old projects");
        }}
      >
        One of my old projects
      </Button>
      <Button
        type="dark"
        className={styles.button}
        onClick={() => {
          finalAnswer("Social network");
        }}
      >
        Social network
      </Button>
      <Button
        type="dark"
        className={styles.button}
        onClick={() => {
          finalAnswer("Other");
        }}
      >
        Other
      </Button>
    </div>
  );
};

export default HowYouFindMyWork;
