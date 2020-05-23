import React from 'react';

import Header from './Header';
import AddedFeatures from './AddedFeatures';
import AdditionalFeatures from './AdditionalFeatures';
import Total from './Total';

const CarInfo = ({match}) => {
    return (
        <div className="boxes">
            <div className="box">
                <Header carIndex = {match.params.carIndex} />
                <AddedFeatures carIndex = {match.params.carIndex} />
            </div>
            <div className="box">
                <AdditionalFeatures carIndex = {match.params.carIndex} />
                <Total carIndex = {match.params.carIndex} />
            </div>
        </div>
    );
};

export default CarInfo;