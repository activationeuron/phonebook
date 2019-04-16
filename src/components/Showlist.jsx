import React, { Component } from "react";
import { connect } from "react-redux";
import { selectedNumber, deleteContact } from "../actions/index";

class Showlist extends Component {
  showList() {
    console.log("inside Show llist", this.props.numbers);
    if (this.props.numbers == 0) {
      return <div>Add Contact Please</div>;
    }

    return this.props.numbers.map(number => {
      return (
        <ul className="collection deta" key={number.id}>
          <li className="list-group-item ">{number.contact.name}</li>
          <li className="list-group-item">{number.contact.phone}</li>

          <div
            className="btn-group mt-2"
            role="group"
            aria-label="Basic example"
          >
            <button
              className="btn btn-primary"
              onClick={() => {
                this.props.selectedNumber(number);
              }}
            >
              detail
            </button>

            <button
              type="button"
              onClick={() => this.deleteNumber(number.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        </ul>
      );
    });
  }

  deleteNumber = id => {
    this.props.deleteContact(id);
  };

  render() {
    return <ul className="list-group">{this.showList()}</ul>;
  }
}
const mapStateToProps = state => {
  console.log(state);
  return { numbers: state.Contact };
};

export default connect(
  mapStateToProps,
  { selectedNumber, deleteContact }
)(Showlist);
