import React from "react";

// Icons
import Wireframe from "../../../icons/icon-wireframe.png";

// Styles
import styles from "./styles.module.scss";
import Image from "next/image";

const TechnologiesSection = () => {
  const technologies = [
    {
      name: "Wireframe",
      Icon: Wireframe,
    },
    {
      name: "Wireframe",
      Icon: Wireframe,
    },
    {
      name: "Wireframe",
      Icon: Wireframe,
    },
    {
      name: "Wireframe",
      Icon: Wireframe,
    },
    {
      name: "Wireframe",
      Icon: Wireframe,
    },
    {
      name: "Wireframe",
      Icon: Wireframe,
    },
    {
      name: "Wireframe",
      Icon: Wireframe,
    },
    {
      name: "Wireframe",
      Icon: Wireframe,
    },
    {
      name: "Wireframe",
      Icon: Wireframe,
    },
    {
      name: "Wireframe",
      Icon: Wireframe,
    },
    {
      name: "Wireframe",
      Icon: Wireframe,
    },
    {
      name: "Wireframe",
      Icon: Wireframe,
    },
    {
      name: "Wireframe",
      Icon: Wireframe,
    },
    {
      name: "Wireframe",
      Icon: Wireframe,
    },
    {
      name: "Wireframe",
      Icon: Wireframe,
    },
  ];

  return (
    <section className={styles.technologies_section}>
      <h2 className={styles.section_title}>Tools which I love to use!</h2>
      <div className={styles.technologies_wrapper}>
        {technologies.map((technology) => (
          <div className={styles.technologyBox} key={technology.name}>
            <div className={styles.technology}>
              <Image
                src={technology.Icon}
                alt={technology.name}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
