import React from 'react';
import { useSelector } from "react-redux";
import { formatter } from "../reducers";
import { Link } from "react-router-dom";

import AddedFeatures from './AddedFeatures';
import AdditionalFeatures from './AdditionalFeatures';

const CarInfo = ({match}) => {
    const carState = useSelector(state => state[match.params.carIndex])
    const [tabSelected, setTabSelected] = React.useState("features");

    React.useEffect(() => {
            window.addEventListener('scroll', function() {
                var element = document.querySelector('#carHeader');
                var position = element && element.getBoundingClientRect();
                var image = document.querySelector("#image");
            
        
                    if(position && position.top <= 0 && element) {
                        element.style.position = "fixed";
                        element.style.top = "0";
                        element.style.background = "white";
                        element.style.width = "100%";
                        image.style.marginTop = "81px";
                    }
            
                    if(image && image.getBoundingClientRect().top > 81) {
                        element.style.position = "relative";
                        image.style.marginTop = "0";
                    }
                
            });
    }, [])
    
    

    const changeTab = e => {
        //e.preventDefault();
        setTabSelected(e.target.textContent.toLowerCase());
        document.querySelector("li.is-active").classList.remove("is-active");
        e.target.parentElement.classList.add("is-active");
    }

    return (

        <div className = "car-landing-page">
            <Link to = "/cars" className = "button is-white">{"< Back to Car Search"}</Link>
            <div id = "carHeader" className = "carHeader">
                <div className = "leftSide">
                    <h2 className = "title is-4">{carState.car.name}</h2>
                    <h3 className = "subtitle is-6">{carState.car.type} | {carState.car.miles} miles</h3>
                </div>
                <div className = "rightSide">
                    <h2 className = "title is-3">{!isNaN(carState.car.price) ? formatter.format(carState.car.price + carState.additionalPrice) : carState.car.price}</h2>
                    <button className = "button is-info">Purchase</button>
                </div>
            </div>

            <img id = "image" src = {carState.car.image} alt = {carState.car.name} />

            <div className = "tabs is-centered">
                <ul>
                    <li className = "is-active"><a href = "#features" onClick = {changeTab}>Features</a></li>
                    <li><a href = "#features" onClick = {changeTab}>Feature Store</a></li>
                </ul>
            </div>

            <div id = "features">    
                {tabSelected === "features" ? <AddedFeatures carIndex = {match.params.carIndex} /> : <AdditionalFeatures carIndex = {match.params.carIndex} />}
            </div>
            
        </div>

        
    );
};

export default CarInfo;


// Original Page
        /* <div className="boxes">
            <div className="box">
                <Header carIndex = {match.params.carIndex} />
                <AddedFeatures carIndex = {match.params.carIndex} />
            </div>
            <div className="box">
                <AdditionalFeatures carIndex = {match.params.carIndex} />
                <Total carIndex = {match.params.carIndex} />
            </div>
        </div> */