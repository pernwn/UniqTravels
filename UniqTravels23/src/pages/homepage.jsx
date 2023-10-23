//HUSK AT SKRIVE KOMMENTARER TIL NÆRMEST ALT – forklaring samt hvad koden gør


import logoplaceholder from '../assets/pictures/logoplaceholder.png'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { customTheme } from '../themes/themes';


import { Button, Card, CardActions, CardContent, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';




export default function HomePage() {
    const outerTheme = useTheme();
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <CssBaseline enableColorScheme />
            <div ><img src={logoplaceholder} alt="placeholder" style={{ width: "5em" }} /></div>

            <section>
                <Box
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '30ch' },


                    }}
                    noValidate
                    autoComplete="off"

                    display={"flex"}
                    flexDirection={"column"}
                    textAlign={"center"}

                >

                    <Typography variant="h1">Welcome...</Typography>
                    <div>
                        <TextField
                            id="filled-search"
                            label="Search travel destinations..."
                            type="search"
                            variant="filled"

                        />
                    </div>


                </Box>

            </section>

            <section className='quickTools'>

                <Card 
                    sx={{ 
                        minWidth: 16,
      
                    
                    }}
                >
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="primary">
                            icon her
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button variant='h2'>ikon navn her</Button>
                    </CardActions>
                </Card>


            </section>

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