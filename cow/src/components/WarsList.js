import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWarData } from "../actions";

class WarsList extends Component {
  componentDidMount() {
    console.log("component Mounted");
    this.props.fetchWarData();
  }
  render() {
    return (
      <div>
        <h1>inside WarsList</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wars: state.wars,
    fetchingData: state.fetchingData
  };
};

export default connect(
  mapStateToProps,
  { fetchWarData }
)(WarsList);
