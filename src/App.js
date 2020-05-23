import React from 'react';
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./components/Home";
import CarInfo from "./components/CarInfo";

const App = () => {
  const cars = useSelector(state => state);
  return (
    <>
      <Route exact path = "/">
        <Home cars = {cars} />
      </Route>

      <Route path = "/:carIndex" component = {CarInfo} />
    </>
  );
};

export default App;
