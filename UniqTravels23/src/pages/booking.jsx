//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør
import { customTheme } from '../themes/themes';
import { useTheme } from '@mui/material/styles';

import { CssBaseline, ThemeProvider, Typography } from '@mui/material';



export default function Booking() {
    const outerTheme = useTheme();
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />
            <Typography variant="h1">Booking</Typography>

        </ThemeProvider>   
    
    );
}