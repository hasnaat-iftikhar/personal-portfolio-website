import React, { useReducer, useState } from "react";

// Components
import Modal from "../../../blocks/modal";

// Steps
import ProjectType from "./steps/1.projectType";
import KeyDetails from "./steps/2.keyDetails";
import ProjectDuration from "./steps/3.projectDuration";
import HowYouFindMyWork from "./steps/4.howYouFindMyWork";
import ContactForm from "./steps/5.contactForm";

// Store
import {
  PROJECT_ACTION_TYPES,
  project_initialValues,
  project_reducer,
} from "../reducer";

const ProjectModal = ({ onClose }) => {
  const [state, dispatch] = useReducer(project_reducer, project_initialValues);
  const { step, projectType, projectDetails, projectDuration, finalAnswer } =
    state;

  const [modalTitle, setMTodalitle] = useState("What do you need?");

  const confirmUserRequirements = (userRequirement) => {
    dispatch({
      type: PROJECT_ACTION_TYPES.PROJECT_DETAILS,
      payload: userRequirement,
    });
    nextStep();
    setMTodalitle("When do you need it?");
  };

  const setProjectType = (project) => {
    dispatch({
      type: PROJECT_ACTION_TYPES.PROJECT_TYPE,
      payload: project,
    });
    nextStep();
    setMTodalitle("What are the goals you aspire to acheive?");
  };

  const selectedProjectDuration = (duration) => {
    dispatch({
      type: PROJECT_ACTION_TYPES.PROJECT_DURATION,
      payload: duration,
    });
    nextStep();
    setMTodalitle("How did you learn about my work?");
  };

  const howFindMyWork = (answer) => {
    dispatch({
      type: PROJECT_ACTION_TYPES.FINAL_ANSWER,
      payload: answer,
    });
    nextStep();
    setMTodalitle(
      "Finally, please fill in your details so that I can get back to you as soon as possible."
    );
  };

  const contactFormFields = async ({
    name,
    email,
    company,
    number,
    message,
  }) => {
    resetAllFields();
  };

  const nextStep = () => {
    dispatch({
      type: PROJECT_ACTION_TYPES.STEP,
      payload: step + 1,
    });
  };

  const resetAllFields = () => {
    dispatch({
      type: PROJECT_ACTION_TYPES.PROJECT_TYPE,
      payload: "",
    });
    dispatch({
      type: PROJECT_ACTION_TYPES.PROJECT_DETAILS,
      payload: "",
    });
    dispatch({
      type: PROJECT_ACTION_TYPES.PROJECT_DURATION,
      payload: "",
    });
    dispatch({
      type: PROJECT_ACTION_TYPES.FINAL_ANSWER,
      payload: "",
    });
    dispatch({
      type: PROJECT_ACTION_TYPES.CONTACT_FORM_FIELDS,
      payload: "",
    });
    setTimeout(() => {
      return onClose();
    }, 500);
  };

  const stepToRender = (step) => {
    if (step === 1) {
      return <ProjectType setProjectType={setProjectType} />;
    } else if (step === 2) {
      return <KeyDetails confirmUserRequirements={confirmUserRequirements} />;
    } else if (step === 3) {
      return (
        <ProjectDuration selectedProjectDuration={selectedProjectDuration} />
      );
    } else if (step === 4) {
      return <HowYouFindMyWork finalAnswer={howFindMyWork} />;
    }
    {
      return <ContactForm contactFormFields={contactFormFields} />;
    }
  };

  return (
    <Modal title={modalTitle} onClose={resetAllFields}>
      {stepToRender(step)}
    </Modal>
  );
};

export default ProjectModal;
