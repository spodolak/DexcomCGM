import React from 'react';

function Orb(props) {
  if ( props.egv < 70) {
    return ( 
      <React.Fragment>     
        <div className="orb-low"></div>
      </React.Fragment>
    )
  } else if ( props.egv > 200 ) {
    return ( 
      <React.Fragment>     
        <div className="orb-high"></div>
      </React.Fragment>
    )
  } else {
    return ( 
      <React.Fragment>     
        <div className="orb"></div>
      </React.Fragment>
    )
  }
}

export default Orb;