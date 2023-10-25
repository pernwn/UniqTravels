//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør
import { customTheme } from '../themes/themes';
import { useTheme } from '@mui/material/styles';

import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import SearchBar from '../components/search';
import QuickTools from '../components/quick';



export default function Booking() {
    const outerTheme = useTheme();
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />
            <Typography variant="h1">Where would you like to go [username]</Typography>
            <div>
                <SearchBar/>
            </div>

            <section className='quickTools'>

                <QuickTools name="Flights"/>
                <QuickTools name="Hotels"/>
                <QuickTools name="Rentals"/>
                <QuickTools name="Explore"/>

            </section>

        </ThemeProvider>   
    
    );
}