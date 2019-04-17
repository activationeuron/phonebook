import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
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

const Contacts = (contacts = [], action) => {
  if (action.type === "ADD_CONTACT") {
    return [...contacts, { contact: action.payload, id: Math.random() }];
  }
  return contacts;
};

export default combineReducers({
  Contact: Contacts,
  numbers: phonenumber,
  selectednumber: selectedNumber,
  form: formReducer
});
