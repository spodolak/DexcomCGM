import React from 'react';
import PropTypes from "prop-types";
import { Grid } from '@material-ui/core';
import logo from './../img/app_logo_invert.png'
import FootNavigation from './AppFooter.js';
import '../App.css';

const clientId = process.env.REACT_APP_CLIENT_ID;

function Dexcom(props) {
    return (
        <React.Fragment>
            <Grid container className="app-logo-fade-in" >
                <Grid item xs={12}>
                    <img className="app-logo-overlay" src={logo} alt="icon" width="300px" height="300px" />
                    <div className="app-logo">
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <h4>Your child's diabetic mood ring</h4><br></br>
                </Grid>
                <Grid item xs={12}>
                    <a
                        className="App-link"
                        href={'https://sandbox-api.dexcom.com/v2/oauth2/login?client_id=' + clientId + '&redirect_uri=https://spodolak.github.io/DexcomCGM&response_type=code&scope=offline_access&state=auth'}
                        // href={'https://api.dexcom.com/v2/oauth2/login?client_id='+ clientId + '&redirect_uri=http://localhost:3000&response_type=code&scope=offline_access&state=auth'}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => props.onClickingLogIn}
                    >
                        <button className="outline">Log In</button>
                    </a>
                </Grid>
            </Grid>
            <FootNavigation isLoggedIn={false} />
        </React.Fragment>
    )
}

Dexcom.propTypes = {
    onClickingLogIn: PropTypes.func
}


export default Dexcom;