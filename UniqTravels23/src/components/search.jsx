import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';


//import af separat theme fil
import { customTheme } from '../themes/themes';
import { ThemeProvider, useTheme } from '@mui/material/styles';


export default function SearchBar() {
    const outerTheme = useTheme();

    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '30ch' },


                }}
                noValidate
                autoComplete="off"
            >
               <TravelExploreOutlinedIcon />
                <TextField

                    id="filled-search"
                    label="Search travel destinations..."
                    type="search"
                    variant="filled"

                />

            </Box>


        </ThemeProvider>
    )


}