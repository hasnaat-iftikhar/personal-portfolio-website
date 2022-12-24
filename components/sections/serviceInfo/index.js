import React from "react";

// Styles
import styles from "./styles.module.scss";

const MyServiceInfo = () => {
  return (
    <section className={styles.serviceInfo_wrapper}>
      <div className={styles.serviceInfo_contantcontainer}>
        <div className={styles.content_titleBox}>
          <div className={styles.yellow_bar} />
          <h2 className={styles.myService_title}>You need a website</h2>
        </div>
        <div className={styles.content_titleBox}>
          <h2 className={styles.myService_title}>
            You need a high-performing website
          </h2>
        </div>
        <div className={styles.myService_descriptionBox}>
          <p className={styles.myService_description}>
            This word will make the difference between a simple visit on your
            website.
          </p>
          <p className={styles.myService_description}>
            Web developer and Mobile application developer, I help you by
            building killer website and mobile application from scratch and will
            help you to keep your website up to date by applying changes
            according to your needs time to time!
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyServiceInfo;
