//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør

// Her er der linket til CSS filen
import '../styles/matty.css'

//import af custom theme
import { customTheme } from '../themes/themes';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { Box, CssBaseline, Typography } from "@mui/material";


export default function ERROR_404() {
    const outerTheme = useTheme();
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />
            
        
        </ThemeProvider>
    );
}