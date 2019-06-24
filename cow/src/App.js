import React from "react";
import { Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import PrivateRedo from "./components/PrivateRedo";
import Login from "./components/Login";
import MapContainer from "./components/MapContainer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>howdy</h1>
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/" component={PrivateRedo} />
      <PrivateRoute path="/correlates_of_war" component={MapContainer} />
    </div>
  );
}

export default App;
