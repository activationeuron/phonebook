import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedNumber } from "../actions/index";

class Showlist extends Component {
  showList() {
    console.log("inside Show llist", this.props.numbers);
    if (this.props.numbers == 0) {
      return <div>Add Contact Please</div>;
    }

    return this.props.numbers.map(number => {
      return (
        <ul className="collection deta" key={number.id}>
          <li className="collection-item ">{number.contact.name}</li>
          <li className="collection-item">{number.contact.phone}</li>
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
  return { numbers: state.Contact };
};

export default connect(
  mapStateToProps,
  { selectedNumber }
)(Showlist);
