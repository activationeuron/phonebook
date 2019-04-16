export const selectedNumber = number => {
  return {
    type: "SELECTED_NUMBER",
    payload: number
  };
};

export const AddContactRed = contact => {
  return {
    type: "ADD_CONTACT",
    payload: contact
  };
};

export const deleteContact = id => {
  return {
    type: "DELETE_CONTACT",
    payload: id
  };
};
