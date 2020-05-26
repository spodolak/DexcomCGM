import React from 'react';
import CurrentBloodSugar from './CurrentBloodSugar';
import Calibrate from './Calibrate';
import AddSymptom from './AddSymptom';
import Graph from './Graph';
import { Container } from 'react-bootstrap';

class AppControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      bearerToken: '',
      currentBloodSugar: 48,
      bloodSugarValues: null,
      currentView : null
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
    fetch("https://api.dexcom.com/v2/users/self/egvs?startDate=2020-05-24T00:00:00&endDate=2020-05-24T23:59:00", requestOptions)
    .then(response => response.json())
    .then((response) => {
      this.setState({bloodSugarValues: response.egvs});
      this.setState({currentBloodSugar: response.egvs[0].realtimeValue});
      }) 
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
  
  handleSwitchingViews = (view) => {
    this.setState({currentView : view});
  }

  handleCalibrate = (e) => {
    this.setState({ currentBloodSugar: e.target.value })
  }

  render() {
    let currentlyVisibleState = null;
    if ( this.state.bloodSugarValues != null) {
      switch(this.state.currentView) {
        case 'calibrate':
          currentlyVisibleState = <Calibrate onCalibrate = {this.handleCalibrate}onSwitchingViews = {this.handleSwitchingViews}/>
          break;
        case 'add_symptom':
          currentlyVisibleState = <AddSymptom onSwitchingViews = {this.handleSwitchingViews} />
          break;
        case 'graph':
          currentlyVisibleState = <Graph values = {this.state.bloodSugarValues} onSwitchingViews = {this.handleSwitchingViews}/>
          break;
        default: 
          currentlyVisibleState = <CurrentBloodSugar value = {this.state.currentBloodSugar} onSwitchingViews = {this.handleSwitchingViews} />
      }
    } else {
      currentlyVisibleState = <h2>Please log into dexcom!</h2>
    }   
    return (
      <React.Fragment>
        <Container fluid>
          {currentlyVisibleState}
          {/* <CurrentBloodSugar 
            value = {this.state.currentBloodSugar} 
            onSwitchingViews = {this.handleSwitchingViews} /> */}
        </Container>
      </React.Fragment>
    );
  }
}

export default AppControl;
