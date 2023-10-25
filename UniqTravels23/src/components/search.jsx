//{Kodet af: Vic}


import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

//import af separat theme fil
import { customTheme } from '../themes/themes';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';

export default function SearchBar() {
    const outerTheme = useTheme();
    return (
        <ThemeProvider theme={customTheme(outerTheme)}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start'}}>
    
                <TextField
                    id="input-with-icon-textfield"
                    label="Your next adventure awaits!"
                    placeholder='Search'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon
                                sx={{ color: customTheme => customTheme.palette.primary.main }}
                                
                                />
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />
            </Box>

        </ThemeProvider>
    )

}
