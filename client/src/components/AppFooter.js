import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import OpacityIcon from '@material-ui/icons/Opacity';
import TimelineIcon from '@material-ui/icons/Timeline';
import HomeIcon from '@material-ui/icons/Home';
import '../App.css';

const useStyles = makeStyles({
    noAlert: {
        width: '100%',
        background: '#2D268E'
    },
    lowAlert: {
        width: '100%',
        background: '#0D0221'
    },
    highAlert: {
        width: '100%',
        background: '#FF1B1C'
        // background: '#F46036'
        // background: '#FF8811'
        // background: '#BC2C1A'
        // background: '#832232'
        // background: '#EF3E36'
        // background: '#FF331F'
    },
});

export default function FootNavigation(props) {
    const { isLoggedIn, currentAlert } = props
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');
    const [style, setStyle] = React.useState(classes.noAlert);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.onSwitchingViews(newValue);
    };

    const handleStyle = () => {
        switch (currentAlert) {
            case 'lowAlert':
                setStyle(classes.lowAlert);
                break;
            case 'highAlert':
                setStyle(classes.highAlert);
                break;
            default:
                setStyle(classes.noAlert)
        }
    }

    useEffect(() => {
        handleStyle();
    });

    return (
        < React.Fragment >
            <div className="footer">
                {isLoggedIn ?
                    <BottomNavigation value={value} onChange={handleChange} className={style}>
                        <BottomNavigationAction label="Calibrate" value="calibrate" icon={<OpacityIcon />} style={{ color: "white" }} />
                        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} style={{ color: "white" }} />
                        <BottomNavigationAction label="Graph" value="graph" icon={<TimelineIcon />} style={{ color: "white" }} />
                    </BottomNavigation> :
                    <BottomNavigation value={value} onChange={handleChange} className={style}>
                        <p id="footer">© 2020 Steph Podolak</p>
                    </BottomNavigation>
                }
            </div>
        </React.Fragment >
    );
}
//