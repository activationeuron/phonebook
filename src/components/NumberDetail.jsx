import React from "react";
import { connect } from "react-redux";

const NumberDetail = ({ number }) => {
  if (!number) {
    return <div>Select Number to see detail</div>;
  }
  return (
    <div>
      <div className="collection">
        <div className="collection-item">{number.name}</div>
        <div className="collection-item">{number.num}</div>
        <div className="collection-item">{number.email}</div>
        <div className="collection-item">{number.address}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { number: state.selectednumber };
};
export default connect(mapStateToProps)(NumberDetail);
