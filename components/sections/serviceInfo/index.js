import React from "react";

// Styles
import styles from "./styles.module.scss";

const MyServiceInfo = () => {
  return (
    <section className={styles.serviceInfo_wrapper}>
      <div className={styles.serviceInfo_contantcontainer}>
        <div className={styles.content_titleBox}>
          <div className={styles.yellow_bar} />
          <h2 className={styles.myService_title}>Your first statement</h2>
        </div>
        <div className={styles.content_titleBox}>
          <h2 className={styles.myService_title}>
            Here is your second statement
          </h2>
        </div>
        <div className={styles.myService_descriptionBox}>
          <p className={styles.myService_description}>
            Lorem Ipsum has been the industry&apos;s standard dummy text
          </p>
          <p className={styles.myService_description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyServiceInfo;
