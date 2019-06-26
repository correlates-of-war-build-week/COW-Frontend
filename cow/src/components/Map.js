import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import war from "../data/war.json";

// change into class
// take out useState and change to state
// state =

//CREATE AN AXIOSWITHOUTAUTH, remove const token, remove headers

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 45,
    longitude: 45,
    width: "100vw",
    height: "100vh",
    zoom: 10
  });
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
      />
      {/* {war.country.map} */}
    </div>
  );
};

export default Map;
