import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import OpacityIcon from '@material-ui/icons/Opacity';
import TimelineIcon from '@material-ui/icons/Timeline';
import HomeIcon from '@material-ui/icons/Home';
import '../App.css';

const useStyles = makeStyles({
    root: {
        width: '100%',
        background: '#2D268E'
    },
});

export default function FootNavigation(props) {
    const {isLoggedIn} = props
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.onSwitchingViews(newValue);
    };

    return (
        <React.Fragment>
            <div className="footer">
                {isLoggedIn ? 
                    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                        <BottomNavigationAction label="Calibrate" value="calibrate" icon={<OpacityIcon />} style={{ color: "white" }} />
                        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} style={{ color: "white" }} />
                        <BottomNavigationAction label="Graph" value="graph" icon={<TimelineIcon />} style={{ color: "white" }} />
                    </BottomNavigation> :
                    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
                        <p id="footer">© 2020 Steph Podolak</p>
                    </BottomNavigation>
                }
            </div>
        </React.Fragment>
    );
}
