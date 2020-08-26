import React from 'react';
import PropTypes from "prop-types";
import CircleIconButton from "./CircleIconButton";
import Orb from './Orb';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    center: {
        margin: 'auto',
    },
    margin: {
        marginTop: '200px',
    }
});


export default function CurrentBloodSugar(props) {
    const { value, lowLimit, highLimit, onSwitchingViews } = props;
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
                <Grid container >
                    <Grid item xs={12}>
                        <Orb egv={value} lowLimit={lowLimit} highLimit={highLimit} />
                        <p className="egv">{value}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.margin}>
                            <button class="outline" type="submit" onClick={() => onSwitchingViews('add_symptom')}>
                                How do you feel?
                            </button>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}

CurrentBloodSugar.propTypes = {
    lowLimit: PropTypes.number,
    highLimit: PropTypes.number,
    value: PropTypes.number,
    onSwitchingViews: PropTypes.func
}

