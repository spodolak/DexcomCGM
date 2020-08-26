import React from 'react';

function Orb(props) {
    const { alertState } = props
    console.log(alertState);
    return (
        <React.Fragment>
            <div className={alertState}>
            </div>
        </React.Fragment>
    )
}


export default Orb;