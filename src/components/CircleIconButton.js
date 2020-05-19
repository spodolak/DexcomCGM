import React from 'react';
import PropTypes from "prop-types";
import icon from './../img/mood.png'
import drop from './../img/drop.svg'
import graph from './../img/graph.png'

function CircleIconButton(props) {
  return ( 
  <React.Fragment> 
    <button class="round" onClick={()=> props.onSwitchingViews('calibrate')}>
      <img src={drop} width = "60px" alt="icon"/>
    </button>
    <button class="round" onClick={()=> props.onSwitchingViews('add_symptom')}>
      <img src={icon} width = "90px" alt="icon"/>
    </button>

    <button class="round" onClick={()=> props.onSwitchingViews('graph')}>
      <img src={graph} width = "60px" alt="icon"/>
    </button>
  </React.Fragment>
  )}

CircleIconButton.propTypes = {
  onSwitchingViews : PropTypes.func
}


export default CircleIconButton;