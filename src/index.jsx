import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducers/index";
import { Provider } from "react-redux";
import { createStore } from "redux";

import addContact from "./components/AddContact";

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
