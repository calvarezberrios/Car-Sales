import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CarCard from "./CarCard";

const Cars = ({cars}) => {
    return (
        <div className = "carsPageContent">
            <div className = "cars-top-container">
                <h2>Cars</h2>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="text" placeholder="Search Cars" />
                    <span className="icon is-small is-left">
                        <FontAwesomeIcon icon = "search" />
                    </span>
                </div>
            </div>

            <div className = "cars-list-container">
                {cars.map((carState, index) => <CarCard key = {index} index = {index} carState = {carState} />)}
            </div>
        </div>
    );
};

export default Cars;