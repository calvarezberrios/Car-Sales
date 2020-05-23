import React, { useCallback} from 'react';
import { useSelector, useDispatch } from "react-redux";

const AddedFeature = props => {
  const dispatch = useDispatch();
  
  const removeFeature = useCallback(
    () => dispatch({ 
      type: "REMOVE_FEATURE", 
      payload: {
        index: props.index,
        feature: props.feature
      }
    }),
    [dispatch, props.feature, props.index]
  );

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" /* onClick = {() => props.removeFeature(props.feature)} */ onClick = {removeFeature}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
