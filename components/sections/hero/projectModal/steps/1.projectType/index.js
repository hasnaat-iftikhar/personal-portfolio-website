import React, { useReducer } from "react";

// Components
import Button from "../../../../../elements/button";

// Styles
import styles from "../../styles.module.scss";

const ProjectType = ({ setProjectType }) => {
  return (
    <div className={styles.projectType}>
      <Button
        type="dark"
        className={styles.button}
        onClick={() => {
          setProjectType("Website");
        }}
      >
        Website
      </Button>
      <Button
        type="dark"
        className={styles.button}
        onClick={() => {
          setProjectType("Mobile app");
        }}
      >
        Mobile app
      </Button>
    </div>
  );
};

export default ProjectType;
