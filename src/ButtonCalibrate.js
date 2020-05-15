import React from 'react';
import PropTypes from "prop-types";

function ButtonCalibrate(props) {
  return ( 
  <React.Fragment>     
    <button class="outline">
      💧
    </button>
  </React.Fragment>
  )}

ButtonCalibrate.propTypes = {
  onClickingLogIn: PropTypes.func
}


export default ButtonCalibrate;