import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className = "homeContainer">
            <div id = "hero">
                <div className = "heroContent">
                    <h2 className = "subtitle is-3">Cars4Sale</h2>
                    <h1 className = "title is-1">Get On The Road Today</h1>
                    <Link to = "/cars" className = "button is-white">Search All Vehicles</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;