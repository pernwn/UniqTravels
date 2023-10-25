//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør

//{Kodet af: Victoria}

import logoplaceholder from '../assets/pictures/logoplaceholder.png'

import QuickTools from '../components/quick';

import Box from '@mui/material/Box';


import SearchBar from '../components/search';

//import af separat theme fil
import { customTheme } from '../themes/themes';
import { useTheme } from '@mui/material/styles';



import { CssBaseline, ThemeProvider, Typography } from '@mui/material';

import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';


export default function HomePage() {
    const outerTheme = useTheme();
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />
            <div ><img src={logoplaceholder} alt="placeholder" style={{ width: "5em" }} /></div>

            <section>
                <Box
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center"

                }}


                >

                    <Typography variant="h1">Welcome...</Typography>
                    <div>
                        <SearchBar />
                    </div>


                </Box>

            </section>

            <Box className='quickTools'
                sx={{
                    display: "flex",
                    flexDirection:"row",
                    justifyContent: "space-between",
                    margin:"8% 5%"
                }}

            >

                <QuickTools name="Destinations" icon={<FmdGoodOutlinedIcon sx={{fontSize:50}}/>} />
                <QuickTools name="Exploration" icon={<TravelExploreOutlinedIcon sx={{fontSize:50}}/>}/>


            </Box>

        </ThemeProvider>
    );
}


/*           

     <section>
            <div ><img src={logoplaceholder} alt="" style={{ width: "5em" }} /></div>
            <h1>Welcome ...</h1>



<Typography variant="h1">
            <Box
            sx={{
                textAlign:'center',
                color: 'dark',
                fontFamily:'Lalezar'
            }}
            >
               Welcome back!
            </Box>

            </Typography>





            <Box
                sx={{
                    fontFamily: 'Sen',
                    fontWeight:'500',
            
            }}
            >
                <p>Get your the best travel experience with UniqTravels!</p>
        

            </Box> 
            
            
            
            
            
                        <Box color="bg"
                sx={{
                    padding: "1em",
                }}
            >

                <Button color="dark" backgroundColor="accent" ><NavLink to="/planner">This is a button</NavLink></Button>


            </Box>*/