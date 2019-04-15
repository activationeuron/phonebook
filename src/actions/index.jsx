export const selectedNumber = number => {
  return {
    type: "SELECTED_NUMBER",
    payload: number
  };
};

export const addContactRed = contact => {
  return {
    type: "ADD_CONTACT",
    payload: contact
  };
};
