import React from 'react';

function Orb(props) {
    const { alertState } = props
    return (
        <React.Fragment>
            <div className={alertState}>
            </div>
        </React.Fragment>
    )
}


export default Orb;