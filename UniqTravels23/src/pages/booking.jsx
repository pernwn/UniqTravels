//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør
import { customTheme } from '../themes/themes';
import { useTheme } from '@mui/material/styles';

import { CssBaseline, Stack, ThemeProvider, Typography } from '@mui/material';
import SearchBar from '../components/search';
import { QuickTools } from '../components/cards';
import ComplexCard from '../components/compcard';



export default function Booking() {
    const outerTheme = useTheme();
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />
            <Typography variant="h2">Where would you like to go [username]</Typography>
            <div>
                <SearchBar/>
            </div>



            <section className='quickTools'>
                <Stack direction="row" spacing={2}  
                        sx={{

                            padding: "1% 3%",
                            overflow: "auto",

                        }}>

                    <QuickTools name="Flights"/>
                    <QuickTools name="Hotels"/>
                    <QuickTools name="Rentals"/>
                    <QuickTools name="Explore"/>
                </Stack>
            </section>
            <Typography variant="h2">Flights</Typography>

            <Stack direction="row" spacing={2}>
            <ComplexCard />
            </Stack>
            
        </ThemeProvider>   
    
    );
}