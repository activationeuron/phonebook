import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedNumber } from "../actions/index";

class Showlist extends Component {
  showList() {
    return this.props.numbers.map(number => {
      return (
        <ul className="collection deta" key={number.id}>
          <li className="collection-item ">{number.name}</li>
          <li className="collection-item">{number.num}</li>
          <div>
            <button
              className="waves-effect waves-light btn-large"
              onClick={() => {
                this.props.selectedNumber(number);
              }}
            >
              Details
            </button>
          </div>
        </ul>
      );
    });
  }

  render() {
    return <div>{this.showList()}</div>;
  }
}
const mapStateToProps = state => {
  console.log(state);
  return { numbers: state.numbers };
};

export default connect(
  mapStateToProps,
  { selectedNumber }
)(Showlist);
