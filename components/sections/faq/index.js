import React from "react";

// Components
import Accordion from "../../blocks/accordion";

// Data
import faqs from "../../../mocks/faqs";

// Styles
import styles from "./styles.module.scss";

const FaQSection = () => {
  return (
    <section className={styles.faq_section}>
      <div className={styles.container}>
        <h2 className={styles.section_title}>Frequently asked questions</h2>
        <div className={styles.all_faqs}>
          {faqs.map((data) => (
            <Accordion
              className={styles.each_faq}
              question={data.q}
              answer={data.a}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaQSection;
