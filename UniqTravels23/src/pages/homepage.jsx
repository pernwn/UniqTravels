//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør

//{Kodet af: Victoria}

//import billeder
//import logoplaceholder from '../assets/pictures/logoplaceholder.png'


//import andre komponenter
import { QuickTools, ScrollCards } from '../components/cards';
import SearchBar from '../components/search';
import "../styles/vic.css"

//import fra MUI
import Box from '@mui/material/Box';
import { CssBaseline, Stack, ThemeProvider, Typography } from '@mui/material';
//import af ikoner fra MUI
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';



//import af separat theme file
import { customTheme } from '../themes/themes';
import { useTheme } from '@mui/material/styles';


export default function HomePage() {
    //Oprettelse af variabel for at bruge useTheme
    const outerTheme = useTheme();
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />
            <section className='hPic'>
                <section className='search'>
                    <Box /* Bruger box komponenten fra MUI i stedet for div/section etc, for at være i stand til at style med CSS fra MUI systemet*/
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",

                            position: 'absolute',
                            top: 100
                        }}
                    >
                        <Typography variant="h2" sx={{ color: customTheme => customTheme.palette.background.paper }}>Welcome...</Typography>
                        <SearchBar />
                    </Box>

                </section>
            </section>




            <Box className='quickTools'
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    m: "2em 0",
                }}
            >
                <QuickTools name="Travel options" icon={<FmdGoodOutlinedIcon sx={{ fontSize: 40 }} />} />
                <QuickTools name="Housing" icon={<FmdGoodOutlinedIcon sx={{ fontSize: 40 }} />} />
                <QuickTools name="Explore" icon={<TravelExploreOutlinedIcon sx={{ fontSize: 40 }} />} />
            </Box>



            <Box
                sx={{ color: customTheme => customTheme.palette.secondary.main }}
            >
                <Typography variant='h3' m="1% 3%" >Hot deals!</Typography>
                <Stack direction="row" spacing={4}  /*Stack komponenten fra MUI er brugt her for at sætte elementerne horisontalt – opdagede denne måde, efter jeg havde brugt flex og flexdirection andre steder */
                    sx={{
                        p: "1% 3%",
                        overflow: "auto",


                    }}
                >
                    <ScrollCards name="New offers" />
                    <ScrollCards name="Your next vacation?" />
                    <ScrollCards name="Get 20% off!" />
                    <ScrollCards name="Incredible croissonts" />
                    <ScrollCards name="Got a coupon?" />


                </Stack>
            </Box>


        </ThemeProvider >
    );
}
