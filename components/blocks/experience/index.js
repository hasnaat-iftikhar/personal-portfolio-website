import Image from "next/image";
import React from "react";

// Styles
import styles from "./styles.module.scss";

const Experience = ({
  company_logo,
  job_role,
  company_name,
  start_date,
  end_date,
  job_description,
  job_responsibilities,
}) => {
  return (
    <div className={styles.experience}>
      <div className={styles.exp_header}>
        <div className={styles.company_logo}>
          <Image
            src={company_logo}
            alt={company_name}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className={styles.company_info}>
          <h3 className={styles.job_role}>{job_role}</h3>
          <h3 className={styles.company_name}>{company_name}</h3>
          <h3 className={styles.job_duration}>
            {start_date} - {end_date}
          </h3>
        </div>
      </div>
      <div className={styles.exp_body}>
        <p className={styles.job_description}>{job_description}</p>
        <h4 className={styles.responsibilities_heading}>
          Work & Responsibilities
        </h4>
        <div className={styles.all_responsibilities}>
          {job_responsibilities.map((r, index) => (
            <p className={styles.each_responsibility} key={index}>
              {r}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
