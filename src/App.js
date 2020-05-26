import React from 'react';
import axios from "axios"
import { Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Cars from "./components/Cars";
import CarInfo from "./components/CarInfo";


const App = () => {
  const cars = useSelector(state => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get("https://marketcheck-prod.apigee.net/v2/search/car/active?api_key=zbEFHw60c4Xa6NvJ7XPYyYhrKor4j8EF&rows=10&start=0&facet_sort=count&country=US&state=Fl&city=Orlando&photo_links=true")
      .then(response => {
        //console.log(response.data);
        response.data.listings.forEach(listing => {
          dispatch({
            type: "ADD_CARS_DATA",
            payload: {
              additionalPrice: 0,
              car: {
                price: listing.price ? listing.price : "Price Available Upon Request",
                name: listing.heading,
                image: listing.media.photo_links[0],
                miles: listing.miles ? listing.miles : "Unavailable",
                type: listing.build.body_type,
                features: []
              },
              additionalFeatures: []
            }
          });
        });
        
      })
      .catch(err => console.log(err.message))
  }, [dispatch]);

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
