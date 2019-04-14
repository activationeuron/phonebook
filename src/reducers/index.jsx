import { combineReducers } from "redux";
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

export default combineReducers({
  numbers: phonenumber,
  selectednumber: selectedNumber
});
