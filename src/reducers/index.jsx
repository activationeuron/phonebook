import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

const selectedNumber = (selectedNumber = null, actions) => {
  if (actions.type === "SELECTED_NUMBER") {
    return actions.payload;
  }
  return selectedNumber;
};

const Contacts = (contacts = [], action) => {
  if (action.type === "ADD_CONTACT") {
    return [...contacts, { contact: action.payload, id: Math.random() }];
  }
  if (action.type === "DELETE_CONTACT") {
    return contacts.filter(contact => contact.id !== action.payload);
  }

  return contacts;
};

export default combineReducers({
  Contact: Contacts,
  selectednumber: selectedNumber,
  form: formReducer
});
