import React from 'react';
import PropTypes from "prop-types";
import graph from './../img/graph.png'

function Graph(props) {
  return ( 
  <React.Fragment>     
    <div class="graph" onClick={()=> props.onSwitchingViews('')}>
      <img src={graph} width = "60px" alt="icon"/>
      <button class="outline">
        Done
      </button>
    </div>
  </React.Fragment>
  )}

Graph.propTypes = {
  onSwitchingViews : PropTypes.func
}


export default Graph;