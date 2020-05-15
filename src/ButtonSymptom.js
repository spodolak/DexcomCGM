import React from 'react';
import PropTypes from "prop-types";

function ButtonSymptom(props) {
  return ( 
  <React.Fragment>     
    <button class="outline">
    🙂
    </button>
  </React.Fragment>
  )}

ButtonSymptom.propTypes = {
  onClickingLogIn: PropTypes.func
}


export default ButtonSymptom;