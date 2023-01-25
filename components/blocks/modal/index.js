import React from "react";

// Icons
import CrossIcon from "../../../icons/cross.svg";

// Styles
import styles from "./styles.module.scss";

const Modal = ({ title, children, onClose }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onClose} />
      <div className={styles.modal}>
        <div className={styles.crossBtn} onClick={onClose}>
          <CrossIcon />
        </div>
        <div className={styles.container}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.modalBody}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
