import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import CarCard from "./CarCard";

const Cars = ({cars}) => {
    const [ searchString, setSearchString] = React.useState("");
    const dispatch = useDispatch();
    //console.log(cars);

    const handleSearch = e => {
        setSearchString(e.target.value);
        dispatch({
            type: "SEARCH_FILTER",
            payload: e.target.value
        })
        
    }

    return (
        <div className = "carsPageContent">
            <div className = "cars-top-container">
                <h2>Cars</h2>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="text" value = {searchString} onChange = {handleSearch} placeholder="Search Cars" />
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