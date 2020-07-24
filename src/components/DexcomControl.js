import React from 'react';
import AppControl from './AppControl';
import Dexcom from './Dexcom';
import '../App.css';

class DexcomControl extends React.Component {

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

    if (window.location.search !== "") {     
      currentlyVisibleState = <AppControl onLogIn={this.handleDexcomLogin} />
    } else if (window.location.search === "") {
      let authorizationCode = window.location.search;
      currentlyVisibleState = 
      <Dexcom code={ authorizationCode } />
    } 
    
    return (
      <React.Fragment>
        <div>
            {currentlyVisibleState}
        </div>
      </React.Fragment>
    );
  }
}

export default DexcomControl;