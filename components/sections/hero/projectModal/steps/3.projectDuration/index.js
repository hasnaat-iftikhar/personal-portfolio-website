import React from "react";

// Components
import Button from "../../../../../elements/button";

// Styles
import styles from "../../styles.module.scss";

const ProjectDuration = ({ selectedProjectDuration }) => {
  return (
    <div className={styles.projectDuration}>
      <Button
        type="dark"
        className={styles.button}
        onClick={() => {
          selectedProjectDuration("As soon as possible");
        }}
      >
        As soon as possible
      </Button>
      <Button
        type="dark"
        className={styles.button}
        onClick={() => {
          selectedProjectDuration("In the next 2 months");
        }}
      >
        In the next 2 months
      </Button>
      <Button
        type="dark"
        className={styles.button}
        onClick={() => {
          selectedProjectDuration("Within 6 months");
        }}
      >
        Within 6 months
      </Button>
      <Button
        type="dark"
        className={styles.button}
        onClick={() => {
          selectedProjectDuration("There's no rush");
        }}
      >
        There&apos;s no rush
      </Button>
    </div>
  );
};

export default ProjectDuration;
