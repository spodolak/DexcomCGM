import React from 'react';
import PropTypes from "prop-types";
import CircleIconButton from "./CircleIconButton";
import Orb from './Orb';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  center: {
    margin: 'auto'
},
});


export default function CurrentBloodSugar(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
                <Grid container >
                    <Grid item xs={12}> 
                        <Orb egv={props.value} />
                        <p className="egv">{props.value}</p>
                    </Grid>
                    <Grid item xs={12}> 
                        <CircleIconButton onSwitchingViews={props.onSwitchingViews} />
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    )
}

CurrentBloodSugar.propTypes = {
    value: PropTypes.number,
    onSwitchingViews: PropTypes.func
}

