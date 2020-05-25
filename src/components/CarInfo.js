import React from 'react';
import { useSelector } from "react-redux";
import { formatter } from "../reducers";

import Header from './Header';
import AddedFeatures from './AddedFeatures';
import AdditionalFeatures from './AdditionalFeatures';
import Total from './Total';

const CarInfo = ({match}) => {
    const car = useSelector(state => state[match.params.carIndex].car)
    
    console.log(match.params.carIndex)

    return (

        <div className = "car-landing-page">
            <div className = "carHeader">
                <div className = "leftSide">
                    <h2 className = "title is-4">{car.name}</h2>
                    <h3 className = "subtitle is-6">type | miles</h3>
                </div>
                <div className = "rightSide">
                    <h2 className = "title is-3">{formatter.format(car.price)}</h2>
                    <button className = "button is-info">Purchase</button>
                </div>
            </div>
            
            <img src = {car.image} alt = {car.name} />

        </div>

        
    );
};

export default CarInfo;


// Original Page
        {/* <div className="boxes">
            <div className="box">
                <Header carIndex = {match.params.carIndex} />
                <AddedFeatures carIndex = {match.params.carIndex} />
            </div>
            <div className="box">
                <AdditionalFeatures carIndex = {match.params.carIndex} />
                <Total carIndex = {match.params.carIndex} />
            </div>
        </div> */}