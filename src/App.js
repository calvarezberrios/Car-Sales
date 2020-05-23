import React from 'react';
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CarInfo from "./components/CarInfo";

const App = () => {
  const cars = useSelector(state => state);
  return (
    <>
      <Route exact path = "/">
        {cars.map((carState, index) => <Link to = {`/${index}`}>{carState.car.name}</Link>)}
      </Route>

      <Route path = "/:carIndex" component = {CarInfo} />
    </>
  );
};

export default App;
