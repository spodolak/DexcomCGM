import React from 'react';
import PropTypes from "prop-types";
import Footer from './Footer';
import { Grid } from '@material-ui/core';
import logo from './../img/app_logo_invert.png'

const clientId = process.env.REACT_APP_CLIENT_ID;

function Dexcom(props) {
    return (
        <React.Fragment>
            <Grid container >
                <Grid item xs={12}>
                    <div className="App-logo">
                        <img src={logo} width = "275px" alt="icon"/> 
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <br></br><h4>Your child's diabetic mood ring</h4><br></br>
                </Grid>
                <Grid item xs={12}>
                    <a
                        className="App-link"
                        href={'https://sandbox-api.dexcom.com/v2/oauth2/login?client_id=' + clientId + '&redirect_uri=http://localhost:3000&response_type=code&scope=offline_access&state=auth'}
                        // href={'https://api.dexcom.com/v2/oauth2/login?client_id='+ clientId + '&redirect_uri=http://localhost:3000&response_type=code&scope=offline_access&state=auth'}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => props.onClickingLogIn}
                    >
                    <button className="outline">Log In</button>
                    </a>
                </Grid>
                {/* <Grid item xs={12}>
                    <Footer />    
                </Grid> */}
            </Grid>
        </React.Fragment>
    )
}

Dexcom.propTypes = {
    onClickingLogIn: PropTypes.func
}


export default Dexcom;