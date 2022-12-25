import React from "react";

// Components
import Card from "../../blocks/card";

// Data
import { latestProjects } from "../../../mocks/projects";

// Styles
import styles from "./styles.module.scss";

const LatestProjectsSection = () => {
  return (
    <section className={styles.latestProjects_section}>
      <div className={styles.container}>
        <h2 className={styles.section_title}>Latest projects</h2>
        <div className={styles.projects_wrapper}>
          {latestProjects.map(
            ({ name, mini_description, image, url }, index) => (
              <Card
                key={index}
                title={name}
                description={mini_description}
                image={image}
                url={url}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestProjectsSection;
