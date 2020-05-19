import React from 'react';
import PropTypes from "prop-types";
import icon from './../img/mood.png'

function AddSymptom(props) {
  return ( 
  <React.Fragment>     
    <div class="icon" >
      <img src={icon} width = "60px" alt="icon"/>
    </div>
    <div>
      <button class="outline" onClick={()=> props.onSwitchingViews('')}>
        Done
      </button>
    </div>
  </React.Fragment>
  )}

AddSymptom.propTypes = {
  onSwitchingViews : PropTypes.func
}


export default AddSymptom;