import React from 'react';
import CurrentBloodSugar from './CurrentBloodSugar';
import Calibrate from './Calibrate';
import AddHighSymptom from './AddHighSymptom';
import AddLowSymptom from './AddLowSymptom';
import AddSymptom from './AddSymptom';
import DexcomError from './DexcomError';
import Graph from './Graph';
import FootNavigation from './AppFooter.js';

class AppControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            bearerToken: '',
            currentBloodSugar: null,
            lowAlert: 70,
            highAlert: 180,
            currentAlert: 'noAlert', //'lowAlert or 'highAlert'
            bloodSugarValues: null,
            currentView: null,
            timer: null
        };
    }

    //////Oauth 2.0 authorization
    //Step 1: Get bearere Token
    getBearerToken = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("client_id", `${process.env.REACT_APP_CLIENT_ID}`);
        urlencoded.append("client_secret", `${process.env.REACT_APP_CLIENT_SECRET}`);
        urlencoded.append("code", `${window.location.search.slice(6, 38)}`);
        urlencoded.append("grant_type", "authorization_code");
        urlencoded.append("redirect_uri", "http://localhost:3000");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        fetch("https://sandbox-api.dexcom.com/v2/oauth2/token", requestOptions) //Fetch sandbox dev token
            // fetch("https://api.dexcom.com/v2/oauth2/token", requestOptions) //Fetch dexcom user data
            .then(response => response.json())
            .then((response) => {
                this.setState({ bearerToken: response.access_token });
                this.getBloodSugars(this.state.bearerToken);
            })
            .then(() => { this.getBloodSugars(this.state.bearerToken); })
            .catch(error => console.log('error', error));
    }

    //get current time to fetch up-to-date blood sugars
    getTime = () => {
        function addZero(n) {
            if (n < 10) {
                return "0" + n;
            }
            return n.toString();
        }

        let time = new Date();
        let hours = addZero(time.getHours());
        let minutes = addZero(time.getMinutes());
        let seconds = addZero(time.getSeconds());

        return hours + ":" + minutes + ":" + seconds;
    }

    //Step 2: Get current blood sugars with bearer token
    getBloodSugars = (token) => {
        let currentTime = this.getTime();

        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(`https://sandbox-api.dexcom.com/v2/users/self/egvs?startDate=2020-05-25T${currentTime}&endDate=2020-05-26T${currentTime}`, requestOptions) //Fetch sandbox dev data
            // fetch("https://api.dexcom.com/v2/users/self/egvs?startDate=2020-05-26T00:00:00&endDate=2020-05-26T23:59:00", requestOptions) //Fetch dexcom user data
            .then(response => response.json())
            .then((response) => {
                this.setState({ bloodSugarValues: response.egvs });
                this.setState({ currentBloodSugar: response.egvs[0].realtimeValue });
                this.handleAlert();
            })
            .catch(error => console.log('error', error));
    }


    componentDidMount() {
        if (this.state.bearerToken === '') {
            this.getBearerToken();
        } else {
            this.getBloodSugars(this.state.bearerToken);
        }
        setInterval(() => {
            this.getBloodSugars(this.state.bearerToken);
            this.handleAlert();
        }, 60000);
    }

    handleAlert = () => {
        if (this.state.currentBloodSugar <= this.state.lowAlert) {
            this.setState({ currentView: 'add_low_symptom', currentAlert: 'lowAlert' })
        } else if (this.state.currentBloodSugar >= this.state.highAlert) {
            this.setState({ currentView: 'add_high_symptom', currentAlert: 'highAlert' })
        } else {
            this.setState({ currentAlert: 'noAlert' })
        }
    }

    handleSwitchingViews = (view) => {
        this.setState({ currentView: view });
    }

    handleCalibrate = (e) => {
        this.setState({ currentBloodSugar: parseInt(e.target.value) })
    }

    render() {
        let currentlyVisibleState = null;
        if (this.state.bloodSugarValues != null) {
            switch (this.state.currentView) {
                case 'calibrate':
                    currentlyVisibleState = <Calibrate onCalibrate={this.handleCalibrate} onSwitchingViews={this.handleSwitchingViews} alertCheck={this.handleAlert} />
                    break;
                case 'add_symptom':
                    currentlyVisibleState = <AddSymptom onSwitchingViews={this.handleSwitchingViews} />
                    break;
                case 'add_low_symptom':
                    currentlyVisibleState = <AddLowSymptom onSwitchingViews={this.handleSwitchingViews} />
                    break;
                case 'add_high_symptom':
                    currentlyVisibleState = <AddHighSymptom onSwitchingViews={this.handleSwitchingViews} />
                    break;
                case 'graph':
                    currentlyVisibleState = <Graph values={this.state.bloodSugarValues} onSwitchingViews={this.handleSwitchingViews} />
                    break;
                case 'home':
                    currentlyVisibleState = <CurrentBloodSugar value={this.state.currentBloodSugar} currentAlert={this.state.currentAlert} onSwitchingViews={this.handleSwitchingViews} />
                    break;
                default:
                    currentlyVisibleState = <CurrentBloodSugar value={this.state.currentBloodSugar} currentAlert={this.state.currentAlert} onSwitchingViews={this.handleSwitchingViews} />
            }
        } else {
            currentlyVisibleState = <DexcomError />

        }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <FootNavigation isLoggedIn={true} onSwitchingViews={this.handleSwitchingViews} currentAlert={this.state.currentAlert} />
            </React.Fragment>
        );
    }
}

export default AppControl;
