import React from 'react';
import PropTypes from "prop-types";

function ButtonGraph(props) {
  return ( 
  <React.Fragment>     
    <button class="outline">
    📈
    </button>
  </React.Fragment>
  )}

ButtonGraph.propTypes = {
  onClickingLogIn: PropTypes.func
}


export default ButtonGraph;