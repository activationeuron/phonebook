import React from "react";
import { connect } from "react-redux";

const NumberDetail = ({ number }) => {
  if (!number) {
    return <div>Select Number to see detail</div>;
  }
  return (
    <div>
      <div className="collection">
        <div className="collection-item">{number.contact.name}</div>
        <div className="collection-item">{number.contact.phone}</div>
        <div className="collection-item">{number.contact.email}</div>
        <div className="collection-item">{number.contact.address}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { number: state.selectednumber };
};
export default connect(mapStateToProps)(NumberDetail);
