import React from 'react';

var data = `client_secret=${process.env.REACT_APP_CLIENT_SECRET}&client_id=${process.env.REACT_APP_CLIENT_ID}&code=${process.env.REACT_APP_CODE}&grant_type=authorization_code&redirect_uri=http://localhost:3000`;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.dexcom.com/v2/oauth2/token");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);

class CurrentBloodSugar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      currentBloodSugar: [134]
    };
  }

  render() {
  return ( 
  <React.Fragment>     
    <p>Current Blood Sugar: {this.state.currentBloodSugar}</p>
  </React.Fragment>
  )}
}

export default CurrentBloodSugar;
