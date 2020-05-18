import React from 'react';
import CurrentBloodSugar from './components/CurrentBloodSugar';
import Dexcom from './components/Dexcom';

class AppControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dexcomLoggedIn: false
    };
  }

  handleDexcomLogin = () => {
    this.setState({dexcomLoggedIn: true});
  }

  render(){
    let currentlyVisibleState = null;

    if (window.location.search != "") {     
      currentlyVisibleState = <CurrentBloodSugar  />
    } else if (window.location.search === "") {
      let authorizationCode = window.location.search;
      currentlyVisibleState = 
      <Dexcom onClickingLogIn = {this.handleDexcomLogin} code = { authorizationCode } />
    } 
    
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default AppControl;