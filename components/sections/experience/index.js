import React from "react";

// Data
import MyWholeExperience from "../../../mocks/experience";
import qna from "../../../mocks/qna";

// Components
import Experience from "../../blocks/experience";

// Styles
import styles from "./styles.module.scss";

const ExperienceSection = () => {
  return (
    <section className={styles.experience_section}>
      <div className={styles.container}>
        <h2 className={styles.section_title}>Want to know my experience?</h2>
        <div className={styles.experience_with_qna}>
          <div className={styles.my_experience}>
            {MyWholeExperience.map((e) => (
              <Experience
                key={e.company_name}
                company_logo={e.company_logo}
                job_role={e.job_role}
                company_name={e.company_name}
                start_date={e.start_date}
                end_date={e.end_date}
                job_description={e.job_description}
                job_responsibilities={e.job_responsibilities}
              />
            ))}
          </div>
          <div className={styles.my_qna}>
            {qna.map((qa, index) => (
              <div className={styles.qna_box} key={index}>
                <p className={styles.q}>{qa.question}</p>
                <p className={styles.a}>{qa.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
