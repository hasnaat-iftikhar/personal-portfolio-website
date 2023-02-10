import React from "react";

// Components
import Button from "../../../../../elements/button";

// Styles
import styles from "../../styles.module.scss";

const ProjectType = ({ setProjectType }) => {
  return (
    <div className={styles.projectType}>
      <Button
        variation="dark"
        className={styles.button}
        onClick={() => {
          setProjectType("Web application");
        }}
      >
        Website
      </Button>
      <Button
        variation="dark"
        className={styles.button}
        onClick={() => {
          setProjectType("Mobile application");
        }}
      >
        Mobile app
      </Button>
    </div>
  );
};

export default ProjectType;
