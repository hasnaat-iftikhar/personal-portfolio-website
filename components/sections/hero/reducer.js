export const PROJECT_ACTION_TYPES = {
  STEP: "STEP",
  PROJECT_TYPE: "PROJECT_TYPE",
  PROJECT_DETAILS: "PROJECT_DETAILS",
  PROJECT_DURATION: "PROJECT_DURATION",
  FINAL_ANSWER: "FINAL_ANSWER",
  CONTACT_FORM_FIELDS: "CONTACT_FORM_FIELDS",
};

export const project_initialValues = {
  step: 1,
  projectType: "",
  projectDetails: "",
  projectDuration: "",
  finalAnswer: "",
  contactFormFields: "",
};

export const project_reducer = (state, { type, payload }) => {
  switch (type) {
    case PROJECT_ACTION_TYPES.PROJECT_TYPE:
      return { ...state, projectType: payload };

    case PROJECT_ACTION_TYPES.STEP:
      return { ...state, step: payload };

    case PROJECT_ACTION_TYPES.PROJECT_DETAILS:
      return { ...state, projectDetails: payload };

    case PROJECT_ACTION_TYPES.PROJECT_DURATION:
      return { ...state, projectDuration: payload };

    case PROJECT_ACTION_TYPES.FINAL_ANSWER:
      return { ...state, finalAnswer: payload };

    case PROJECT_ACTION_TYPES.CONTACT_FORM_FIELDS:
      return { ...state, contactFormFields: payload };

    default:
      return state;
  }
};
