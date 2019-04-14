import React, { Component } from "react";
import Showlist from "./components/Showlist.jsx";
import NumberDetail from "./components/NumberDetail";
import AddContact from "./components/AddContact";
class App extends Component {
  render() {
    return (
      <div className="App container ">
        <div className="row">
          <div className="col s4 pull-s0">
            <Showlist />
          </div>
          <div className="col s4 push-s0">
            <NumberDetail />
          </div>
          <div className="col s4 push-s0">
            <AddContact />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
