import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import { Marker, Popup } from "react-map-gl";
import * as countries from "../data/war.json";
import tank from "../icon/tank.svg";
import WarsList from "./WarsList";
import { connect } from "react-redux";
import { fetchWarData } from "../actions";
import War from "./War";

// import 'font-awesome/css/font-awesome.min.css';
// import tank from "../icon/tank.svg"

// change into class
// take out useState and change to state
// state =

//CREATE AN AXIOSWITHOUTAUTH, remove const token, remove headers
// class MAp extends Component {
const Map = props => {
  console.log("first props", props);
  //   console.log("Hey look at me!", countries);
  const [viewport, setViewport] = useState({
    latitude: 45,
    longitude: 45,
    width: "100vw",
    height: "100vh",
    zoom: 5
  });

  const [selectedCountry, setSelectedCountry] = useState(null);

  //   const clickedCountry = [];

  const popupCountry = ccode => {
    countries.default.filter(country => {
      return ccode === country.ccode;
    });
  };

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedCountry(null);
      }
    };
    window.addEventListener("click", listener);

    return () => {
      window.removeEventListener("click", listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        // mapboxApiAccessToken={process.env.REACT_APP_MAP_TOKEN}
        mapboxApiAccessToken={
          "pk.eyJ1IjoicmVlZHRqIiwiYSI6ImNqeGM3aHR6NzAwaHUzeW52MnhlNzhhNmcifQ.Wd9r5mNmWaQAuG5vZsUIyg"
        }
        mapStyle="mapbox://styles/reedtj/cjxca3nb401eh1clrr1hry2r7"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {console.log("heres the props yo", props.data)}
        {/* {countries.default.map((country, i) => { */}
        {props.data.map((country, i) => {
          console.log("Country inside .map", country);
          //   console.log("heres the lat!", country.latitude);
          if (country.latitude || country.longitude) {
            return (
              <Marker
                key={country.id}
                longitude={country.longitude}
                latitude={country.latitude}
              >
                <button
                  className="marker-btn"
                  onClick={e => {
                    setSelectedCountry(country);
                    popupCountry(country.ccode);
                  }}
                >
                  {/* <img className="img-btn" src="../icon/tank.svg" alt="tank" /> */}
                  <img className="img-btn" src={tank} alt="tank" />
                </button>
              </Marker>
            );
          }
          //   else {

          //     console.log(`bad coordinates at ${i}`);
          //   }
        })}
        {selectedCountry ? (
          <Popup
            latitude={selectedCountry.latitude}
            longitude={selectedCountry.longitude}
            onClose={() => {
              setSelectedCountry(null);
            }}
          >
            <div>
              {/* <h1>hello</h1> */}
              {/* if(countries.default.ccode) */}
              {/* <War />
              <WarsList /> */}
              {/* <h1>{selectedCountry.props.data.stateabb}</h1> */}
              <h1>{selectedCountry.stateabb}</h1>
              <h1>{selectedCountry.StateName}</h1>
              <h1>{selectedCountry.ccode}</h1>
              <h1>{selectedCountry.pred_proba}</h1>
              {console.log(selectedCountry)}
              <h1>hello</h1>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};

const mapStateToProps = state => {
  console.log("WarsList Map2props state", state);
  return {
    data: state.mapData,
    fetchingData: state.fetchingData,
    popupCountry: state.clickedCountry
  };
};

export default connect(
  mapStateToProps,
  { fetchWarData }
)(Map);

// export default Map;
