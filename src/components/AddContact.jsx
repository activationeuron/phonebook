import React, { Component } from "react";
import { connect } from "react-redux";
import { AddContactRed } from "../actions/index";
import { bindActionCreators } from "redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      address: ""
    };
  }

  addRemi() {
    console.log("this.state", this.state);
    console.log(this.props);
    this.props.AddContactRed(this.state);
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>

            <input
              className="form-control"
              placeholder="Name"
              onChange={event => this.setState({ name: event.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Phone</label>

            <input
              className="form-control"
              placeholder="Phone"
              onChange={event => this.setState({ phone: event.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>

            <input
              className="form-control"
              placeholder="email"
              onChange={event => this.setState({ email: event.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Address</label>

            <input
              className="form-control"
              placeholder="address"
              onChange={event => this.setState({ address: event.target.value })}
            />
          </div>
        </div>
        <button className="btn btn-success" onClick={() => this.addRemi()}>
          Add Contact
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ AddContactRed }, dispatch);
};

const mapStateToProps = state => {
  console.log("state", state);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
