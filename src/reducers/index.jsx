import { combineReducers } from "redux";
import { reducer } from "redux-form";
const phonenumber = () => {
  return [
    {
      id: 1,
      name: "Amit rai",
      num: "7303032970",
      email: "aforamitrai@gmail.com",
      address: "mumbai"
    },
    {
      id: 2,
      name: "Michel joey",
      num: "80221223434",
      email: "micheljoey@gmail.com",
      address: "neywork"
    },
    {
      id: 3,
      name: "Rachel",
      num: "011189233423",
      email: "rachel@gmail.com",
      address: "amitra"
    }
  ];
};

const selectedNumber = (selectedNumber = null, actions) => {
  if (actions.type === "SELECTED_NUMBER") {
    return actions.payload;
  }
  return selectedNumber;
};

const addContact = (contacts = [], action) => {
  if (action.type === "ADD_CONTACT") {
    return [...contacts, action.payload];
  }
  return contacts;
};

export default combineReducers({
  addContact: addContact,
  numbers: phonenumber,
  selectednumber: selectedNumber,
  form: reducer
});
