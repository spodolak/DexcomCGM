import React from 'react';
import CurrentBloodSugar from './CurrentBloodSugar'

class AppControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      bearerToken: '',
      currentBloodSugar: null,
      bloodSugarValues: null
    };
  }

  getBearerToken = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("client_id", `${process.env.REACT_APP_CLIENT_ID}`);
    urlencoded.append("client_secret", `${process.env.REACT_APP_CLIENT_SECRET}`);
    urlencoded.append("code", `${window.location.search.slice(6, 38)}`);
    urlencoded.append("grant_type", "authorization_code");
    urlencoded.append("redirect_uri", "http://localhost:3000");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
    fetch("https://api.dexcom.com/v2/oauth2/token", requestOptions)
      .then(response => response.json())
      .then((response) => {
        this.setState({bearerToken: response.access_token});
        console.log("bearerToken", response);
        this.getBloodSugars(this.state.bearerToken); 
        })
      .then(() => { this.getBloodSugars(this.state.bearerToken); })
      .catch(error => console.log('error', error));
  }
  
  getBloodSugars = (token) => { 

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    fetch("https://api.dexcom.com/v2/users/self/egvs?startDate=2020-02-16T15:30:00&endDate=2020-02-17T15:45:00", requestOptions)
    .then(response => response.json())
    .then((response) => {
      this.setState({bloodSugarValues: response.egvs});
      this.setState({currentBloodSugar: response.egvs[200].realtimeValue});
      console.log("EGV", response.egvs)}) 
    .catch(error => console.log('error', error));
  }

  componentDidMount() {
    if (this.state.bearerToken === '')
    {
      this.getBearerToken();
    } else { 
      this.getBloodSugars(this.state.bearerToken);
    }
  }
    
  render() {

    let currentlyVisibleState = null 

    if ( this.state.bloodSugarValues != null) {
      currentlyVisibleState = <CurrentBloodSugar value = {this.state.currentBloodSugar} />;

    }
    
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default AppControl;
