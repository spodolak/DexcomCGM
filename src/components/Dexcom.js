import React from 'react';
import PropTypes from "prop-types";

const clientId = process.env.REACT_APP_CLIENT_ID;

function Dexcom(props) {
    return (
        <React.Fragment>
            <div >
                <h1>Welcome!</h1>
                <h3>Your child's diabetic mood ring</h3><br></br>
                <a
                    className="App-link"
                    href={'https://sandbox-api.dexcom.com/v2/oauth2/login?client_id=' + clientId + '&redirect_uri=http://localhost:3000&response_type=code&scope=offline_access&state=auth'}
                    // href={'https://api.dexcom.com/v2/oauth2/login?client_id='+ clientId + '&redirect_uri=http://localhost:3000&response_type=code&scope=offline_access&state=auth'}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => props.onClickingLogIn}
                >
                    <button className="outline">
                        Log In
        </button>
                </a>
            </div>
        </React.Fragment>
    )
}

Dexcom.propTypes = {
    onClickingLogIn: PropTypes.func
}


export default Dexcom;