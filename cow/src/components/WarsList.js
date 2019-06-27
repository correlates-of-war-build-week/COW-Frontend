import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWarData } from "../actions";

class WarsList extends Component {
  render() {
    return (
      <div>
        <h3 className="subheader">Conflict Prediction Model</h3>
      </div>
    );
  }
  componentDidMount() {
    console.log("component Mounted");
    this.props.fetchWarData();
  }

  //   handleChanges = e => {
  //       e.preventDefault();
  //       this.setState({
  //           [e.target.name]: e.target.value
  //       });
  //   }
  //   addCountry = e => {
  //       e.preventDefault();
  //       const newCountry = {

  //       }
  //   }
}

const mapStateToProps = state => {
  return {
    data: state.mapData,
    fetchingData: state.fetchingData,
    popupCountry: state.clickedCountry
  };
};

export default connect(
  mapStateToProps,
  { fetchWarData }
)(WarsList);
