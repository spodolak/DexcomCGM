import React from 'react';
import PropTypes from "prop-types";
import drop from './../img/drop.svg'

function Drop(props) {
  return ( 
  <React.Fragment>     
    <div class="drop">
      <img src={drop} width = "60px" alt="icon"/>
      <button class="outline">
        Done
      </button>
    </div>
  </React.Fragment>
  )}

Drop.propTypes = {
  onClickingLogIn: PropTypes.func
}


export default Drop;