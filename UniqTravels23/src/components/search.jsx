
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
            <Box sx={{ display: 'flex', alignItems: 'flex-end'}}>
    
                <TextField
                    id="input-with-icon-textfield"
                    label="Your next adventure awaits!"
                    placeholder='Search'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <TravelExploreOutlinedIcon 
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
