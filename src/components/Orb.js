import React from 'react';

function Orb(props) {
const {egv, lowLimit, highLimit} = props
    if (egv <= lowLimit) {
        return (
            <React.Fragment>
                <div className="orb-low"></div>
            </React.Fragment>
        )
    } else if (egv >= highLimit) {
        return (
            <React.Fragment>
                <div className="orb-high"></div>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <div className="orb">        
                </div>
            </React.Fragment>
        )
    }
}

export default Orb;