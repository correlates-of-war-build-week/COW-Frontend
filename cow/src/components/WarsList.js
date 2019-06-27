import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWarData } from "../actions";
import War from "./War";
import * as countries from "../data/war.json";

class WarsList extends Component {
  render() {
    // const countries = this.popupCountry();
    return (
      //   console.log("Test", this.props.data),
      <div>
        <h1>inside WarsList</h1>
        {this.props.data.map(war => {
          //   console.log("war .map", war);
          return <War war={war} key={war.id} />;
        })}
      </div>
    );
  }
  componentDidMount() {
    console.log("component Mounted");
    this.props.fetchWarData();
  }

  //   popupCountry = () => {
  //     this.props.countries.filter(country => {
  //       return country.props.data.ccode === countries.default.ccode;
  //     });
  //   };

  // popupCountry = (ccode) => {
  //     this.props.countries.filter(country => {
  //         return ccode === countries.default.ccode;
  //     });
  // };

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
  //   console.log("WarsList Map2props state", state);
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
