import React, { useState } from "react";
import Button from "../../../../../elements/button";

// Components
import InputField from "../../../../../elements/input";

// Styles
import styles from "../../styles.module.scss";

const KeyDetails = ({ confirmUserRequirements }) => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.projectDetail}>
      <InputField
        type="textarea"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Tell me everything about your projects"
        name="Tell me everything"
      />
      <Button
        className={styles.nextBtn}
        type="dark"
        onClick={() => confirmUserRequirements(value)}
      >
        NEXT
      </Button>
    </div>
  );
};

export default KeyDetails;
