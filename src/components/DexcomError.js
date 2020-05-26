import React from 'react';

const clientId = process.env.REACT_APP_CLIENT_ID;

function DexcomError(props) {
  return ( 
  <React.Fragment> 
    <h2>Please log into dexcom!</h2>
    <a
    className="App-link"
    href={'https://api.dexcom.com/v2/oauth2/login?client_id='+ clientId + '&redirect_uri=http://localhost:3000&response_type=code&scope=offline_access&state=auth'}
    target="_blank"
    rel="noopener noreferrer"
    onClick={()=> props.onClickingLogIn}
    >
    <button className="outline">
    Log In
    </button>
    </a>
  </React.Fragment>
  )}

export default DexcomError;