import React from 'react';
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Cars from "./components/Cars";
import CarInfo from "./components/CarInfo";

const App = () => {
  const cars = useSelector(state => state);
  
  return (
    <div className = "appContainer">
      <NavBar />

      <Route exact path = "/">
        <Home />
      </Route>

      <Route exact path = "/cars">
        <Cars cars = {cars} />
      </Route>

      <Route path = "/cars/:carIndex" component = {CarInfo} />
    </div>
  );
};

export default App;
