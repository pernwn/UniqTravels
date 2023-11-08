//{Kodet af: Victoria}




//import af separat theme fil
import { customTheme } from '../themes/themes';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Divider, IconButton, InputBase, Paper } from '@mui/material';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';


//import Desti from './searchDesti';
import { useState } from 'react';

import countriesData from "../json/cName.json"


export default function SearchBar({setResults}){
    const outerTheme = useTheme();
    const [input, setInput] = useState('');

   

    const fetchData = (value) => {
      
            const results = countriesData.filter((obj) => {
                return value && obj && obj.country && obj.country.toLowerCase().includes(value.toLowerCase())
            });

            setResults(results);
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

                <IconButton sx={{ p: '10px' }} label="search filter">
                    <TuneOutlinedIcon />
                </IconButton>

                {/*
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

                <IconButton sx={{ p: '10px', color: customTheme => customTheme.palette.text.primary }} label="directions">
                    <DirectionsIcon />
                </IconButton>*/}
            </Paper>




        </ThemeProvider>
    );

}
