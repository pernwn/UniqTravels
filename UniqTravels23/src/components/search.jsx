//{Kodet af: Victoria}


//import Box from '@mui/material/Box';
//import TextField from '@mui/material/TextField';

//import af separat theme fil
import { customTheme } from '../themes/themes';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Divider, IconButton, InputBase, Paper } from '@mui/material';
//import MenuIcon from '@mui/icons-material/Menu';
//import DirectionsIcon from '@mui/icons-material/Directions';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import cName from "../json/cName.json"

//import Desti from './searchDesti';
import { useState } from 'react';




export default function SearchBar({setResults}){
    const json = cName;
    const obj = JSON.parse(json)

 // { country: 'Afghanistan', city: 'Kabul' }
    const outerTheme = useTheme();
    const [input, setInput] = useState("");
   

    const fetchData = (value) => {
        fetch(obj).then((response) => response.json()).then((json) => 
        { 
            const results = json.filter((obj) => {
                return value && obj && obj.country && obj.country.toLowerCase().includes(value)
            });

            setResults(results);
        });
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);

    }

    return (
        <ThemeProvider theme={customTheme(outerTheme)}>

            <Paper
                component="form"
                elevation="14"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, opacity: .9 }}
            >


                <InputBase //søgefeltet
                    sx={{ ml: 2, flex: 1 }}
                    component="input"
                    placeholder="Search dream vacation"
                    inputProps={{ 'aria-label': 'Your next dream vacation' }}
                    onChange={(e) => handleChange(e.target.value)}
                    value={input}
                />

                <IconButton type="button" sx={{ p: '10px' }} label="search">
                    <SearchIcon />
                </IconButton>

                <Divider sx={{ height: 28, m: 0.2 }} orientation="vertical" />

                <IconButton sx={{ p: '10px' }} label="search filter" /*Denne menu skal laves til filtrerin */>
                    <TuneOutlinedIcon />
                </IconButton>

                {/*
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

                <IconButton sx={{ p: '10px', color: customTheme => customTheme.palette.text.primary }} label="directions">
                    <DirectionsIcon />
                </IconButton>*/}
            </Paper>




        </ThemeProvider>
    )

}

/*


            <Paper className='search-results'>
                Searchbar results

            </Paper>

<Box sx={{
    display: 'flex',
    alignItems: 'flex-start',
}}>
    <TextField //DENNE SKAL HAVE INPUT ?? man skal kunne søge ting, evt tag fra firebase

        fullWidth
        id="input-with-icon-textfield"
        label="Your next adventure awaits!"
        placeholder='E.g. "Amazing beaches"'

        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                    <SearchIcon
                        sx={{ color: customTheme => customTheme.palette.secondary.main }}
                    />
                </InputAdornment>
            ),
        }}
        variant="outlined"
    />
</Box>*/