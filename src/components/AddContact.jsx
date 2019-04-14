import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
class AddContact extends Component {
  inputView({ input }) {
    return (
      <div className="field">
        <label>{input.name}</label>
        <input {...input} />
      </div>
    );
  }
  onSubmit(formValue) {
    console.log(formValue);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="name" component={this.inputView} />

        <Field name="num" component={this.inputView} />

        <Field name="email" component={this.inputView} />

        <Field name="address" component={this.inputView} />

        <button>Sumbit</button>
      </form>
    );
  }
}

// const validate = formValue => {
//   const error = {};
//   if (!formValue.title) {
//     error.title = "You must enter the title";
//   }
//   if (!formValue.num) {
//     error.num = "You must enter the number";
//   }
//   if (!formValue.email) {
//     error.email = "You must enter the email";
//   }

//   if (!formValue.address) {
//     error.address = "You must enter the address";
//   }

//   return error;
// };
export default reduxForm({
  form: "Addcontact"
  // validate: validate
})(AddContact);
