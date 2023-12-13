import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { Grid } from '@material-ui/core';
import logo from '../img/app_logo_invert.png'
import FootNavigation from './AppFooter.js';
import '../App.css';

const clientId = process.env.REACT_APP_CLIENT_ID;
const host = process.env.REACT_APP_HOST;
const apiEnvironment = process.env.REACT_APP_DEXCOM_API_ENVIRONMENT;


function Dexcom(props) {
    return (
        <React.Fragment>
            <Grid container className="app-logo-fade-in" >
                <Grid item xs={12}>
                    <img className="app-logo-overlay" src={logo} alt="icon" width="300px" height="300px" />
                    <div className="app-logo"/>
                </Grid>
                <Grid item xs={12}>
                    <h4>Your child's diabetic mood ring</h4><br></br>
                </Grid>
                <Grid item xs={12}>
                    <a
                        className="App-link"
                        href={'https://' + apiEnvironment + '/v2/oauth2/login?client_id=' + clientId + '&redirect_uri=' + host + '&response_type=code&scope=offline_access&state=auth'}
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