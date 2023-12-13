import React, { useEffect, useState } from 'react';
import CurrentBloodSugar from './CurrentBloodSugar.js';
import Calibrate from './Calibrate.js';
import AddHighSymptom from './AddHighSymptom.js';
import AddLowSymptom from './AddLowSymptom.js';
import AddSymptom from './AddSymptom.js';
import DexcomError from './DexcomError.js';
import Graph from './Graph.js';
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

    authorizeDexcomUser = () => {
            let code = window.location.search.slice(6, 38);
            fetch('/authorizeDexcomUser?code='+ code).then(
                response => response.json()
            ).then(
                data => {
                    this.setState({bloodSugarValues: data.egvs});
                    this.setState({currentBloodSugar: data.egvs[287].value});
                    console.log(data)
                }
            ) 
    }

    componentDidMount() {
        if (this.state.bearerToken === '') {
            this.authorizeDexcomUser();
        } 
        else {
            this.getBloodSugars(this.state.bearerToken);
        }
        // setInterval(() => {
        //     this.getBloodSugars(this.state.bearerToken);
        //     this.handleAlert();
        // }, 60000);
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
