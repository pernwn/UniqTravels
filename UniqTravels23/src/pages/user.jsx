//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør


import logoplaceholder from '../assets/pictures/logoplaceholder.png'

//import af separat theme fil
import { customTheme } from '../themes/themes';
import { useTheme } from '@mui/material/styles';

import { CssBaseline, ThemeProvider, Typography } from '@mui/material';


export default function User(){
    const outerTheme = useTheme();
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />
            <div ><img src={logoplaceholder} alt="placeholder" style={{ width: "5em" }} /></div>

    </ThemeProvider>
}