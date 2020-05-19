import React from 'react';
import PropTypes from "prop-types";
import icon from './../img/mood.png'

function AddSymptom(props) {
  return ( 
  <React.Fragment>     
    <div class="icon" onClick={()=> props.onSwitchingViews('')}>
      <img src={icon} width = "60px" alt="icon"/>
      <button class="outline">
        Done
      </button>
    </div>
  </React.Fragment>
  )}

AddSymptom.propTypes = {
  onSwitchingViews : PropTypes.func
}


export default AddSymptom;