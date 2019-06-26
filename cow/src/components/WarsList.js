import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWarData } from "../actions";
import War from "./War";

class WarsList extends Component {
  componentDidMount() {
    console.log("component Mounted");
    this.props.fetchWarData();
  }
  render() {
    return (
      <div>
        <h1>inside WarsList</h1>
        {this.props.data.map(war => {
          console.log("war .map", war);
          return <War war={war} key={war.id} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("WarsList Map2props state", state);
  return {
    data: state.mapData,
    fetchingData: state.fetchingData
  };
};

export default connect(
  mapStateToProps,
  { fetchWarData }
)(WarsList);
