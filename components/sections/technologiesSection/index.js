import React from "react";

// Icons
import JavaScript from "../../../icons/javascript.png";
import TypeScript from "../../../icons/typescript.png";
import ReactJS from "../../../icons/react.png";
import NextJS from "../../../icons/next-js.png";
import GatsBy from "../../../icons/gatsby-js.png";
import Redux from "../../../icons/redux.png";
import Tailwind from "../../../icons/tailwind-css.jpg";
import StyledComponents from "../../../icons/styled-components.png";
import APIs from "../../../icons/api.png";
import Postman from "../../../icons/postman.png";
import NodeJs from "../../../icons/node-js.png";
import ExpressJs from "../../../icons/express.png";
import MongoDB from "../../../icons/mongo-db.png";
import Firebase from "../../../icons/firebase.png";
import Figma from "../../../icons/figma.png";

// Styles
import styles from "./styles.module.scss";
import Image from "next/image";

const TechnologiesSection = () => {
  const technologies = [
    {
      name: "JavaScript",
      Icon: JavaScript,
    },
    {
      name: "TypeScript",
      Icon: TypeScript,
    },
    {
      name: "React.Js",
      Icon: ReactJS,
    },
    {
      name: "Next.Js",
      Icon: NextJS,
    },
    {
      name: "Gatsby.Js",
      Icon: GatsBy,
    },
    {
      name: "Redux Toolkit",
      Icon: Redux,
    },
    {
      name: "Tailwind CSS",
      Icon: Tailwind,
    },
    {
      name: "Styled components",
      Icon: StyledComponents,
    },
    {
      name: "APIs",
      Icon: APIs,
    },
    {
      name: "Postman",
      Icon: Postman,
    },
    {
      name: "Node.Js",
      Icon: NodeJs,
    },
    {
      name: "Express.Js",
      Icon: ExpressJs,
    },
    {
      name: "MongoDB",
      Icon: MongoDB,
    },
    {
      name: "Firebase",
      Icon: Firebase,
    },
    {
      name: "Figma",
      Icon: Figma,
    },
  ];

  return (
    <section className={styles.technologies_section}>
      <h2 className={styles.section_title}>Tools which I love to use!</h2>
      <div className={styles.technologies_wrapper}>
        {technologies.map((technology) => (
          <div className={styles.technologyBox}>
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
