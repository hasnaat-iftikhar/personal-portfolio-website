import React, { useState } from "react";
import Button from "../../../../../elements/button";
import InputField from "../../../../../elements/input";

// Styles
import styles from "../../styles.module.scss";

const ContactForm = ({ contactFormFields }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    const finalFields = {
      name,
      email,
      company,
      number,
      message,
    };

    contactFormFields(finalFields);
  };

  return (
    <div className={styles.contactForm}>
      <div className={styles.inputFieldsWrapper}>
        <InputField
          placeholder="Name"
          className={styles.inputFields}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <InputField
          placeholder="Name of your company"
          className={styles.inputFields}
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />
        <InputField
          placeholder="Email"
          className={styles.inputFields}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <InputField
          placeholder="Phone number"
          className={styles.inputFields}
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <InputField
          placeholder="Message"
          className={styles.inputFields}
          type="textarea"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>
      <Button type="dark" className={styles.button} onClick={() => onSubmit()}>
        SEND
      </Button>
    </div>
  );
};

export default ContactForm;
