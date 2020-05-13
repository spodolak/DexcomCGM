import React from 'react';

/////////Get Authorization Code/////////
const authorizationCode = window.location.search.slice(6, 38);
let accessToken = '';


/////////Get Bearer Token//////////
var data = `client_secret=${process.env.REACT_APP_CLIENT_SECRET}&client_id=${process.env.REACT_APP_CLIENT_ID}&code=${authorizationCode}&grant_type=authorization_code&redirect_uri=http://localhost:3000`;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    ///Displays bearer token in console to copy/paste into GET EGVS route below
    accessToken = JSON.parse(this.responseText).access_token;
    console.log(accessToken);
  }
});

let code = 'cfed801e12a8b446d438570c7558d28c'
xhr.open("POST", "https://api.dexcom.com/v2/oauth2/token");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);



///////Pass Bearer Token//////////
///////Get Blood Sugar Values////
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer {insert token here}");////Token printed to console, copy/paste here. Needs storage solution.

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.dexcom.com/v2/users/self/egvs?startDate=2020-02-16T15:30:00&endDate=2020-02-17T15:45:00", requestOptions)
  .then(response => response.json())
  // .then(result => console.log(result.egvs[0].realtimeValue))////Displays first BS value within date range
  .then(result => console.log(result.egvs[0])) ////Displays first BS object within date range
  .catch(error => console.log('error', error));



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
