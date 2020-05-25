import React from 'react';
import { connect, useSelector } from "react-redux";

import AddedFeature from './AddedFeature';

import { removeFeature } from "../actions";

const AddedFeatures = props => {
  const features = useSelector(state => state[props.carIndex].car.features)
  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map((item, index) => (
            <AddedFeature key={item.id} feature = {item} index = {props.carIndex} /* removeFeature = {props.removeFeature} */ />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

/* const mapStateToProps = state => {
  return {
    car: state.car,
  }
}

export default connect(mapStateToProps, {removeFeature})(AddedFeatures); */

export default AddedFeatures;
