import React from 'react';
import PropTypes from "prop-types";
import icon from './../img/mood.png'
import drop from './../img/drop.svg'
import graph from './../img/graph.png'

function CircleIconButton(props) {
  return ( 
  <React.Fragment> 
    <button class="round">
      <img src={drop} width = "60px" alt="icon"/>
    </button>
    <button class="round">
      <img src={icon} width = "90px" alt="icon"/>
    </button>

    <button class="round">
      <img src={graph} width = "60px" alt="icon"/>
    </button>
  </React.Fragment>
  )}

CircleIconButton.propTypes = {
  onClickingLogIn: PropTypes.func
}


export default CircleIconButton;