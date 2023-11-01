//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør

// Med NavLink gør vi, at produktet bliver en 1 pager
import { NavLink } from "react-router-dom";


import logoplaceholder from '../assets/pictures/logoplaceholder.png'
import userp from '../assets/pictures/userp.png'


//import af separat theme fil
import { customTheme } from '../themes/themes';
import { useTheme } from '@mui/material/styles';

import { CssBaseline, ThemeProvider, Typography } from '@mui/material';

import UserHead from "../components/userhead";
import '../styles/vic.css'

export default function User() {
    const outerTheme = useTheme();
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />

            <div className="header">
                <Typography variant="subtitle1" className="h_txt">Traveler Profile</Typography>
            </div>

            <section className="body">
                <section className="b_head">


                    <div className="user">
                        <div className="u_img"><img src={userp} alt="User Profilpicture" /></div>
                    </div>
                    
                    <UserHead />
                    <img src={logoplaceholder} alt="placeholder" style={{ width: "5em" }} />
                    <NavLink to='/login'>login</NavLink>
                </section>

            </section>



        </ThemeProvider>
    );
}