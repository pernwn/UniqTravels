//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør

// Her er der linket til CSS filen
import '../styles/matty.css'

//import af custom theme
import { customTheme } from '../themes/themes';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { Box, CssBaseline, Typography } from "@mui/material";

//Knap til forside
//Logo
//Tekst der siger at siden ikke eksisterer
//Evt. Adresse, tlf eller konktakt support "Support er taget på ferie med Artic Artie, kom tilbage om 1 uge"
export default function ERROR_404() {
    const outerTheme = useTheme();
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />

        
        </ThemeProvider>
    );
}