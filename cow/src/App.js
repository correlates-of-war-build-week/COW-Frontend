import React from "react";

import { Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
// import PrivateRedo from "./components/PrivateRedo";
import Login from "./components/Login";
import MapContainer from "./components/MapContainer";

import "./App.css";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <h1 className="header">CORRELATES OF WAR</h1>
      <Route path="/login" component={Login} />
      <Route path="/register" component={SignUp} />
      {/* <Route path="/" component={SignUp} /> */}

      {/* <PrivateRoute exact path="/" component={PrivateRedo} /> */}
      <PrivateRoute exact path="/correlates_of_war" component={MapContainer} />
    </div>
  );
}

export default App;
