import React from 'react';
import PropTypes from "prop-types";
import graph from './../img/graph.png'

function Graph(props) {
  return ( 
  <React.Fragment>     
    <div class="graph">
      <img src={graph} width = "60px" alt="icon"/>
    </div>
    <div>
      <button class="outline" onClick={()=> props.onSwitchingViews('')}>
        Done
      </button>
    </div>
  </React.Fragment>
  )}

Graph.propTypes = {
  onSwitchingViews : PropTypes.func
}

export default Graph;
