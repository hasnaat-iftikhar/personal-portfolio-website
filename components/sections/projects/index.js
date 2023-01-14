import React from "react";

// Data
import { projects } from "../../../mocks/projects";

// Icons
import Navigate from "../../../icons/navigate.svg";

// Styles
import styles from "./styles.module.scss";

const ProjectsSection = () => {
  return (
    <section className={styles.projects_section}>
      <div className={styles.projects_wrapper}>
        {projects?.map((project, index) => (
          <div className={styles.each_project} key={index}>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className={styles.backdrop}
            >
              <Navigate />
            </a>

            <img
              src={project.image}
              alt={project.name}
              className={styles.project_image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
