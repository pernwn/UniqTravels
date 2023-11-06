import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';


//import af separat theme fil
import { customTheme } from '../themes/themes';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import { InputAdornment } from '@mui/material';


export default function SearchBar() {
    const outerTheme = useTheme();

    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', m:"2"}}>

                <TextField
                    id="input-with-icon-textfield"
                    label="Search"
                    placeholder='Your next adventure awaits!'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <TravelExploreOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />
            </Box>


        </ThemeProvider>
    )


}