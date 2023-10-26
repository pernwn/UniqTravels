//ny nav
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


//import af ikoner fra MUI
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { NavLink } from 'react-router-dom';

//{Kodet af Victoria ved brug af MUI library og tilpasset til vores app}

//TODO: skal lige have skrevet kommentarer til ddet her
export default function Nav() {
    const [setValue] = React.useState("");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
            <BottomNavigation
                sx={{width: "100%", position: 'fixed', bottom: 0, left: 0, right: 0}}
                value={location.pathname}
                onChange={handleChange}
            >

                <BottomNavigationAction
                    component={NavLink}
                    to='/'
                    label="Home"
                    value="/"
                    icon={<HomeOutlinedIcon />}
                />
                <BottomNavigationAction
                    component={NavLink}
                    to='/booking'
                    label="Booking"
                    value="/booking"
                    icon={<AirplaneTicketOutlinedIcon />}
                />
                <BottomNavigationAction
                    component={NavLink}
                    to='/map'
                    label="Map"
                    value="/map"
                    icon={<ExploreOutlinedIcon />}
                />
                <BottomNavigationAction
                    component={NavLink}
                    to='/planner'
                    label="Planner"
                    value="/planner"
                    icon={<EventOutlinedIcon />} />

                <BottomNavigationAction
                    component={NavLink}
                    to='/user'
                    label="User"
                    value="/user"
                    icon={<AccountCircleOutlinedIcon />} />

            </BottomNavigation>

    );
}
