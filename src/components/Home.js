import React from 'react';
import { Link } from "react-router-dom";

const Home = ({cars}) => {
    return (
        <div>
            {cars.map((carState, index) => <Link to = {`/${index}`}>{carState.car.name}</Link>)}
        </div>
    );
};

export default Home;