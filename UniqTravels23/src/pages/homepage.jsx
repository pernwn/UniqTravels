//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør

import { Box, Button, ThemeProvider, Typography, createTheme } from "@mui/material";
import { NavLink } from "react-router-dom";



const theme = createTheme({
    spacing: [0, 4, 8, 16, 32, 64],


    palette:{
        main: '#EEF9FF',
        accent: '#FFB336',
        dark: '#1C465C'

    },

    typography:{
        fontFamily:
            [
                'Lalezar, Sen',
            ].join(','),

    },

 

    components:{
        //component name
        MuiButton:{
            styleOverrides:{
                //styles to override mui theme
                root: {
                    background:'#FFB336',
                    color:'#EEF9FF',
                    borderRadius:'1rem'

                }
            }
        }
    }


})


theme.spacing(2);

theme.typography.h1 ={
    fontSize: '3rem',
}


export default function HomePage() {
    return (
        <ThemeProvider theme={theme}>
         
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


            <NavLink to="/planner"><Button>This is a button</Button></NavLink> 
        </ThemeProvider>
    );
}