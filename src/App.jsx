import React, { Component } from "react";
import Showlist from "./components/Showlist.jsx";
import NumberDetail from "./components/NumberDetail";

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
          <div className="col s4 push-s0">123</div>
        </div>
      </div>
    );
  }
}

export default App;
