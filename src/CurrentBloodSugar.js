import React from 'react';
import Orb from './Orb';

/////////Get Authorization Code/////////
const authorizationCode = window.location.search.slice(6, 38);
let accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlR3eThiT1B4MGRvU1JoRk9WbGRnQlh0SkpiVSIsImtpZCI6IlR3eThiT1B4MGRvU1JoRk9WbGRnQlh0SkpiVSJ9.eyJpc3MiOiJodHRwczovL3VhbTEuZGV4Y29tLmNvbS9pZGVudGl0eSIsImF1ZCI6Imh0dHBzOi8vdWFtMS5kZXhjb20uY29tL2lkZW50aXR5L3Jlc291cmNlcyIsImV4cCI6MTU4OTQ0MjE2MiwibmJmIjoxNTg5NDM0OTYyLCJjbGllbnRfaWQiOiJJOEZXWmY3RE9QT2REaWkzRWx2MlhkNlUwQnJUUGZmbiIsInNjb3BlIjpbIm9mZmxpbmVfYWNjZXNzIiwiZWd2IiwiY2FsaWJyYXRpb24iLCJkZXZpY2UiLCJzdGF0aXN0aWNzIiwiZXZlbnQiXSwic3ViIjoiYzYxMTY4YzctMzdmZi00OGE2LWE0NGEtMzlkZjcxZGIyOWZjIiwiYXV0aF90aW1lIjoxNTg5NDM0OTYxLCJpZHAiOiJpZHNydiIsImp0aSI6IjY1OTkyNjUxM2E2ODJmODYzMWJlMjdlNWI0NDBjZDk2IiwiYW1yIjpbInBhc3N3b3JkIl19.QZhpa3PwEW9KsMyMwbIBdZN8A-q9FcBhYdOmFFh5lPhztzRTODpKL-yKaPZkHUKRZf1_8kTESFsVfHnVo3nrZ18d74eEDvwqVSDnqVDaL5rVoLardaJrFSUyCK8J5BAeXuSEYhpgLtkbN4nQtC2XPPeDgVv01JjVFQVJ8V4y6A-71mbZcYW9kUwUF2r2v0UBwADX4ScgdC8H9BwG8dsli1xJAhysDEAXI6vCvo-7Xo7DfsggNIhQbLvs9Fw-XwwCpKS8y1GzqFSinNRbuTfwLB4QYJoL45gUJwfc91LHAk7h2TG05eHCZolqBQDv328drwCy5epIfC_BTGA3uXkH_A';
let result = 115;


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



///////Pass Bearer Token///////
///////Get EGVS Values/////////
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${accessToken}`);////Token printed to console, copy/paste here. Needs storage solution.

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.dexcom.com/v2/users/self/egvs?startDate=2020-02-16T15:30:00&endDate=2020-02-17T15:45:00", requestOptions)
  .then(response => response.json())
  // .then(result => console.log(result.egvs[0].realtimeValue))////Displays first BS value within date range
  .then((response) => {
    console.log("EGV", response.egvs[0].realtimeValue);
  }) ////Displays first BS object within date range
  .catch(error => console.log('error', error));



class CurrentBloodSugar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      currentBloodSugar: 175
    };
  }

  render() {
  return ( 
  <React.Fragment>     
    <Orb />
    <p class="egvs">{this.state.currentBloodSugar}</p>
  </React.Fragment>
  )}
}

export default CurrentBloodSugar;
