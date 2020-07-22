import React from 'react';
import AppControl from './AppControl';
import Dexcom from './Dexcom';

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
      currentlyVisibleState = <AppControl />
    } else if (window.location.search === "") {
      let authorizationCode = window.location.search;
      currentlyVisibleState = 
      <Dexcom onClickingLogIn = {this.handleDexcomLogin} code = { authorizationCode } />
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