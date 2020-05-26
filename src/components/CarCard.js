import React from 'react';
import { Link } from "react-router-dom";
import { formatter } from "../reducers";

const CarCard = ({ carState, index }) => {
    return (
        <Link to = {`/cars/${index}`} className = "card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={carState.car.image} alt={carState.car.name} />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <p className="title is-4">{carState.car.name}</p>
                            <p className="subtitle is-6">{carState.car.type} | {carState.car.miles} miles</p>
                            <p className="subtitle is-4">{!isNaN(carState.car.price) ? `${formatter.format(carState.car.price + carState.additionalPrice)}` : carState.car.price}</p>
                        </div>
                        <div className="media-content">
                            
                        </div>
                    </div>

                    {/* <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br />
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div> */}
                </div>
        </Link>
    );
};

export default CarCard;