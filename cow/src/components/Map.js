import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import { Marker, Popup } from "react-map-gl";
import * as countries from "../data/war.json";
import tank from "../icon/tank.svg";

import { connect } from "react-redux";
import { fetchWarData } from "../actions";

const Map = props => {
  console.log("first props", props);
  const [viewport, setViewport] = useState({
    latitude: 53,
    longitude: -106,
    width: "100vw",
    height: "100vh",
    zoom: 3
  });

  const [selectedCountry, setSelectedCountry] = useState(null);

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
        {props.data.map((country, i) => {
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
                  <img className="img-btn" src={tank} alt="tank" />
                </button>
              </Marker>
            );
          }
          return;
        })}
        {selectedCountry ? (
          <Popup
            // className="card"
            latitude={selectedCountry.latitude}
            longitude={selectedCountry.longitude}
            onClose={() => {
              setSelectedCountry(null);
            }}
          >
            <div>
              <h1>{selectedCountry.stateabb}</h1>
              <h1>{selectedCountry.stateName}</h1>
              <h1>{selectedCountry.ccode}</h1>
              <h1>{selectedCountry.pred_proba}</h1>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};

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
)(Map);
