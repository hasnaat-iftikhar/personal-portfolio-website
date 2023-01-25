import React from "react";
import Button from "../../../../../elements/button";
import InputField from "../../../../../elements/input";

// Styles
import styles from "../../styles.module.scss";

const ContactForm = () => {
  return (
    <div className={styles.contactForm}>
      <div className={styles.inputFieldsWrapper}>
        <InputField placeholder="Name" className={styles.inputFields} />
        <InputField
          placeholder="Name of your company"
          className={styles.inputFields}
        />
        <InputField placeholder="Email" className={styles.inputFields} />
        <InputField placeholder="Phone number" className={styles.inputFields} />
        <InputField
          placeholder="Message"
          className={styles.inputFields}
          type="textarea"
        />
      </div>
      <Button type="dark" className={styles.button}>
        SEND
      </Button>
    </div>
  );
};

export default ContactForm;
