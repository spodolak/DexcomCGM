import React from 'react';
import PropTypes from "prop-types";

const clientId = process.env.REACT_APP_CLIENT_ID;

function Dexcom(props) {
  return ( 
  <React.Fragment>     
    <a
      className="App-link"
      href={'https://api.dexcom.com/v2/oauth2/login?client_id='+ clientId + '&redirect_uri=http://localhost:3000&response_type=code&scope=offline_access&state=auth'}
      target="_blank"
      rel="noopener noreferrer"
      onClick={()=> props.onClickingLogIn}
    >
      Log In
    </a>
  </React.Fragment>
  )}

Dexcom.propTypes = {
  onClickingLogIn: PropTypes.func
}


export default Dexcom;